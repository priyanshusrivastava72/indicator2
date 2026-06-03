import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, TrendingUp } from 'lucide-react';

const rows = [
  {
    topic: 'Financial Literacy',
    traditional: 'Limited awareness of asset compounding principles',
    growth: 'Structured understanding of global capital rules',
  },
  {
    topic: 'Understanding Inflation',
    traditional: 'Savings lose purchasing power in flat deposit accounts',
    growth: 'Understanding inflation, purchasing power, and long-term financial planning',
  },
  {
    topic: 'Risk Awareness',
    traditional: 'Exposed to high-risk advisory schemes or panic exits',
    growth: 'Structured risk management principles',
  },
  {
    topic: 'Market Knowledge',
    traditional: 'Opinion-based trading or chasing retail media hype',
    growth: 'Structured analysis of cycles, trends, and volumes',
  },
  {
    topic: 'Financial Decisions',
    traditional: 'Emotional allocation choices and debt traps',
    growth: 'Logical checklists for allocation and saving plans',
  },
];

export default function CareerVsEducation() {
  return (
    <section
      id="career-vs-education"
      className="py-20 md:py-24 lg:py-28 relative overflow-hidden border-t border-white/5 bg-dark"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full animate-fade-in">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest uppercase mb-3 text-emerald-500"
          >
            Why Financial Skills Matter
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-display font-bold text-white leading-tight"
          >
            Career Only vs.{' '}
            <span className="text-emerald-500">Career + Financial Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base mt-4 lg:mt-2.5 max-w-2xl mx-auto"
          >
            A strong career remains essential. Financial education simply helps you
            make smarter decisions alongside it.
          </motion.p>
        </div>

        {/* Comparison Grid (2-column layout on large screens) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 overflow-x-auto pb-4 scrollbar-thin"
          >
            <div className="comp-table-wrapper rounded-3xl overflow-hidden min-w-[650px] lg:min-w-0">
              {/* Table Header */}
              <div className="grid grid-cols-3 comp-table-header">
                <div className="comp-header-cell comp-header-cell-topic">
                  <span>Comparison Area</span>
                </div>
                <div className="comp-header-cell comp-header-cell-traditional">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20 light:bg-red-500/10 light:text-red-700 light:border-red-500/15 mb-2">
                    Traditional Path
                  </span>
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                    Career Only
                  </span>
                </div>
                <div className="comp-header-cell comp-header-cell-growth">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 light:bg-emerald-500/10 light:text-emerald-700 light:border-emerald-500/15 mb-2">
                    Literacy Path
                  </span>
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                    Career + Finance
                  </span>
                </div>
              </div>

              {/* Rows */}
              {rows.map((row, i) => (
                <motion.div
                  key={row.topic}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="grid grid-cols-3 comp-row group"
                >
                  {/* Topic */}
                  <div className="comp-cell-topic">
                    <span className="comp-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-semibold tracking-wide">{row.topic}</span>
                  </div>

                  {/* Traditional */}
                  <div className="comp-cell-traditional">
                    <div className="comp-icon-box comp-icon-box-red">
                      <X size={13} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm leading-relaxed">{row.traditional}</span>
                  </div>

                  {/* Growth */}
                  <div className="comp-cell-growth">
                    <div className="comp-icon-box comp-icon-box-green">
                      <Check size={13} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm leading-relaxed">{row.growth}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Trajectory Chart Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-card rounded-3xl p-6 border border-white/5 bg-dark-100/50 flex flex-col justify-between h-full relative overflow-hidden shadow-xl">
              {/* Decorative light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-emerald-400 font-bold uppercase">EDUCATION PROGRESSION</span>
                    <h3 className="text-xl font-bold text-white mt-1">Skill Trajectory</h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    CONCEPTUAL
                  </span>
                </div>
                
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  Illustrative educational progression. This graphic is conceptual and intended only to demonstrate how structured learning can improve understanding over time.
                </p>

                {/* SVG Graph */}
                <div className="h-44 lg:h-32 xl:h-40 w-full relative mb-4 lg:mb-3">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 150" fill="none">
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="120" x2="300" y2="120" stroke="rgba(255,255,255,0.03)" />

                    {/* Path 1: Traditional Career Only (Linear gray line) */}
                    <motion.path
                      d="M 10 120 L 70 110 L 130 100 L 190 90 L 250 80 L 290 75"
                      stroke="#4b5563"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />

                    {/* Path 2: Career + Trading (Exponential green line) */}
                    <motion.path
                      d="M 10 120 Q 100 110 180 80 T 290 20"
                      stroke="#10b981"
                      strokeWidth="3.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                    
                    {/* Pulsing trigger node */}
                    <circle cx="290" cy="20" r="4" fill="#10b981" />
                    
                    {/* Axis Labels */}
                    <text x="10" y="140" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">Year 0</text>
                    <text x="150" y="140" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="middle">Year 5</text>
                    <text x="290" y="140" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace" textAnchor="end">Year 10</text>

                    <g transform="translate(255, 20)">
                      <rect x="-47" y="-24" width="94" height="18" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="0.8" />
                      <text x="0" y="-12" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PROGRESSION</text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Lower HUD Metrics */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/5 pt-3 lg:pt-2.5 mt-1 font-mono text-[9px]">
                <div>
                  <span className="text-gray-500 block">CAREER ONLY</span>
                  <span className="text-gray-400 font-bold mt-0.5 block">Baseline</span>
                </div>
                <div className="border-l border-white/5 pl-3">
                  <span className="text-gray-500 block">CAREER + EDUCATION</span>
                  <span className="text-emerald-400 font-bold mt-0.5 block">Enhanced</span>
                </div>
                <div className="border-l border-white/5 pl-3">
                  <span className="text-gray-500 block">KNOWLEDGE SHIFT</span>
                  <span className="text-emerald-400 font-bold mt-0.5 block flex items-center gap-0.5">
                    <TrendingUp size={10} /> Progressive
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom tagline callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 lg:mt-4 text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-gray-400 light:bg-black/5 light:border-black/5 light:text-gray-600">
            💡 A strong career remains essential. Financial education helps you make better decisions alongside it.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
