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
          and is not suitable for all investors. We are NOT SEBI-registered advisors, 
          and the contents of this website, course, and charting tools are strictly for 
          general educational purposes only. Past performance is not indicative of future 
          results. No returns or profits are promised.
        </p>
      </div>
    </section>
  );
};

export default RiskDisclaimer;
