import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Code, Users } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content container">
          <h1 className="hero-title">
            NOVA<span className="text-gradient">HACK</span>
          </h1>
          <h2 className="hero-year text-glow">AI 2026</h2>
          
          <div className="hero-separator">
            <span>INNOVATE</span> | <span>CODE</span> | <span>WIN</span>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon"><Trophy size={48} /></div>
              <p>PRIZES</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Code size={48} /></div>
              <p>12HR CODING</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><Users size={48} /></div>
              <p>NETWORKING</p>
            </div>
          </div>

          <p className="hero-description">
            A GLOBAL ONLINE HACKATHON FOR<br/>
            INNOVATORS, DEVELOPERS & CREATORS.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="btn-neon">REGISTER NOW</Link>
          </div>
          
          <div className="hero-footer-features">
             <div className="footer-feature"><span>AI FOR ALL</span></div>
             <div className="footer-feature"><span>BUILD THE FUTURE</span></div>
             <div className="footer-feature"><span>COLLABORATE GLOBALLY</span></div>
             <div className="footer-feature"><span>CODE FEARLESSLY</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
