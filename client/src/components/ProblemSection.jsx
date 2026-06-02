import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Brain, Dices, ShieldAlert, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Target,
    num: '01',
    title: 'No System',
    shortDesc: 'Analyzing markets based on gut feeling.',
    fullDesc:
      'Without a tested, repeatable framework, chart analysis is just a guess. To study market structures successfully, you need defined rules, not hunches.',
    stat: 'Common Pattern',
    statLabel: 'No written educational plan',
  },
  {
    icon: Brain,
    num: '02',
    title: 'Emotional Decisions',
    shortDesc: 'Revenge analysis after a wrong assumption.',
    fullDesc:
      'Fear causes premature exits from simulation parameters. Greed causes over-analysis. You need systematic rules to study markets objectively.',
    stat: 'Common Trap',
    statLabel: 'Emotional bias in analysis',
  },
  {
    icon: Dices,
    num: '03',
    title: 'Random Entries',
    shortDesc: 'Chasing every green candle.',
    fullDesc:
      'Entering because price is moving up is a common retail trap. You need objective, structural confluence conditions before formulating a market bias.',
    stat: 'High Risk',
    statLabel: 'Undefined study criteria',
  },
  {
    icon: ShieldAlert,
    num: '04',
    title: 'Poor Risk Management',
    shortDesc: 'Risking too much on a single simulation.',
    fullDesc:
      'Capital preservation is the single most important concept in financial education. Most beginners approach the markets without defining mathematical rules.',
    stat: 'Critical Point',
    statLabel: 'Exposure without structured rules',
  },
];

/* ─── Diagnostic danger gauge widget ─── */
function DangerGauge({ num, isHovered }) {
  let percentage = '0%';
  let statusText = 'STABLE';

  if (num === '01') {
    percentage = '90%';
    statusText = 'NO SYSTEM';
  } else if (num === '02') {
    percentage = '75%';
    statusText = 'EMOTION BIAS';
  } else if (num === '03') {
    percentage = '100%';
    statusText = 'NO METHOD';
  } else if (num === '04') {
    percentage = '95%';
    statusText = 'CAPITAL AT RISK';
  }

  return (
    <div className="w-32 hidden lg:flex flex-col justify-center shrink-0 text-left">
      <div className="flex justify-between text-[8px] font-mono mb-1 tracking-wider">
        <span className="text-gray-500">DIAGNOSTIC</span>
        <span className={isHovered ? 'text-red-500 font-bold' : 'text-gray-600'}>
          {statusText}
        </span>
      </div>
      <div className="danger-gauge-bar relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? percentage : '15%' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full bg-red-500"
        />
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="problem-section"
      className="py-28 relative overflow-hidden border-t border-white/5 bg-dark"
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
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm tracking-widest uppercase mb-4 text-red-500 font-bold"
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
              beginners <span className="text-red-500">fail.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-sm text-base leading-relaxed text-left"
          >
            It's not about being smart. It's about having a structured,
            emotion-free process. These are common mistakes many beginners make when approaching financial markets.
          </motion.p>
        </div>

        {/* Problem Cards — Stacked rows with diagnostic gauges */}
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
                className={`relative overflow-hidden rounded-2xl cursor-default group border transition-all duration-300 ${
                  isHovered ? 'system-warning-hud shadow-lg shadow-red-900/5' : ''
                }`}
                style={{
                  background: isHovered
                    ? 'rgba(239,68,68,0.06)'
                    : 'rgba(255,255,255,0.02)',
                  borderColor: isHovered
                    ? 'rgba(239,68,68,0.25)'
                    : 'rgba(255,255,255,0.05)',
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

                <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-7 pl-8 md:pl-10">

                  {/* Number */}
                  <div
                    className="font-display font-bold text-4xl md:text-5xl select-none leading-none shrink-0 transition-colors duration-300 w-12 text-left"
                    style={{
                      color: isHovered
                        ? 'var(--color-problem-num-active, rgba(239,68,68,0.5))'
                        : 'var(--color-problem-num-inactive, rgba(255,255,255,0.06))',
                    }}
                  >
                    {p.num}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isHovered
                        ? 'rgba(239,68,68,0.15)'
                        : 'var(--color-problem-icon-bg, rgba(255,255,255,0.04))',
                      color: isHovered ? '#ef4444' : '#6b7280',
                      border: isHovered
                        ? '1px solid rgba(239,68,68,0.3)'
                        : 'var(--color-problem-icon-border, 1px solid rgba(255,255,255,0.07))',
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-lg md:text-xl font-display font-bold text-white mb-0.5">
                      {p.title}
                    </h3>
                    <p
                      className="text-xs md:text-sm leading-relaxed transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? 'var(--color-problem-desc-active, #f3f4f6)'
                          : 'var(--color-problem-desc-inactive, #9ca3af)',
                      }}
                    >
                      {isHovered ? p.fullDesc : p.shortDesc}
                    </p>
                  </div>

                  {/* Diagnostic Warning Gauge (Middle Column on Desktop) */}
                  <DangerGauge num={p.num} isHovered={isHovered} />

                  {/* Stat — always visible but shifts color */}
                  <div
                    className="shrink-0 text-right hidden md:block"
                    style={{ minWidth: '140px' }}
                  >
                    <div
                      className="font-display font-bold text-2xl md:text-3xl transition-colors duration-300"
                      style={{ color: isHovered ? '#ef4444' : '#6b7280' }}
                    >
                      {p.stat}
                    </div>
                    <div
                      className="text-[10px] font-mono leading-tight mt-1 max-w-[130px] ml-auto uppercase tracking-wide"
                      style={{
                        color: isHovered
                          ? 'var(--color-problem-stat-active, #d1d5db)'
                          : 'var(--color-problem-stat-inactive, #6b7280)',
                      }}
                    >
                      {p.statLabel}
                    </div>
                  </div>

                  {/* Warning Alert Icon indicator */}
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered ? 'rgba(239,68,68,0.12)' : 'transparent',
                      color: isHovered ? '#ef4444' : 'transparent',
                    }}
                  >
                    <AlertTriangle size={15} />
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
          <p className="text-gray-400 text-sm md:text-base">
            Every single one of these mistakes is{' '}
            <span className="text-white font-semibold">teachable and fixable</span> with the right system.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
