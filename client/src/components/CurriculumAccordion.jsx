import React, { useState, useRef } from 'react';
import './CurriculumAccordion.css';

const CurriculumAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const curriculum = [
    {
      module: '01',
      title: 'Trading Foundations',
      lessons: [
        'Market Terminology & Basics',
        'How Brokers & Exchanges Work',
        'Types of Orders (Limit, Market, Stop)',
        'Setting Up TradingView correctly'
      ]
    },
    {
      module: '02',
      title: 'Reading Market Structure',
      lessons: [
        'Identifying Trend Direction',
        'Support & Resistance Zones',
        'Breakouts vs. Fakeouts',
        'Multi-timeframe Analysis'
      ]
    },
    {
      module: '03',
      title: 'Technical Analysis',
      lessons: [
        'The Only 3 Candlestick Patterns You Need',
        'Volume & Price Action Synergy',
        'Drawing Trendlines Correctly'
      ]
    },
    {
      module: '04',
      title: 'Risk & Money Management',
      lessons: [
        'The 1% Rule of Capital Protection',
        'Calculating Position Size',
        'Risk-to-Reward Ratios in Practice',
        'Handling Drawdowns'
      ]
    },
    {
      module: '05',
      title: 'Charting & Analysis Tools',
      lessons: [
        'Setting Up Educational Charting Tool',
        'Interpreting Support & Resistance Zones',
        'Identifying Valid Trend Confluences',
        'Determining Risk Limits'
      ]
    },
    {
      module: '06',
      title: 'Simulation Learning Labs',
      lessons: [
        'Pre-market Structure Analysis Routine',
        'Simulated Case Study Breakdowns',
        'Simulation Logging & Risk Rules',
        'Simulation Verification Checklist'
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section bg-primary">
      <div className="container fade-up">
        <h2 className="curriculum-title text-center">Full curriculum. No hidden modules.</h2>

        <div className="accordion-wrapper">
          {curriculum.map((item, index) => (
            <div 
              key={index} 
              className={`accordion-item ${openIndex === index ? 'is-open' : ''}`}
            >
              <div 
                className="accordion-header" 
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-header-left">
                  <span className="module-num">{item.module}</span>
                  <span className="module-title">{item.title}</span>
                </div>
                <div className="accordion-header-right">
                  <span className="lesson-badge">{item.lessons.length} Lessons</span>
                  <span className="expand-icon">{openIndex === index ? '−' : '+'}</span>
                </div>
              </div>
              
              <div 
                className="accordion-body"
                style={{ 
                  maxHeight: openIndex === index ? `${item.lessons.length * 50 + 40}px` : '0px',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="accordion-content">
                  <ul className="lesson-list">
                    {item.lessons.map((lesson, idx) => (
                      <li key={idx}>
                        <span className="bullet">&#8226;</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumAccordion;
