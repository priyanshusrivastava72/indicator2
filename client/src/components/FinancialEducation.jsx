import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PiggyBank, TrendingUp, Gem, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Briefcase,
    title: 'Income',
    subtitle: 'The Starting Point',
    desc: 'Understanding how earned income forms the foundation of personal finance.',
    stat: 'Foundation',
    statLabel: 'Capital Base',
    isHighlighted: false,
  },
  {
    icon: PiggyBank,
    title: 'Saving',
    subtitle: 'Long-Term Stability',
    desc: 'Learning how inflation, budgeting, and cash management affect long-term stability.',
    stat: 'Capital Preservation',
    statLabel: 'Budgeting Focus',
    isHighlighted: false,
  },
  {
    icon: TrendingUp,
    title: 'Financial Literacy',
    subtitle: 'The Shift',
    desc: 'Understanding market mechanics, risk, and financial decision-making.',
    stat: 'Risk Awareness',
    statLabel: 'Analysis Focus',
    isHighlighted: true,
  },
  {
    icon: Gem,
    title: 'Long-Term Planning',
    subtitle: 'The Strategy',
    desc: 'Building informed financial habits through education and structured thinking.',
    stat: 'Financial Awareness',
    statLabel: 'Core Competency',
    isHighlighted: true,
  },
];

export default function FinancialEducation() {
  return (
    <section
      id="financial-education"
      className="py-20 lg:py-0 relative overflow-hidden border-t border-white/5 bg-dark lg:min-h-screen lg:flex lg:flex-col lg:justify-center"
    >
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full animate-fade-in">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-widest uppercase mb-3 text-emerald-500 font-bold"
          >
            Why Financial Education Matters
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-display font-bold text-white leading-tight mb-4 lg:mb-3"
          >
            Most people learn how to earn.
            <br />
            <span className="text-emerald-500">
              Few learn how money works.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Schools teach you to earn. Nobody teaches you what to do after.
            The four stages below show exactly where most people get stuck — and where financial education changes the game.
          </motion.p>
        </div>

        {/* Steps — Linked Stage Progression Timeline */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-4 xl:gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const highlighted = step.isHighlighted;

            return (
              <div key={step.title} className="relative h-full flex flex-col">
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative rounded-[1.5rem] p-6 lg:p-5 xl:p-6 group overflow-hidden flex-1 flex flex-col justify-between ${
                    highlighted ? 'highlighted-education-card' : ''
                  }`}
                  style={{
                    background: highlighted
                      ? 'rgba(16,185,129,0.06)'
                      : 'var(--color-card-bg, rgba(255,255,255,0.02))',
                    border: highlighted
                      ? '1px solid rgba(16,185,129,0.25)'
                      : '1px solid var(--color-card-border, rgba(255,255,255,0.06))',
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

                  {/* Step number watermark */}
                  <div
                    className="absolute top-4 right-4 font-display font-black text-5xl lg:text-4xl select-none pointer-events-none leading-none z-0"
                    style={{
                      color: highlighted
                        ? 'var(--color-watermark-active, rgba(16,185,129,0.08))'
                        : 'var(--color-watermark-inactive, rgba(255,255,255,0.03))',
                    }}
                  >
                    0{i + 1}
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    {/* Icon + Tag */}
                    <div className="flex items-start gap-4 mb-4 lg:mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 z-10"
                        style={{
                          background: highlighted
                            ? 'rgba(16,185,129,0.15)'
                            : 'var(--color-icon-bg, rgba(255,255,255,0.05))',
                          color: highlighted ? 'var(--color-accent-green, #10b981)' : '#6b7280',
                          border: highlighted
                            ? '1px solid rgba(16,185,129,0.3)'
                            : 'var(--color-icon-border, 1px solid rgba(255,255,255,0.08))',
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p
                          className="text-[9px] font-mono uppercase tracking-widest mb-0.5"
                          style={{
                            color: highlighted
                              ? 'var(--color-accent-green, #10b981)'
                              : 'var(--color-text-inactive-desc, #8a99ad)',
                          }}
                        >
                          {step.subtitle}
                        </p>
                        <h3 className="text-lg lg:text-base xl:text-lg font-display font-bold text-white leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-xs lg:text-[11px] xl:text-xs leading-relaxed mb-4 lg:mb-3">
                      {step.desc}
                    </p>

                    {/* Stat box at bottom of card */}
                    <div
                      className="flex flex-col gap-1 rounded-xl px-3.5 py-2.5 mt-auto text-left"
                      style={{
                        background: highlighted
                          ? 'rgba(16,185,129,0.1)'
                          : 'var(--color-stat-bg, rgba(255,255,255,0.03))',
                        border: highlighted
                          ? '1px solid rgba(16,185,129,0.2)'
                          : 'var(--color-stat-border, 1px solid rgba(255,255,255,0.05))',
                      }}
                    >
                      <p className="text-[9px] text-gray-400 font-mono tracking-wider uppercase leading-none">
                        {step.statLabel}
                      </p>
                      <p
                        className="font-display font-bold text-sm lg:text-xs xl:text-sm leading-tight"
                        style={{
                          color: highlighted
                            ? 'var(--color-accent-green, #10b981)'
                            : 'var(--color-stat-text-inactive, #d1d5db)',
                        }}
                      >
                        {step.stat}
                      </p>
                    </div>
                  </div>

                  {/* Pulsing dot for active/highlighted steps */}
                  {highlighted && (
                    <motion.div
                      className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#10b981' }}
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0.2, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 lg:mt-6"
        >
          <p className="text-gray-500 text-xs md:text-sm">
            Most people stop at Stage 2.{' '}
            <span style={{ color: 'var(--color-accent-green, #10b981)' }} className="font-semibold">
              TradeCraft helps you reach Stage 3 and 4.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
