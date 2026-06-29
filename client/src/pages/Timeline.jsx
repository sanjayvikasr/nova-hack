import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const events = [
    { date: '10 July 2026', title: 'Registration Opens', desc: 'Form your teams and register early.' },
    { date: '5 August 2026', title: 'Registration Closes', desc: 'Last day to submit your team details and fee.' },
    { date: '8 August 2026', title: 'Opening Ceremony', desc: 'Kickoff meeting and theme reveal.' },
    { date: '9 August 2026', title: 'Hackathon Day', desc: '12 hours of non-stop coding begins.' },
    { date: '10 August 2026', title: 'Submission Deadline', desc: 'Submit your code repository and demo video.' },
    { date: '15 August 2026', title: 'Result Announcement', desc: 'Winners declared and prizes distributed.' }
  ];

  return (
    <div className="container timeline-page">
      <h2 className="page-title text-gradient text-glow">EVENT TIMELINE</h2>
      
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <h3 className="timeline-date">{event.date}</h3>
              <h4 className="timeline-title">{event.title}</h4>
              <p className="timeline-desc">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
