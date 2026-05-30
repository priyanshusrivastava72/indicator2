import React from 'react';
import './ComparisonTable.css';

const ComparisonTable = () => {
  const rows = [
    { left: 'Salary-focused growth', right: 'Multiple growth avenues' },
    { left: 'Limited market exposure', right: 'Broader market awareness' },
    { left: 'Single professional skill', right: 'Added financial skillset' },
    { left: 'Linear career progression', right: 'Career + financial literacy' },
    { left: 'Conventional wealth path', right: 'More informed decisions' }
  ];

  return (
    <section className="section bg-secondary">
      <div className="container text-center fade-up">
        <div className="divider"></div>
        <span className="eyebrow">WHY IT MATTERS</span>
        <h2 className="comparison-title">Career alone vs. Career with Financial Education</h2>

        <div className="comparison-table-wrapper fade-up">
          <div className="comparison-header">
            <div className="comp-head-left">Career Only</div>
            <div className="comp-head-right">Career + Financial Education</div>
          </div>

          <div className="comparison-body">
            {rows.map((row, index) => (
              <div key={index} className="comparison-row">
                <div className="comp-cell-left">{row.left}</div>
                <div className="comp-cell-right">{row.right}</div>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="comparison-quote fade-up">
          &#10076; A strong career matters. Financial education makes 
          every rupee you earn work harder. &#10077;
        </blockquote>
      </div>
    </section>
  );
};

export default ComparisonTable;
