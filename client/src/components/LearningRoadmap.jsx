import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LearningRoadmap = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const phases = [
    { num: '01', title: 'Trading Foundations', desc: 'Brokers, platforms, and basic mechanics.' },
    { num: '02', title: 'Market Structure', desc: 'Understanding trends, liquidity, and zones.' },
    { num: '03', title: 'Technical Analysis', desc: 'Price action, volume, and patterns.' },
    { num: '04', title: 'Risk Management', desc: 'Capital preservation and position sizing.' },
    { num: '05', title: 'Indicator Mastery', desc: 'Using the proprietary signal system.' },
    { num: '06', title: 'Live Market Application', desc: 'Executing the strategy in real-time.' }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-dark-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="eyebrow">The Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            A Structured Learning Path
          </h2>
          <p className="text-gray-400 text-lg">
            No random YouTube videos. Just a linear, logical progression from zero to execution.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative">
          {/* Scroll Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block" />
          
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-300 hidden lg:block -translate-y-1/2 origin-left"
            style={{ 
              scaleX: useTransform(scrollYProgress, [0.3, 0.7], [0, 1]),
              boxShadow: '0 0 20px rgba(16,185,129,0.5)'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Vertical line for mobile */}
                {index !== phases.length - 1 && (
                  <div className="lg:hidden absolute top-full left-1/2 w-0.5 h-8 bg-white/10 -translate-x-1/2" />
                )}

                <div className="w-16 h-16 rounded-full bg-dark-200 border-2 border-emerald-500/30 flex items-center justify-center font-mono text-xl font-bold text-emerald-400 mb-6 lg:mb-12 shadow-[0_0_15px_rgba(16,185,129,0.1)] relative z-10">
                  {phase.num}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-500">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningRoadmap;
