import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PiggyBank, TrendingUp, Gem, ArrowDown } from 'lucide-react';

const steps = [
  {
    icon: Briefcase,
    title: 'Income',
    subtitle: 'The Starting Point',
    desc: 'You trade time for a fixed monthly salary. It grows slowly — limited by your employer and industry.',
    stat: '₹30K–₹80K/mo',
    statLabel: 'Average Salary Range',
    isHighlighted: false,
  },
  {
    icon: PiggyBank,
    title: 'Savings',
    subtitle: 'The Common Trap',
    desc: 'Money sits in a bank account losing real value to inflation every single year. Safe, but stagnant.',
    stat: '3–5% p.a.',
    statLabel: 'FD Interest Rate',
    isHighlighted: false,
  },
  {
    icon: TrendingUp,
    title: 'Investing',
    subtitle: 'The Shift',
    desc: 'Money works for you in equity, funds, or trading. Returns outpace inflation and create passive growth.',
    stat: '12–30%+ p.a.',
    statLabel: 'Potential Returns',
    isHighlighted: true,
  },
  {
    icon: Gem,
    title: 'Wealth Building',
    subtitle: 'The Destination',
    desc: "Compounding kicks in. Multiple income streams. Financial decisions become choices, not necessities.",
    stat: 'Freedom',
    statLabel: 'The Real Return',
    isHighlighted: true,
  },
];

export default function FinancialEducation() {
  return (
    <section
      id="financial-education"
      className="py-28 relative overflow-hidden border-t border-white/5"
      style={{ backgroundColor: '#08090a' }}
    >
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm tracking-widest uppercase mb-5"
            style={{ color: '#10b981' }}
          >
            Why Financial Education Matters
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
          >
            Most people learn how to earn.
            <br />
            <span style={{ color: '#10b981' }}>
              Few learn how money works.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Schools teach you to earn. Nobody teaches you what to do after.
            The four stages below show exactly where most people get stuck — and where financial education changes the game.
          </motion.p>
        </div>

        {/* Steps — Vertical Timeline Style */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const highlighted = step.isHighlighted;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-2xl p-8 group overflow-hidden"
                style={{
                  background: highlighted
                    ? 'rgba(16,185,129,0.06)'
                    : 'rgba(255,255,255,0.02)',
                  border: highlighted
                    ? '1px solid rgba(16,185,129,0.25)'
                    : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* Glow on highlighted cards */}
                {highlighted && (
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
                    }}
                  />
                )}

                {/* Step number */}
                <div
                  className="absolute top-6 right-6 font-display font-bold text-7xl select-none pointer-events-none leading-none"
                  style={{
                    color: highlighted ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)',
                  }}
                >
                  0{i + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon + Tag */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: highlighted
                          ? 'rgba(16,185,129,0.15)'
                          : 'rgba(255,255,255,0.05)',
                        color: highlighted ? '#10b981' : '#6b7280',
                        border: highlighted
                          ? '1px solid rgba(16,185,129,0.3)'
                          : '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-mono uppercase tracking-widest mb-1"
                        style={{ color: highlighted ? '#10b981' : '#4b5563' }}
                      >
                        {step.subtitle}
                      </p>
                      <h3 className="text-2xl font-display font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm mb-6">
                    {step.desc}
                  </p>

                  {/* Stat */}
                  <div
                    className="flex items-center justify-between rounded-xl px-5 py-3"
                    style={{
                      background: highlighted
                        ? 'rgba(16,185,129,0.1)'
                        : 'rgba(255,255,255,0.03)',
                      border: highlighted
                        ? '1px solid rgba(16,185,129,0.2)'
                        : '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <p
                      className="font-display font-bold text-xl"
                      style={{ color: highlighted ? '#10b981' : '#9ca3af' }}
                    >
                      {step.stat}
                    </p>
                    <p className="text-xs text-gray-600 font-mono">{step.statLabel}</p>
                  </div>
                </div>

                {/* Pulsing dot for highlighted */}
                {highlighted && (
                  <motion.div
                    className="absolute bottom-6 left-6 w-2 h-2 rounded-full"
                    style={{ backgroundColor: '#10b981' }}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-base">
            Most people stop at Stage 2.{' '}
            <span style={{ color: '#10b981' }} className="font-semibold">
              TradeCraft helps you reach Stage 3 and 4.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
