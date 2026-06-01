import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Dices, ShieldAlert, X } from 'lucide-react';

const problems = [
  {
    icon: Target,
    num: '01',
    title: 'No System',
    shortDesc: 'Trading based on gut feeling.',
    fullDesc:
      'Without a tested, repeatable framework, every trade is just a guess. Professionals trade systems — amateurs trade opinions. You need rules, not hunches.',
    stat: '90%',
    statLabel: 'beginners have no written trading plan',
  },
  {
    icon: Brain,
    num: '02',
    title: 'Emotional Decisions',
    shortDesc: 'Revenge trading after a loss.',
    fullDesc:
      'Fear causes premature exits. Greed causes overtrading. Revenge trading destroys accounts. You need mechanical, pre-defined rules that run on autopilot.',
    stat: '3×',
    statLabel: 'more losses due to emotional bias',
  },
  {
    icon: Dices,
    num: '03',
    title: 'Random Entries',
    shortDesc: 'Chasing every green candle.',
    fullDesc:
      'Entering because price is moving up is a guaranteed way to buy the top. You need specific, mathematical trigger conditions before you click buy.',
    stat: '0',
    statLabel: 'edge without a defined entry criteria',
  },
  {
    icon: ShieldAlert,
    num: '04',
    title: 'Poor Risk Management',
    shortDesc: 'Risking 10% on a single trade.',
    fullDesc:
      'One bad trade shouldn\'t erase a week of profits. Capital preservation is the single most important skill in trading. Most beginners never learn it.',
    stat: '1 trade',
    statLabel: 'can blow an entire account without a plan',
  },
];

export default function ProblemSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="problem-section"
      className="py-28 relative overflow-hidden border-t border-white/5"
      style={{ backgroundColor: '#080909' }}
    >
      {/* Top-right red ambient glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header — Left-aligned, editorial */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm tracking-widest uppercase mb-4"
              style={{ color: '#ef4444' }}
            >
              The Reality
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight max-w-xl"
            >
              Why most
              <br />
              beginners{' '}
              <span style={{ color: '#ef4444' }}>fail.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-sm text-base leading-relaxed"
          >
            It's not about being smart. It's about having a structured,
            emotion-free process. These are the four mistakes that kill 90% of accounts.
          </motion.p>
        </div>

        {/* Problem Cards — Stacked rows with numbers */}
        <div className="space-y-4">
          {problems.map((p, i) => {
            const Icon = p.icon;
            const isHovered = hovered === i;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden rounded-2xl cursor-default group"
                style={{
                  background: isHovered
                    ? 'rgba(239,68,68,0.06)'
                    : 'rgba(255,255,255,0.02)',
                  border: isHovered
                    ? '1px solid rgba(239,68,68,0.25)'
                    : '1px solid rgba(255,255,255,0.05)',
                  transition: 'background 0.3s ease, border 0.3s ease',
                }}
              >
                {/* Subtle left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300"
                  style={{
                    background: isHovered
                      ? 'linear-gradient(to bottom, #ef4444, #b91c1c)'
                      : 'transparent',
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-center gap-6 p-7 md:p-8 pl-8 md:pl-10">

                  {/* Number */}
                  <div
                    className="font-display font-bold text-5xl md:text-6xl select-none leading-none shrink-0 transition-colors duration-300 w-20 text-center md:text-left"
                    style={{ color: isHovered ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.06)' }}
                  >
                    {p.num}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isHovered ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.04)',
                      color: isHovered ? '#ef4444' : '#6b7280',
                      border: isHovered ? '1px solid rgba(239,68,68,0.3)' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
                      {p.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{ color: isHovered ? '#d1d5db' : '#6b7280' }}
                    >
                      {isHovered ? p.fullDesc : p.shortDesc}
                    </p>
                  </div>

                  {/* Stat — always visible but shifts color */}
                  <div
                    className="shrink-0 text-right hidden md:block"
                    style={{ minWidth: '140px' }}
                  >
                    <div
                      className="font-display font-bold text-3xl transition-colors duration-300"
                      style={{ color: isHovered ? '#ef4444' : '#374151' }}
                    >
                      {p.stat}
                    </div>
                    <div
                      className="text-xs font-mono leading-tight mt-1 max-w-[130px] ml-auto"
                      style={{ color: isHovered ? '#9ca3af' : '#374151' }}
                    >
                      {p.statLabel}
                    </div>
                  </div>

                  {/* X icon on hover */}
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered ? 'rgba(239,68,68,0.15)' : 'transparent',
                      color: isHovered ? '#ef4444' : 'transparent',
                    }}
                  >
                    <X size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex items-center gap-4 text-center md:text-left flex-col md:flex-row"
        >
          <div
            className="px-5 py-3 rounded-xl text-sm font-mono font-bold"
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.2)',
              color: '#ef4444',
            }}
          >
            The good news?
          </div>
          <p className="text-gray-400 text-base">
            Every single one of these mistakes is{' '}
            <span className="text-white font-semibold">teachable and fixable</span> with the right system.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
