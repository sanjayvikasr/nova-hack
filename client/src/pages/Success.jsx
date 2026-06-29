import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const registrationId = location.state?.registrationId || 'NOVA-0000';
  const teamName = location.state?.teamName || 'Your Team';

  return (
    <div className="container success-page">
      <div className="success-card glass-card">
        <div className="success-icon">
          <CheckCircle size={80} />
        </div>
        
        <h2 className="text-gradient">REGISTRATION SUBMITTED</h2>
        <p className="success-subtitle">Welcome to NovaHack AI 2026, <strong>{teamName}</strong>!</p>
        
        <div className="reg-id-box">
          <p>Registration ID</p>
          <h3 className="text-glow">{registrationId}</h3>
        </div>

        <div className="status-box">
          <p><strong>Payment Status:</strong> <span className="text-pending">Pending Verification</span></p>
          <p>Your payment screenshot has been submitted and is currently under review by our team.</p>
        </div>

        <p className="email-note">A confirmation email has been sent to the team leader's address with further instructions.</p>

        <div className="success-actions">
          <Link to="/" className="btn-neon">RETURN HOME</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
