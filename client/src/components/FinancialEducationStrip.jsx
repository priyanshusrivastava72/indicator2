import React from 'react';
import './FinancialEducationStrip.css';

const FinancialEducationStrip = () => {
  const steps = [
    { num: 'I', title: 'Income', desc: 'The foundation of cash flow' },
    { num: 'II', title: 'Savings', desc: 'Preserving what you earn' },
    { num: 'III', title: 'Investing', desc: 'Making money work for you' },
    { num: 'IV', title: 'Wealth', desc: 'Freedom and abundance' }
  ];

  return (
    <section className="section bg-secondary edu-strip-section">
      <div className="container text-center fade-up">
        <h2 className="edu-strip-title">
          Most people learn how to earn.<br />
          Few learn how money works.
        </h2>

        <div className="edu-flow-container">
          {/* Background Connecting Line */}
          <div className="edu-flow-line"></div>

          <div className="edu-flow-steps">
            {steps.map((step, index) => (
              <div key={index} className="edu-step">
                <div className="edu-step-num">{step.num}</div>
                <h3 className="edu-step-title">{step.title}</h3>
                <p className="edu-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialEducationStrip;
