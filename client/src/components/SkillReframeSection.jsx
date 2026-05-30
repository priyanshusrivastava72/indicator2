import React from 'react';
import './SkillReframeSection.css';

const SkillReframeSection = () => {
  const pills = ["Like Coding", "Like Design", "Like Sales", "Like Marketing"];

  return (
    <section className="section skill-reframe-section">
      <div className="container text-center fade-up">
        <span className="eyebrow">THE MINDSET SHIFT</span>
        <h2 className="skill-reframe-title">
          Trading is a skill.<br />
          Not a shortcut.
        </h2>
        
        <div className="skill-pills">
          {pills.map((pill, index) => (
            <div key={index} className="skill-pill fade-up" style={{ transitionDelay: `${index * 100}ms` }}>
              {pill}
            </div>
          ))}
        </div>

        <p className="skill-reframe-desc fade-up" style={{ transitionDelay: '400ms' }}>
          Every professional skill requires learning, practice, and time. 
          Trading is no different — it rewards those who treat it seriously.
        </p>
      </div>
    </section>
  );
};

export default SkillReframeSection;
