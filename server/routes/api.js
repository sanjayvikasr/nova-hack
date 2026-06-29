const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Registration = require('../models/Registration');
const mongoose = require('mongoose');
const { Readable } = require('stream');// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST /api/register - Register team and upload payment
router.post('/register', upload.single('screenshot'), async (req, res) => {
  try {
    const {
      teamName, collegeName, leaderName, leaderEmail, leaderPhone,
      member2Name, member3Name, member4Name, member5Name, transactionId
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Payment screenshot is required.' });
    }

    const uploadFile = () => new Promise((resolve, reject) => {
      const db = mongoose.connection.db;
      const bucket = new mongoose.mongo.GridFSBucket(db, { bucketName: 'screenshots' });
      const uploadStream = bucket.openUploadStream(req.file.originalname, { contentType: req.file.mimetype });
      
      Readable.from(req.file.buffer)
        .pipe(uploadStream)
        .on('error', reject)
        .on('finish', () => resolve(uploadStream.id));
    });

    const screenshotId = await uploadFile();

    const registrationId = 'NOVA-' + Math.floor(1000 + Math.random() * 9000);

    const newRegistration = new Registration({
      registrationId,
      teamName,
      collegeName,
      leaderName,
      leaderEmail,
      leaderPhone,
      member2Name,
      member3Name,
      member4Name,
      member5Name,
      payment: {
        transactionId,
        screenshotId,
        status: 'Pending Verification'
      }
    });

    await newRegistration.save();
    res.status(201).json({ message: 'Registration successful', registrationId, teamName });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// GET /api/admin/teams - Get all registrations for admin dashboard
router.get('/admin/teams', async (req, res) => {
  try {
    const teams = await Registration.find().sort({ createdAt: -1 });
    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

// PUT /api/admin/teams/:id/verify - Approve or reject team
router.put('/admin/teams/:id/verify', async (req, res) => {
  try {
    const { status } = req.body; // 'Approved' or 'Rejected'
    const team = await Registration.findOneAndUpdate(
      { registrationId: req.params.id },
      { 'payment.status': status },
      { new: true }
    );
    
    if (!team) {
      return res.status(404).json({ error: 'Team not found' });
    }
    
    res.json({ message: `Team ${status} successfully`, team });
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify team' });
  }
});

// GET /api/image/:id - Get image from GridFS
router.get('/image/:id', async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const bucket = new mongoose.mongo.GridFSBucket(db, { bucketName: 'screenshots' });
    const objectId = new mongoose.Types.ObjectId(req.params.id);
    
    const files = await bucket.find({ _id: objectId }).toArray();
    if (!files || files.length === 0) {
      return res.status(404).send('Image not found');
    }
    
    res.set('Content-Type', files[0].contentType);
    const downloadStream = bucket.openDownloadStream(objectId);
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

module.exports = router;
