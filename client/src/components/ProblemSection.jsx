import React, { useState, useEffect } from 'react';
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
      'Capital preservation is the single most important concept in financial education. Most beginners approach the markets without defining structured risk rules.',
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();
  }, []);

  useEffect(() => {
    if (!isTouchDevice) return;

    const handleScroll = () => {
      const cardElements = document.querySelectorAll('.problem-card-item');
      if (cardElements.length === 0) return;

      let closestIndex = null;
      let closestDist = Infinity;
      const centerY = window.innerHeight / 2;

      cardElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - centerY);
        if (dist < closestDist) {
          closestDist = dist;
          closestIndex = index;
        }
      });

      if (closestIndex !== null) {
        setHovered(closestIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially with a tiny delay to allow page height layouts to compute
    const timer = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [isTouchDevice]);

  return (
    <section
      id="problem-section"
      className="py-12 md:py-24 lg:py-28 relative overflow-hidden border-t border-white/5 bg-dark"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        {/* Header — Left-aligned, editorial */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 lg:mb-6">
          <div className="text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-widest uppercase mb-3 text-red-500 font-bold"
            >
              The Reality
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-display font-bold text-white leading-tight max-w-xl"
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
            className="text-gray-500 max-w-sm text-sm leading-relaxed text-left"
          >
            It's not about being smart. It's about having a structured,
            emotion-free process. These are common mistakes many beginners make when approaching financial markets.
          </motion.p>
        </div>

        {/* Problem Cards — Stacked rows with diagnostic gauges */}
        <div className="space-y-3 lg:space-y-2">
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
                onMouseEnter={() => !isTouchDevice && setHovered(i)}
                onMouseLeave={() => !isTouchDevice && setHovered(null)}
                className={`relative overflow-hidden rounded-2xl cursor-default group border transition-all duration-300 problem-card-item ${
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
                {/* Mobile Layout (Visible only on mobile/tablet) */}
                <div className="md:hidden p-5 flex flex-col gap-3.5 text-left relative">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(to bottom, #ef4444, #b91c1c)'
                        : 'transparent',
                    }}
                  />

                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
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
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-base font-display font-bold text-white leading-tight">
                          {p.title}
                        </h3>
                        <span
                          className="text-[9px] font-mono uppercase tracking-wider font-semibold transition-colors mt-0.5 block"
                          style={{ color: isHovered ? '#ef4444' : '#6b7280' }}
                        >
                          {p.stat}
                        </span>
                      </div>
                    </div>

                    <span
                      className="font-mono text-xl font-bold select-none leading-none transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? 'var(--color-problem-num-active, rgba(239,68,68,0.6))'
                          : 'var(--color-problem-num-inactive, rgba(255,255,255,0.1))',
                      }}
                    >
                      {p.num}
                    </span>
                  </div>

                  <div className="w-full">
                    <p
                      className="text-xs leading-relaxed transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? 'var(--color-problem-desc-active, #f3f4f6)'
                          : 'var(--color-problem-desc-inactive, #9ca3af)',
                      }}
                    >
                      {isHovered ? p.fullDesc : p.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1 text-[8px] font-mono uppercase tracking-wider text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <span>Diagnostic:</span>
                      <span className={isHovered ? "text-red-400 font-bold" : "text-gray-600"}>
                        {p.statLabel}
                      </span>
                    </div>
                    
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        color: isHovered ? '#ef4444' : 'transparent',
                      }}
                    >
                      <AlertTriangle size={12} className={isHovered ? "animate-pulse" : ""} />
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (Visible only on desktop/tablet) */}
                <div className="hidden md:flex md:items-center gap-6 p-5 lg:p-4 xl:p-5 pl-8 md:pl-10">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300"
                    style={{
                      background: isHovered
                        ? 'linear-gradient(to bottom, #ef4444, #b91c1c)'
                        : 'transparent',
                    }}
                  />

                  {/* Number */}
                  <div
                    className="font-display font-bold text-3xl md:text-4xl select-none leading-none shrink-0 transition-colors duration-300 w-10 text-left"
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
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
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
                    <Icon size={18} />
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-base md:text-lg font-display font-bold text-white mb-0.5 leading-tight">
                      {p.title}
                    </h3>
                    <p
                      className="text-xs lg:text-[11px] xl:text-xs leading-relaxed transition-colors duration-300"
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
                    className="shrink-0 text-right"
                    style={{ minWidth: '120px' }}
                  >
                    <div
                      className="font-display font-bold text-xl md:text-2xl transition-colors duration-300"
                      style={{ color: isHovered ? '#ef4444' : '#6b7280' }}
                    >
                      {p.stat}
                    </div>
                    <div
                      className="text-[9px] font-mono leading-tight mt-1 max-w-[120px] ml-auto uppercase tracking-wide"
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
                    <AlertTriangle size={14} />
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
          className="mt-10 lg:mt-5 flex items-center gap-4 text-center md:text-left flex-col md:flex-row"
        >
          <div
            className="px-4 py-2 rounded-xl text-xs font-mono font-bold shrink-0"
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.2)',
              color: '#ef4444',
            }}
          >
            The good news?
          </div>
          <p className="text-gray-400 text-xs md:text-sm">
            Every single one of these mistakes is{' '}
            <span className="text-white font-semibold">teachable and fixable</span> with the right system.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
