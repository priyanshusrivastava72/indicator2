import React from 'react';
import './WhoIsThisFor.css';

const WhoIsThisFor = () => {
  const personas = [
    { 
      icon: '🎓', 
      title: 'Students', 
      desc: 'Looking to build financial literacy and market analysis skills while completing their education.',
      benefit: 'A foundational financial skillset.'
    },
    { 
      icon: '💼', 
      title: 'Professionals', 
      desc: 'Wanting to understand market structure and risk management concepts without quitting their day job.',
      benefit: 'A curriculum designed for study of 1 hour a day.'
    },
    { 
      icon: '📈', 
      title: 'Investors', 
      desc: 'Already investing in mutual funds but want to understand market structure and chart theory.',
      benefit: 'Conceptual framework to study market behavior.'
    },
    { 
      icon: '🚀', 
      title: 'Complete Beginners', 
      desc: 'Overwhelmed by YouTube tutorials and looking for a structured, step-by-step path.',
      benefit: 'Structured understanding without the noise.'
    }
  ];

  return (
    <section className="section">
      <div className="container text-center fade-up">
        <h2 className="persona-title">Built for people with a plan.</h2>

        <div className="persona-grid">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="persona-card card fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="persona-icon">{persona.icon}</div>
              <h3 className="persona-card-title">{persona.title}</h3>
              <p className="persona-card-desc">{persona.desc}</p>
              
              <div className="persona-benefit-section">
                <span className="benefit-label">This course gives you:</span>
                <p className="benefit-text">{persona.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
