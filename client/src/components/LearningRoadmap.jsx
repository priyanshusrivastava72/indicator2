import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const phases = [
  {
    num: '01',
    title: 'Trading Foundations',
    subtitle: 'PHASE 01',
    desc: 'Brokers, platforms, and basic mechanics.',
    skills: ['Terminal Setup', 'Order Types', 'Chart Basics'],
    estTime: 'Week 1',
  },
  {
    num: '02',
    title: 'Market Structure',
    subtitle: 'PHASE 02',
    desc: 'Understanding trends, liquidity, and zones.',
    skills: ['Trend Mapping', 'S&R Zones', 'Liquidity Pools'],
    estTime: 'Week 2',
  },
  {
    num: '03',
    title: 'Technical Analysis',
    subtitle: 'PHASE 03',
    desc: 'Price action, volume, and patterns.',
    skills: ['Candlesticks', 'Volume Profiling', 'Confluence'],
    estTime: 'Week 3',
  },
  {
    num: '04',
    title: 'Risk Management',
    subtitle: 'PHASE 04',
    desc: 'Capital preservation and position sizing.',
    skills: ['Position Sizing', 'R:R Ratios', 'Drawdown Moat'],
    estTime: 'Week 4',
  },
  {
    num: '05',
    title: 'Indicator Mastery',
    subtitle: 'PHASE 05',
    desc: 'Using the proprietary signal system.',
    skills: ['Signal Confluence', 'Noise Filtering', 'Alert Setup'],
    estTime: 'Week 5',
  },
  {
    num: '06',
    title: 'Live Market App',
    subtitle: 'PHASE 06',
    desc: 'Executing the strategy in real-time.',
    skills: ['Paper Trading', 'Performance Auditing', 'Discipline Rules'],
    estTime: 'Week 6',
  },
];

export default function LearningRoadmap() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathProgress = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);

  return (
    <section
      id="roadmap-section"
      ref={containerRef}
      className="py-28 md:py-36 relative overflow-hidden border-t border-white/5 bg-dark"
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.025) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 justify-center mb-5"
          >
            <div className="w-5 h-px bg-emerald-500/50" />
            <p className="font-mono text-xs tracking-widest uppercase font-bold text-emerald-400">
              The Curriculum
            </p>
            <div className="w-5 h-px bg-emerald-500/50" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            A Structured Learning Path
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            No random YouTube search videos. Just a linear, logical progression from absolute zero to live execution.
          </p>
        </div>

        {/* Roadmap timeline component */}
        <div className="relative mt-20">
          
          {/* Background trace line (desktop only) */}
          <div className="absolute top-[28px] left-0 w-full h-[2px] bg-white/5 hidden lg:block" />

          {/* Active progress trace line (desktop only) */}
          <motion.div
            className="absolute top-[28px] left-0 h-[2px] bg-gradient-to-r from-emerald-500/80 via-emerald-400 to-emerald-300 hidden lg:block origin-left z-10"
            style={{
              scaleX: pathProgress,
              boxShadow: '0 0 15px rgba(16,185,129,0.3)',
            }}
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-20">
            {phases.map((phase, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={phase.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex flex-col items-center lg:items-start group cursor-pointer"
                >
                  
                  {/* Step Connector Line for mobile/tablet */}
                  {index !== phases.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 w-[1px] h-8 bg-white/5 -translate-x-1/2 z-0" />
                  )}

                  {/* Nodes on timeline */}
                  <div className="relative mb-8">
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.15 : 1,
                        borderColor: isHovered ? 'rgba(16,185,129,0.8)' : 'rgba(16,185,129,0.3)',
                        backgroundColor: isHovered ? 'rgba(16,185,129,0.15)' : '#0a0a0a',
                      }}
                      className="w-14 h-14 rounded-full border-2 flex items-center justify-center font-mono text-lg font-bold text-emerald-400 relative z-20 shadow-lg shadow-black"
                    >
                      {phase.num}
                    </motion.div>

                    {/* Ring glow on hover */}
                    {isHovered && (
                      <motion.div
                        layoutId="activeNodeGlow"
                        className="absolute inset-[-4px] rounded-full border border-emerald-500/30 z-10"
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                    )}
                  </div>

                  {/* Card Container */}
                  <motion.div
                    animate={{
                      y: isHovered ? -6 : 0,
                      borderColor: isHovered ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.03)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full rounded-2xl border p-5 flex flex-col justify-between h-full bg-dark-100/50 backdrop-blur-md relative"
                    style={{
                      backgroundColor: 'rgba(10,10,10,0.5)',
                      boxShadow: isHovered
                        ? '0 15px 30px -10px rgba(16,185,129,0.08)'
                        : '0 4px 20px rgba(0,0,0,0.15)',
                    }}
                  >
                    {/* Glowing Accent Corner Indicator */}
                    <div
                      className="absolute top-0 right-0 w-12 h-12 pointer-events-none transition-opacity duration-300 rounded-tr-2xl"
                      style={{
                        background: `radial-gradient(circle at 100% 0%, ${isHovered ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.01)'} 0%, transparent 60%)`,
                      }}
                    />

                    <div>
                      {/* Sub-header Metadata */}
                      <div className="flex items-center justify-between mb-3 text-[9px] font-mono text-gray-600">
                        <span>{phase.subtitle}</span>
                        <span className="flex items-center gap-1 text-emerald-500/70 font-semibold uppercase">
                          <Calendar size={8} />
                          {phase.estTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-sm font-bold text-white mb-2 transition-colors duration-300 group-hover:text-emerald-400"
                      >
                        {phase.title}
                      </h3>

                      {/* Short Description */}
                      <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                        {phase.desc}
                      </p>
                    </div>

                    {/* Skill points details inside cards */}
                    <div className="border-t border-white/5 pt-3.5 space-y-2 mt-auto">
                      {phase.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-1.5 text-[9px] font-mono text-gray-400">
                          <CheckCircle2 size={10} className="text-emerald-500/70 shrink-0" />
                          <span className="truncate">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 text-xs font-mono">
            // TOTAL ESTIMATED PATH TIME: 6 WEEKS &middot; AUDITED FOR CONSISTENCY
          </p>
        </motion.div>
      </div>
    </section>
  );
}
