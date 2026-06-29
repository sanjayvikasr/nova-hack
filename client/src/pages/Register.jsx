import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamName: '',
    collegeName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    member2Name: '',
    member3Name: '',
    member4Name: '',
    member5Name: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.teamName || !formData.collegeName || !formData.leaderName || !formData.leaderEmail || !formData.leaderPhone) {
      alert("Please fill in all required fields.");
      return;
    }
    
    // Here we would typically save state to a context or localStorage to pass to payment
    // For now we just navigate to payment
    navigate('/payment', { state: { registrationData: formData } });
  };

  return (
    <div className="container register-page">
      <h2 className="page-title text-gradient text-glow">TEAM REGISTRATION</h2>
      
      <div className="register-container glass-card">
        <form onSubmit={handleSubmit}>
          
          <div className="form-section">
            <h3 className="section-title">Team & College Details</h3>
            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Team Name *</label>
                <input type="text" className="form-control" name="teamName" value={formData.teamName} onChange={handleChange} required />
              </div>
              <div className="form-group half">
                <label className="form-label">College / University Name *</label>
                <input type="text" className="form-control" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">Team Leader Details</h3>
            <div className="form-row">
              <div className="form-group third">
                <label className="form-label">Full Name *</label>
                <input type="text" className="form-control" name="leaderName" value={formData.leaderName} onChange={handleChange} required />
              </div>
              <div className="form-group third">
                <label className="form-label">Email Address *</label>
                <input type="email" className="form-control" name="leaderEmail" value={formData.leaderEmail} onChange={handleChange} required />
              </div>
              <div className="form-group third">
                <label className="form-label">Phone Number *</label>
                <input type="tel" className="form-control" name="leaderPhone" value={formData.leaderPhone} onChange={handleChange} required />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3 className="section-title">Team Members (Optional)</h3>
            <p className="section-subtitle">Add up to 4 more members to your team.</p>
            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Member 2 Name</label>
                <input type="text" className="form-control" name="member2Name" value={formData.member2Name} onChange={handleChange} />
              </div>
              <div className="form-group half">
                <label className="form-label">Member 3 Name</label>
                <input type="text" className="form-control" name="member3Name" value={formData.member3Name} onChange={handleChange} />
              </div>
              <div className="form-group half">
                <label className="form-label">Member 4 Name</label>
                <input type="text" className="form-control" name="member4Name" value={formData.member4Name} onChange={handleChange} />
              </div>
              <div className="form-group half">
                <label className="form-label">Member 5 Name</label>
                <input type="text" className="form-control" name="member5Name" value={formData.member5Name} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-neon">PROCEED TO PAYMENT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
