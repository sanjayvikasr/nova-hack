import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Hardcoded for demo
      navigate('/admin/dashboard');
    } else {
      alert("Invalid admin password");
    }
  };

  return (
    <div className="container" style={{ paddingTop: '6rem', display: 'flex', justifyContent: 'center' }}>
      <div className="glass-card" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h2 className="text-gradient mb-4">ADMIN ACCESS</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              placeholder="Enter Admin Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-neon-cyan" style={{ width: '100%' }}>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
