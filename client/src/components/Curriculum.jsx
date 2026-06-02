import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    title: 'Charting & Analysis Tools',
    lessons: ['Setting Up Charting Helper Script', 'Interpreting Support & Resistance Zones', 'Identifying Valid Trend Confluences', 'Determining Risk Limits']
  },
  {
    title: 'Market Simulation Labs',
    lessons: ['Pre-market Structure Analysis Routine', 'Simulated Case Study breakdown 1', 'Simulated Case Study breakdown 2', 'Simulation Logging & Risk Verification']
  }
];

/* ─── Student Portal HUD Preview Card ─── */
function StudentPortalHUD({ activeIndex }) {
  // If activeIndex is collapsed (-1), default to index 0
  const index = activeIndex === -1 ? 0 : activeIndex;
  const activeModule = modules[index];

  return (
    <div className="curriculum-portal-hud">
      <div>
        <div className="aud-mockup-title text-left">Student Portal Preview</div>
        
        {/* Mock Video Player Frame */}
        <div className="video-mockup-frame mt-4 flex items-center justify-center relative group/video cursor-pointer">
          {/* Mock Video Poster */}
          <div className="absolute inset-0 bg-[#070707] flex flex-col justify-between p-4 z-0">
            {/* Header info */}
            <div className="flex justify-between items-center text-[9px] font-mono text-gray-500">
              <span>TradeCraft Module 0{index + 1}</span>
              <span className="text-emerald-500 font-bold">HD 1080P</span>
            </div>
            
            {/* Mock Candlestick Chart backdrop */}
            <div className="absolute inset-0 opacity-[0.15] flex items-center justify-center p-6 pointer-events-none">
              <svg width="100%" height="80%" viewBox="0 0 100 40" fill="none" stroke="#10b981" strokeWidth="0.7">
                <path d="M 5,20 L 15,22 M 25,10 L 35,15 M 45,5 L 55,25 M 65,30 L 75,10 M 85,15 L 95,5" />
                <rect x="12" y="18" width="6" height="8" fill="#ef4444" stroke="none" />
                <rect x="32" y="8" width="6" height="14" fill="#10b981" stroke="none" />
                <rect x="52" y="12" width="6" height="10" fill="#ef4444" stroke="none" />
                <rect x="72" y="15" width="6" height="12" fill="#10b981" stroke="none" />
              </svg>
            </div>
            
            {/* Play Button Indicator */}
            <div className="mx-auto my-auto w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover/video:bg-emerald-500 group-hover/video:text-white group-hover/video:scale-110 group-hover/video:shadow-lg group-hover/video:shadow-emerald-500/20 transition-all duration-300 z-10">
              <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            
            {/* Video Footer info */}
            <div className="flex justify-between items-center text-[10px] font-semibold text-gray-300 z-10 mt-auto text-left">
              <span className="truncate max-w-[190px]">{activeModule.lessons[0] || 'Lesson Lecture'}</span>
              <span className="font-mono text-gray-500 text-[8px] shrink-0">14:20 MIN</span>
            </div>
          </div>
          
          {/* Progress bar inside video */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div className="h-full bg-emerald-500 w-[45%]" />
          </div>
        </div>
      </div>

      {/* Checklist details */}
      <div className="space-y-3 border-t border-white/5 light:border-black/5 pt-4 text-left">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400 light:text-gray-600 font-medium">Lessons Included:</span>
          <span className="font-mono text-emerald-400 light:text-emerald-700 font-bold">{activeModule.lessons.length} Lectures</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400 light:text-gray-600 font-medium">Resources:</span>
          <span className="font-mono text-gray-400 light:text-gray-600">Workbook + Code Setup</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400 light:text-gray-600 font-medium">Portal Access:</span>
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded light:bg-emerald-500/5 light:text-emerald-700">
            UNLOCKED
          </span>
        </div>
      </div>
    </div>
  );
}

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="curriculum-section" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">The Curriculum</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Everything You'll Learn
          </h2>
          <p className="text-gray-400 text-lg">No hidden upsells. The complete framework from day one.</p>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column (Accordions) */}
          <div className="lg:col-span-7 space-y-2">
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
                  className="w-full py-6 flex items-center justify-between text-left group focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-emerald-500 font-mono text-lg font-bold">0{index + 1}</span>
                    <span className={`text-xl font-bold transition-colors ${openIndex === index ? 'text-white font-black' : 'text-gray-300 group-hover:text-white'}`}>
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
                      <div className="pb-8 pl-14 text-left">
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

          {/* Right Column (Student Preview Video HUD) */}
          <div className="lg:col-span-5 min-h-[380px]">
            <StudentPortalHUD activeIndex={openIndex} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
