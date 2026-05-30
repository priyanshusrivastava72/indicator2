import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const modules = [
    {
      title: 'Trading Foundations',
      lessons: ['Market Terminology & Basics', 'How Brokers & Exchanges Work', 'Types of Orders', 'Setting Up TradingView']
    },
    {
      title: 'Reading Market Structure',
      lessons: ['Identifying Trend Direction', 'Support & Resistance Zones', 'Breakouts vs Fakeouts', 'Multi-timeframe Analysis']
    },
    {
      title: 'Technical Analysis',
      lessons: ['The 3 Candlestick Patterns You Need', 'Volume & Price Action Synergy', 'Drawing Trendlines Correctly']
    },
    {
      title: 'Risk & Money Management',
      lessons: ['The 1% Capital Protection Rule', 'Calculating Position Size', 'Risk-to-Reward Ratios', 'Handling Drawdowns mathematically']
    },
    {
      title: 'Indicator Mastery',
      lessons: ['Installing the Proprietary Indicator', 'Interpreting Buy/Sell Signals', 'Filtering False Signals', 'The Re-entry Strategy']
    },
    {
      title: 'Live Market Application',
      lessons: ['Pre-market Routine', 'Live Trade Breakdown 1', 'Live Trade Breakdown 2', 'Journaling & Scaling Up']
    }
  ];

  return (
    <section className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">The Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Everything You'll Learn
          </h2>
          <p className="text-gray-400 text-lg">No hidden upsells. The complete framework from day one.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {modules.map((mod, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
              >
                <div className="flex items-center gap-6">
                  <span className="text-emerald-500 font-mono text-lg font-bold">0{index + 1}</span>
                  <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {mod.title}
                  </span>
                </div>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${openIndex === index ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' : 'border-white/10 text-gray-500 group-hover:border-white/30'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-14">
                      <ul className="space-y-3">
                        {mod.lessons.map((lesson, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
