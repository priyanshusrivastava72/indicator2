import React from 'react';
import './DreamBuilder.css';

const DreamBuilder = () => {
  const dreams = [
    { emoji: '🏍', title: 'First Bike', desc: 'The freedom of the open road.' },
    { emoji: '🚗', title: 'Dream Car', desc: 'Arrive in your own style.' },
    { emoji: '🏠', title: 'Own Home', desc: 'A place to call your own.' },
    { emoji: '✈', title: 'Travel', desc: 'Experience the world without limits.' },
    { emoji: '💻', title: 'Better Life', desc: 'Upgrade your daily standard.' },
    { emoji: '👨‍👩‍👧', title: 'Family Security', desc: 'Provide for those who matter most.' }
  ];

  return (
    <section className="section">
      <div className="container text-center fade-up">
        <span className="eyebrow">YOUR GOALS</span>
        <h2 className="dream-title">What are you building toward?</h2>

        <div className="dream-grid">
          {dreams.map((dream, index) => (
            <div 
              key={index} 
              className="dream-card card fade-up"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="dream-emoji">{dream.emoji}</div>
              <h3 className="dream-card-title">{dream.title}</h3>
              <p className="dream-card-desc">{dream.desc}</p>
            </div>
          ))}
        </div>

        <div className="dream-quote fade-up">
          Skills create opportunities.<br />
          Consistency turns them into results.
        </div>
      </div>
    </section>
  );
};

export default DreamBuilder;
