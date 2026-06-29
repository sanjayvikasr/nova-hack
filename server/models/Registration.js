const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  registrationId: { type: String, required: true, unique: true },
  teamName: { type: String, required: true },
  collegeName: { type: String, required: true },
  leaderName: { type: String, required: true },
  leaderEmail: { type: String, required: true },
  leaderPhone: { type: String, required: true },
  member2Name: { type: String },
  member3Name: { type: String },
  member4Name: { type: String },
  member5Name: { type: String },
  payment: {
    transactionId: { type: String, required: true },
    screenshotPath: { type: String, required: true },
    status: { type: String, enum: ['Pending Verification', 'Approved', 'Rejected'], default: 'Pending Verification' }
  }
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
