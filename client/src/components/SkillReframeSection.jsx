import React from 'react';
import './SkillReframeSection.css';

const SkillReframeSection = () => {
  const pills = ["Like Coding", "Like Design", "Like Sales", "Like Marketing"];

  return (
    <section className="section skill-reframe-section">
      <div className="container text-center fade-up">
        <span className="eyebrow">THE MINDSET SHIFT</span>
        <h2 className="skill-reframe-title">
          Market Analysis Is A Skill.<br />
          Not A Shortcut.
        </h2>
        
        <div className="skill-pills">
          {pills.map((pill, index) => (
            <div key={index} className="skill-pill fade-up" style={{ transitionDelay: `${index * 100}ms` }}>
              {pill}
            </div>
          ))}
        </div>

        <p className="skill-reframe-desc fade-up" style={{ transitionDelay: '400ms' }}>
          Understanding markets requires structured learning, deliberate practice, and disciplined thinking.
        </p>
      </div>
    </section>
  );
};

export default SkillReframeSection;
