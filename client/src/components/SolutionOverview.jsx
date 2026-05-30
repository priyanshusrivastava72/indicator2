import React from 'react';
import './SolutionOverview.css';

const SolutionOverview = () => {
  const solutions = [
    { icon: '📚', title: 'Course', desc: 'Step-by-step video modules covering technical analysis from scratch.' },
    { icon: '📈', title: 'Indicator', desc: 'Proprietary signals that remove the guesswork from entries.' },
    { icon: '🎯', title: 'Risk Framework', desc: 'Mathematical approach to capital protection and position sizing.' },
    { icon: '👥', title: 'Community', desc: 'A network of serious traders executing the same system daily.' }
  ];

  return (
    <section id="course" className="section bg-secondary">
      <div className="container text-center fade-up">
        <span className="eyebrow">THE SOLUTION</span>
        <h2 className="solution-title">One complete system. Everything you need.</h2>

        <div className="solution-grid">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="solution-card fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="solution-line"></div>
              <div className="solution-icon">{item.icon}</div>
              <h3 className="solution-card-title">{item.title}</h3>
              <p className="solution-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
