import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, CheckCircle } from 'lucide-react';

const First30Days = () => {
  const [activeWeek, setActiveWeek] = useState(1);

  const weeks = [
    {
      week: 1,
      title: 'Foundation & Setup',
      desc: 'Set up your charting software, understand basic market mechanics, and grasp the core risk management mathematical formulas.',
      tasks: ['Broker & TradingView Setup', 'Understanding Order Types', 'The 1% Risk Rule']
    },
    {
      week: 2,
      title: 'Market Structure',
      desc: 'Learn to read raw price action. Identify true support/resistance, market trends, and high-probability zones without any indicators.',
      tasks: ['Trend Identification', 'Supply & Demand Zones', 'Multi-Timeframe Alignment']
    },
    {
      week: 3,
      title: 'The System & Charting Script',
      desc: 'Combine your structural knowledge with our proprietary charting helper script. Learn exactly when a confluence is valid and when it should be ignored.',
      tasks: ['Script Installation', 'Valid vs Invalid Confluences', 'The Verification Checklist']
    },
    {
      week: 4,
      title: 'Simulated Application',
      desc: 'Move to a simulator or practice log. Apply the rules mechanically, log your mock outcomes, and review your simulation statistics.',
      tasks: ['Paper Trading Phase', 'Study Journaling', 'Simulation Review']
    }
  ];

  return (
    <section className="py-24 bg-dark-100 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">Your Roadmap</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The First 30 Days
          </h2>
          <p className="text-gray-400 text-lg">
            A precise, week-by-week action plan to get you studying structures systematically.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-4 md:p-8 border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            
            {/* Week Selector (Sidebar) */}
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 md:w-1/3 shrink-0 border-b md:border-b-0 md:border-r border-white/10 pr-0 md:pr-4">
              {weeks.map((w) => (
                <button
                  key={w.week}
                  onClick={() => setActiveWeek(w.week)}
                  className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all whitespace-nowrap md:whitespace-normal w-full ${
                    activeWeek === w.week 
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' 
                      : 'hover:bg-white/5 border border-transparent text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <Calendar size={18} className={activeWeek === w.week ? 'text-emerald-500' : ''} />
                  <span className="font-bold">Week {w.week}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-[300px]">
              <AnimatePresence mode="wait">
                {weeks.map((w) => (
                  activeWeek === w.week && (
                    <motion.div
                      key={w.week}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <h3 className="text-2xl font-display font-bold text-white mb-4">{w.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-8">{w.desc}</p>
                      
                      <div className="space-y-4 mt-auto">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Key Milestones</h4>
                        {w.tasks.map((task, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="flex items-center gap-3 text-gray-300 bg-dark-200/50 p-3 rounded-lg border border-white/5"
                          >
                            <CheckCircle size={16} className="text-emerald-500" />
                            <span className="text-sm font-medium">{task}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default First30Days;
