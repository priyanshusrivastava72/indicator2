import React from 'react';
import './WhatYouGet.css';

const WhatYouGet = () => {
  const items = [
    { title: 'Full Course (6 Modules)', desc: 'From basics to advanced technical analysis.' },
    { title: 'Smart Charting Helper', desc: 'Support/resistance and trend theory companion.' },
    { title: 'Private Community Access', desc: 'Network with serious students and mentors.' },
    { title: 'Lifetime Content Updates', desc: 'Get all future module additions for free.' },
    { title: 'Student Support', desc: 'Answers to your study and market theory questions.' },
    { title: 'Completion Certificate', desc: 'Official proof of your new skillset.' }
  ];

  return (
    <section className="section bg-primary">
      <div className="container fade-up">
        <h2 className="what-you-get-title text-center">Everything in your enrollment.</h2>

        <div className="checklist-grid">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="checklist-item fade-up"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="check-icon">&#10003;</div>
              <div className="check-content">
                <span className="check-title">{item.title}</span>
                <span className="check-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
