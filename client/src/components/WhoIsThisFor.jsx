import React from 'react';
import './WhoIsThisFor.css';

const WhoIsThisFor = () => {
  const personas = [
    { 
      icon: '🎓', 
      title: 'Students', 
      desc: 'Looking to build a secondary income stream while completing their education.',
      benefit: 'A skill that pays before graduation.'
    },
    { 
      icon: '💼', 
      title: 'Professionals', 
      desc: 'Stuck in a 9-to-5 loop, wanting to grow their wealth without quitting their day job.',
      benefit: 'A system that requires only 1 hour a day.'
    },
    { 
      icon: '📈', 
      title: 'Investors', 
      desc: 'Already investing in mutual funds but want active control over a portion of their portfolio.',
      benefit: 'Tools to time market entries perfectly.'
    },
    { 
      icon: '🚀', 
      title: 'Complete Beginners', 
      desc: 'Overwhelmed by YouTube tutorials and looking for a structured, step-by-step path.',
      benefit: 'Zero to mastery without the noise.'
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
