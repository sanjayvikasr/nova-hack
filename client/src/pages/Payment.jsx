import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { QrCode, Upload } from 'lucide-react';
import './Payment.css';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const registrationData = location.state?.registrationData || {};

  const [transactionId, setTransactionId] = useState('');
  const [screenshot, setScreenshot] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setScreenshot(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!transactionId || !screenshot) {
      alert("Please provide both Transaction ID and Screenshot.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      // Add all registration data
      Object.keys(registrationData).forEach(key => {
        if (registrationData[key]) {
          formData.append(key, registrationData[key]);
        }
      });
      // Add payment details
      formData.append('transactionId', transactionId);
      formData.append('screenshot', screenshot);

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_URL}/api/register`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setIsSubmitting(false);
      navigate('/success', { 
        state: { 
          teamName: response.data.teamName, 
          registrationId: response.data.registrationId 
        } 
      });
    } catch (error) {
      setIsSubmitting(false);
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container payment-page">
      <h2 className="page-title text-gradient text-glow">COMPLETE PAYMENT</h2>
      
      <div className="payment-container glass-card">
        <div className="payment-info">
          <div className="qr-section">
            <div className="qr-placeholder">
              <QrCode size={120} className="qr-icon" />
            </div>
            <p className="upi-id">UPI ID: <strong>sanjayvikas1212@oksbi</strong></p>
            <p className="amount">Amount: <strong className="text-gradient">₹500</strong></p>
          </div>
          
          <div className="instructions">
            <h3 className="section-title">Payment Instructions</h3>
            <ol className="rules-list">
              <li>Scan the QR code or use the UPI ID above.</li>
              <li>Pay exactly ₹500 from any UPI app (GPay, PhonePe, Paytm, etc.).</li>
              <li>Take a screenshot of the successful payment screen.</li>
              <li>Note down the 12-digit UPI Transaction/Reference ID.</li>
            </ol>
          </div>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">UPI Transaction ID *</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="e.g. 312345678901" 
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Upload Payment Screenshot *</label>
            <div className="file-upload-wrapper">
              <input 
                type="file" 
                id="screenshot" 
                className="file-input" 
                accept="image/*"
                onChange={handleFileChange}
              />
              <label htmlFor="screenshot" className="file-label">
                <Upload size={24} />
                <span>{screenshot ? screenshot.name : 'Choose a file or drag it here'}</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-neon" disabled={isSubmitting}>
              {isSubmitting ? 'VERIFYING...' : 'SUBMIT REGISTRATION'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
