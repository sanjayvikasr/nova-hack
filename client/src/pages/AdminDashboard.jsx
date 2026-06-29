import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Download, Search, Check, X } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Mock data for UI demonstration
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const fetchTeams = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/teams`);
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
    }
  };

  const verifyTeam = async (id, status) => {
    try {
      await axios.put(`${API_URL}/api/admin/teams/${id}/verify`, { status });
      fetchTeams(); // Refresh the list
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="container admin-page">
      <div className="admin-header">
        <h2 className="text-gradient">ADMIN DASHBOARD</h2>
        <button className="btn-neon-cyan" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          <Download size={18} style={{ marginRight: '8px' }} /> Export to Excel
        </button>
      </div>

      <div className="admin-controls glass-card">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input type="text" className="form-control" placeholder="Search teams by ID, Name or College..." />
        </div>
        <div className="analytics">
          <div className="stat">Total Teams: <span className="text-glow">{teams.length}</span></div>
          <div className="stat">Pending: <span className="text-pending">{teams.filter(t => t.payment?.status === 'Pending Verification').length}</span></div>
          <div className="stat">Approved: <span style={{color: 'var(--success)'}}>{teams.filter(t => t.payment?.status === 'Approved').length}</span></div>
        </div>
      </div>

      <div className="table-container glass-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Registration ID</th>
              <th>Team Name</th>
              <th>College</th>
              <th>Leader</th>
              <th>Payment ID</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team.registrationId}>
                <td>{team.registrationId}</td>
                <td>{team.teamName}</td>
                <td>{team.collegeName}</td>
                <td>{team.leaderName}</td>
                <td>
                  {team.payment?.transactionId} 
                  <a href={`${API_URL}/api/image/${team.payment?.screenshotId}`} target="_blank" rel="noreferrer" className="link-btn" style={{display: 'inline-block', marginLeft: '8px'}}>View Screenshot</a>
                </td>
                <td>
                  <span className={`status-badge ${team.payment?.status === 'Approved' ? 'approved' : 'pending'}`}>
                    {team.payment?.status}
                  </span>
                </td>
                <td>
                  {team.payment?.status === 'Pending Verification' && (
                    <div className="action-buttons">
                      <button className="icon-btn approve" onClick={() => verifyTeam(team.registrationId, 'Approved')} title="Approve">
                        <Check size={18} />
                      </button>
                      <button className="icon-btn reject" onClick={() => verifyTeam(team.registrationId, 'Rejected')} title="Reject">
                        <X size={18} />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
