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
          TradeCraft is an educational platform. All content is provided solely for general educational and informational purposes and should not be construed as investment advice, stock recommendations, research reports, portfolio management services, or solicitation to buy or sell any security. We are not a SEBI-registered investment adviser, research analyst, or portfolio manager. Past market behavior does not guarantee future results. Users should conduct their own research and consult licensed professionals before making financial decisions.
        </p>
      </div>
    </section>
  );
};

export default RiskDisclaimer;
