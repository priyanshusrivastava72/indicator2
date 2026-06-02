import React, { useState } from 'react';
import './LiveTradeExamples.css';

const LiveTradeExamples = () => {
  const [activeTab, setActiveTab] = useState('win');

  const tradeData = {
    win: {
      entry: '19,450',
      exit: '19,520',
      result: '+70 Points',
      lesson: 'Perfect setup based on support zone confluence. Trend confirmation was clear.'
    },
    loss: {
      entry: '19,600',
      exit: '19,570',
      result: '-30 Points',
      lesson: 'What we learned: Entered too early before the 15-minute candle closed. Stop loss hit as per plan. System protected larger capital.'
    },
    breakeven: {
      entry: '19,300',
      exit: '19,305',
      result: '+5 Points (BE)',
      lesson: 'Market lost momentum. Trailed stop loss to entry. Capital preserved for the next setup.'
    }
  };

  const currentData = tradeData[activeTab];

  return (
    <section id="results" className="section bg-secondary">
      <div className="container text-center fade-up">
        <span className="eyebrow">TRANSPARENCY</span>
        <h2 className="trade-title">Simulated case studies. Including the failures.</h2>
        <p className="trade-subtext">
          We study everything — because real education 
          doesn't hide the full picture.
        </p>

        <div className="trade-tabs">
          <button 
            className={`tab-btn ${activeTab === 'win' ? 'active text-green' : ''}`}
            onClick={() => setActiveTab('win')}
          >
            &#10003; Win
          </button>
          <button 
            className={`tab-btn ${activeTab === 'loss' ? 'active text-red' : ''}`}
            onClick={() => setActiveTab('loss')}
          >
            &#10007; Loss
          </button>
          <button 
            className={`tab-btn ${activeTab === 'breakeven' ? 'active' : ''}`}
            onClick={() => setActiveTab('breakeven')}
          >
            &mdash; Break Even
          </button>
        </div>

        <div className="trade-content-wrapper">
          <div className="trade-chart-card fade-up">
            <svg width="100%" height="300" viewBox="0 0 600 300" preserveAspectRatio="none">
              <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
              
              <g strokeWidth="2">
                <line x1="50" y1="200" x2="50" y2="250" stroke="#10B981" />
                <rect x="45" y="210" width="10" height="30" fill="#10B981" />

                <line x1="100" y1="220" x2="100" y2="280" stroke="#EF4444" />
                <rect x="95" y="230" width="10" height="40" fill="#EF4444" />

                <line x1="150" y1="250" x2="150" y2="180" stroke="#10B981" />
                <rect x="145" y="190" width="10" height="50" fill="#10B981" />

                {/* Entry marker */}
                <circle cx="150" cy="190" r="4" fill="var(--accent-primary)" />
                <text x="160" y="195" fill="var(--accent-primary)" fontSize="12" fontFamily="monospace">ENTRY</text>

                <line x1="200" y1="170" x2="200" y2="100" stroke="#10B981" />
                <rect x="195" y="110" width="10" height="50" fill="#10B981" />

                <line x1="250" y1="90" x2="250" y2="140" stroke="#EF4444" />
                <rect x="245" y="100" width="10" height="30" fill="#EF4444" />

                <line x1="300" y1="120" x2="300" y2="50" stroke="#10B981" />
                <rect x="295" y="60" width="10" height="50" fill="#10B981" />

                {/* Exit marker logic based on tab */}
                {activeTab === 'win' && (
                  <>
                    <line x1="350" y1="40" x2="350" y2="100" stroke="#EF4444" />
                    <rect x="345" y="50" width="10" height="40" fill="#EF4444" />
                    <circle cx="300" cy="60" r="4" fill="#10B981" />
                    <text x="310" y="65" fill="#10B981" fontSize="12" fontFamily="monospace">EXIT</text>
                  </>
                )}

                {activeTab === 'loss' && (
                  <>
                    {/* Different exit logic to show loss */}
                    <line x1="300" y1="200" x2="300" y2="280" stroke="#EF4444" />
                    <rect x="295" y="210" width="10" height="60" fill="#EF4444" />
                    <circle cx="300" cy="270" r="4" fill="#EF4444" />
                    <text x="310" y="275" fill="#EF4444" fontSize="12" fontFamily="monospace">STOP LOSS</text>
                  </>
                )}

                {activeTab === 'breakeven' && (
                  <>
                    <line x1="200" y1="180" x2="200" y2="220" stroke="#EF4444" />
                    <rect x="195" y="190" width="10" height="20" fill="#EF4444" />
                    <circle cx="200" cy="190" r="4" fill="var(--text-primary)" />
                    <text x="210" y="195" fill="var(--text-primary)" fontSize="12" fontFamily="monospace">EXIT (BE)</text>
                  </>
                )}
              </g>
            </svg>
          </div>

          <div className="trade-details-card fade-up">
            <div className="detail-row">
              <span className="detail-label">Entry</span>
              <span className="detail-value">{currentData.entry}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Exit</span>
              <span className="detail-value">{currentData.exit}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Result</span>
              <span className={`detail-value ${activeTab === 'win' ? 'text-green' : activeTab === 'loss' ? 'text-red' : ''}`}>
                {currentData.result}
              </span>
            </div>
            <div className="detail-lesson">
              <span className="detail-label">Analysis</span>
              <p className="lesson-text">{currentData.lesson}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTradeExamples;
