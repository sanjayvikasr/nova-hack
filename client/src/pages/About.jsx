import React from 'react';
import { Target, Users, CreditCard, Award, Globe, Cpu, BrainCircuit } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="container about-page">
      <h2 className="page-title text-gradient text-glow">ABOUT THE EVENT</h2>
      
      {/* General Information Grid */}
      <div className="about-grid mb-5">
        <div className="glass-card about-card">
          <div className="about-icon"><Award size={40} /></div>
          <h3>Eligibility</h3>
          <p>
            Open to all innovators, developers, students, and professionals globally. 
            Whether you're a seasoned AI expert or a passionate beginner, there's a place for you.
          </p>
        </div>

        <div className="glass-card about-card">
          <div className="about-icon"><Users size={40} /></div>
          <h3>Team Size</h3>
          <p>
            Collaborate in teams of <strong>1 to 5 members</strong>. 
            Diverse teams with varying skill sets are highly encouraged!
          </p>
        </div>

        <div className="glass-card about-card">
          <div className="about-icon"><CreditCard size={40} /></div>
          <h3>Registration Fee</h3>
          <p>
            A nominal registration fee of <strong>₹500 per team</strong> is required. 
            This helps us ensure commitment and provide the best infrastructure for the hackathon platform.
          </p>
        </div>
      </div>

      {/* Themes Section */}
      <h2 className="section-title text-gradient text-glow text-center mb-4" style={{ marginTop: '4rem' }}>HACKATHON THEMES</h2>
      
      <div className="themes-container">
        
        {/* Theme 1 */}
        <div className="theme-card glass-card">
          <div className="theme-header">
            <BrainCircuit size={32} className="theme-icon" />
            <h3>Theme 1: AI for Human Digital Twin Ecosystem</h3>
          </div>
          <div className="theme-content">
            <p className="problem-statement"><strong>Problem Statement:</strong> Every individual generates massive amounts of digital data through learning, health records, work activities, financial decisions, and online interactions. However, these data remain fragmented across different platforms and cannot be utilized effectively for personalized assistance and predictive decision-making.</p>
            <p><strong>Goal:</strong> Build an AI-powered Digital Twin Platform that creates a virtual representation of a user and continuously learns from their activities to provide intelligent recommendations, predictions, and automation.</p>
            
            <div className="theme-details">
              <div className="theme-box">
                <h4>Challenge Areas</h4>
                <ul>
                  <li>Personalized learning recommendations</li>
                  <li>Health and wellness predictions</li>
                  <li>Productivity optimization</li>
                  <li>Financial behavior insights</li>
                  <li>Career growth suggestions</li>
                  <li>Intelligent task automation</li>
                </ul>
              </div>
              <div className="theme-box">
                <h4>Expected Features</h4>
                <ul>
                  <li>AI Agent-based architecture</li>
                  <li>Real-time behavioral analysis</li>
                  <li>Predictive recommendations</li>
                  <li>Privacy-first data handling</li>
                  <li>Multi-source data integration</li>
                </ul>
              </div>
            </div>
            <p className="evaluation"><strong>Evaluation Focus:</strong> Personalization capability, AI intelligence level, Privacy and security, Scalability</p>
          </div>
        </div>

        {/* Theme 2 */}
        <div className="theme-card glass-card">
          <div className="theme-header">
            <Globe size={32} className="theme-icon" />
            <h3>Theme 2: Collective Intelligence Platform for Global Problem Solving</h3>
          </div>
          <div className="theme-content">
            <p className="problem-statement"><strong>Problem Statement:</strong> Natural disasters, public health crises, urban congestion, and climate change require collaborative intelligence rather than isolated solutions. Existing systems fail to aggregate community knowledge into actionable insights.</p>
            <p><strong>Goal:</strong> Develop an AI-powered collaborative decision-making platform where communities, organizations, and governments can collectively solve large-scale problems using AI.</p>
            
            <div className="theme-details">
              <div className="theme-box">
                <h4>Example Use Cases</h4>
                <ul>
                  <li>Disaster response coordination</li>
                  <li>Traffic optimization</li>
                  <li>Resource allocation</li>
                  <li>Public policy simulation</li>
                  <li>Community issue prioritization</li>
                </ul>
              </div>
              <div className="theme-box">
                <h4>Expected Features</h4>
                <ul>
                  <li>Multi-agent AI collaboration</li>
                  <li>Predictive analytics</li>
                  <li>Crowdsourced intelligence</li>
                  <li>Simulation engine</li>
                  <li>Real-time dashboards</li>
                </ul>
              </div>
            </div>
            <p className="evaluation"><strong>Evaluation Focus:</strong> Societal impact, Scalability, AI implementation, Innovation</p>
          </div>
        </div>

        {/* Theme 3 */}
        <div className="theme-card glass-card">
          <div className="theme-header">
            <Cpu size={32} className="theme-icon" />
            <h3>Theme 3: Autonomous Web Ecosystems using AI Agents</h3>
          </div>
          <div className="theme-content">
            <p className="problem-statement"><strong>Problem Statement:</strong> Current web applications require continuous human intervention for customer support, operations, content generation, scheduling, and monitoring. The future of the internet is autonomous systems that can operate independently.</p>
            <p><strong>Goal:</strong> Create an AI Agent-powered web ecosystem where multiple AI agents collaborate autonomously to perform business operations with minimal human intervention.</p>
            
            <div className="theme-details">
              <div className="theme-box">
                <h4>Example AI Agents / Use Cases</h4>
                <ul>
                  <li>Customer Support, Marketing, Sales, Analytics Agents</li>
                  <li>Autonomous e-commerce stores</li>
                  <li>AI-managed startups or smart hospitals</li>
                  <li>Autonomous universities or government services</li>
                </ul>
              </div>
              <div className="theme-box">
                <h4>Expected Features</h4>
                <ul>
                  <li>Multi-agent communication</li>
                  <li>Workflow orchestration</li>
                  <li>Decision-making engine</li>
                  <li>Human approval mechanisms</li>
                  <li>Explainable AI outputs</li>
                </ul>
              </div>
            </div>
            <p className="evaluation"><strong>Evaluation Focus:</strong> Agent collaboration, Automation level, Technical complexity, Business value</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
