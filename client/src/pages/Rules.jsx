import React from 'react';
import './Rules.css';

const Rules = () => {
  return (
    <div className="container rules-page">
      <h2 className="page-title text-gradient text-glow">RULES & FAQs</h2>
      
      <div className="rules-content">
        <section className="glass-card mb-4">
          <h3 className="section-title">Hackathon Rules</h3>
          <ul className="rules-list">
            <li><strong>Original Work:</strong> All code must be written during the hackathon. You can use open-source libraries and APIs.</li>
            <li><strong>Team Size:</strong> Teams must consist of 1 to 5 members.</li>
            <li><strong>Submission:</strong> A working prototype along with a short demo video and GitHub repo must be submitted before the deadline.</li>
            <li><strong>Code of Conduct:</strong> Treat everyone with respect. Harassment of any kind will not be tolerated.</li>
            <li><strong>AI Tools:</strong> The use of AI coding assistants (like Copilot, ChatGPT) is permitted, but the core idea and architecture must be your own.</li>
          </ul>
        </section>

        <section className="glass-card">
          <h3 className="section-title">Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4>Q: Do I need to be a student to participate?</h4>
            <p>A: No! NovaHack AI is open to professionals, creators, and developers of all backgrounds.</p>
          </div>
          
          <div className="faq-item">
            <h4>Q: How does the payment verification work?</h4>
            <p>A: Once you submit the registration fee via UPI and upload the screenshot, our admin team will manually verify it. You will receive an email once approved.</p>
          </div>

          <div className="faq-item">
            <h4>Q: Can we change team members after registration?</h4>
            <p>A: Minor changes can be requested up to 48 hours before the hackathon begins by contacting support.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rules;
