import React from 'react';

const RiskDisclaimer = () => {
  return (
    <section 
      className="section" 
      style={{ 
        padding: '32px 0', 
        borderTop: '0.5px solid var(--border)', 
        borderBottom: '0.5px solid var(--border)' 
      }}
    >
      <div className="container text-center">
        <p 
          style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '12px', 
            color: 'var(--text-secondary)', 
            maxWidth: '640px', 
            margin: '0 auto',
            lineHeight: '1.5'
          }}
        >
          Trading in financial markets involves substantial risk of loss 
          and is not suitable for all investors. Past performance is not 
          indicative of future results. This course is for educational 
          purposes only. Please consult a financial advisor before 
          making any investment decisions.
        </p>
      </div>
    </section>
  );
};

export default RiskDisclaimer;
