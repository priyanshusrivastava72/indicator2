import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Dumbbell, GraduationCap, TrendingUp, Clock, BookOpen, Users, Zap } from 'lucide-react';

const skills = [
  {
    icon: Car,
    name: 'Learning to Drive',
    time: '2–3 months of daily practice',
    percent: 25,
    what: 'Nobody drives perfectly on day 1. You stalled the engine, hit curbs, panicked in traffic — and eventually it became second nature.',
    color: '#60a5fa',
    glow: 'rgba(96,165,250,0.06)',
  },
  {
    icon: GraduationCap,
    name: 'Clearing a Competitive Exam',
    time: '1–3 years of preparation',
    percent: 100,
    what: 'JEE, UPSC, CA, MBA — everyone who cleared it had a study plan, a routine, and months of consistent effort. Nobody cracked it overnight.',
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.06)',
  },
  {
    icon: Dumbbell,
    name: 'Getting Fit at the Gym',
    time: '3–6 months to see real results',
    percent: 45,
    what: 'You showed up even when you didn\'t feel like it. Progress was slow at first, then it compounded. Skipping days set you back. Consistency was everything.',
    color: '#fb923c',
    glow: 'rgba(251,146,60,0.06)',
  },
  {
    icon: TrendingUp,
    name: 'Trading',
    time: '3–6 months to consistency',
    percent: 45,
    what: 'You master risk management, market structure, and disciplined execution — exactly like any other skill worth having.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.06)',
    highlight: true,
  },
];

const timelineItems = [
  { icon: BookOpen, label: 'Learn the theory', sub: 'Weeks 1–4' },
  { icon: Users, label: 'Paper trade the system', sub: 'Weeks 5–8' },
  { icon: Clock, label: 'Build consistency', sub: 'Months 3–6' },
  { icon: Zap, label: 'Scale with confidence', sub: 'Month 6+' },
];

export default function MindsetShift() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="mindset-shift"
      className="py-28 relative overflow-hidden border-t border-white/5 bg-dark"
    >
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 80%, rgba(16,185,129,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm tracking-widest uppercase mb-4 text-emerald-500 font-bold"
          >
            The Mindset Shift
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6"
          >
            Trading is a skill.
            <br />
            <span className="text-gray-500">Not a shortcut.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl"
          >
            Nobody expects to code a startup after a weekend tutorial. Trading demands
            the same professional respect — structured learning, deliberate practice,
            and a proper system.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Left: Skill Cards with commitment progress bars */}
          <div className="space-y-3">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              const isActive = active === i;
              const isHighlight = skill.highlight;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="relative overflow-hidden rounded-2xl cursor-default text-left"
                  style={{
                    background: isActive
                      ? skill.glow
                      : isHighlight
                      ? 'rgba(16,185,129,0.04)'
                      : 'rgba(255,255,255,0.02)',
                    border: isActive
                      ? `1px solid ${skill.color}35`
                      : isHighlight
                      ? '1px solid rgba(16,185,129,0.2)'
                      : '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.3s ease',
                    padding: '22px 26px',
                  }}
                >
                  {/* Left color bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full transition-all duration-300"
                    style={{
                      background: isActive || isHighlight ? skill.color : 'transparent',
                      opacity: isActive ? 1 : isHighlight ? 0.5 : 0,
                    }}
                  />

                  <div className="flex items-start gap-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 mt-1"
                      style={{
                        background: isActive || isHighlight
                          ? `${skill.color}20`
                          : 'rgba(255,255,255,0.04)',
                        color: isActive || isHighlight ? skill.color : '#6b7280',
                        border: `1px solid ${isActive || isHighlight ? skill.color + '40' : 'rgba(255,255,255,0.07)'}`,
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3
                          className="text-base font-bold transition-colors duration-300 flex items-center gap-2"
                          style={{ color: isActive || isHighlight ? skill.color : 'var(--color-text-inactive, #e5e7eb)' }}
                        >
                          {skill.name}
                          {isHighlight && (
                            <span
                              className="text-[9px] font-mono font-normal px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 light:bg-emerald-500/5 light:text-emerald-700 shrink-0"
                            >
                              You're here
                            </span>
                          )}
                        </h3>
                        <span
                          className="text-[10px] font-mono shrink-0 transition-colors duration-300 text-gray-500"
                        >
                          {skill.time}
                        </span>
                      </div>

                      <p
                        className="text-sm leading-relaxed transition-colors duration-300 text-gray-300"
                      >
                        {skill.what}
                      </p>

                      {/* Visual Time-commitment Progress Bar */}
                      <div className="skill-duration-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: isActive || isHighlight ? `${skill.percent}%` : '8%' }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                          style={{ backgroundColor: skill.color }}
                          className="h-full rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden text-left"
            style={{
              background: 'rgba(16,185,129,0.04)',
              border: '1px solid rgba(16,185,129,0.15)',
            }}
          >
            {/* Corner glow */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              <p
                className="font-mono text-xs tracking-widest uppercase mb-8 text-emerald-500 font-bold"
              >
                Your Learning Path
              </p>
              <h3 className="text-2xl font-display font-bold text-white mb-10 leading-tight">
                From zero to executing<br />your first real trade.
              </h3>

              <div className="space-y-0">
                {timelineItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex gap-5 relative"
                    >
                      {/* Vertical line */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10"
                          style={{
                            background: 'rgba(16,185,129,0.15)',
                            border: '1px solid rgba(16,185,129,0.35)',
                            color: '#10b981',
                          }}
                        >
                          <Icon size={16} />
                        </div>
                        {i < timelineItems.length - 1 && (
                          <div
                            className="w-px flex-1 my-1"
                            style={{
                              background:
                                'linear-gradient(to bottom, rgba(16,185,129,0.3), rgba(16,185,129,0.05))',
                              minHeight: '32px',
                            }}
                          />
                        )}
                      </div>

                      <div className="pb-6">
                        <h4 className="text-white font-bold text-base mb-0.5">{item.label}</h4>
                        <p
                          className="text-xs font-mono text-emerald-400 opacity-80"
                        >
                          {item.sub}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div
                className="mt-4 p-5 rounded-xl text-sm leading-relaxed"
                style={{
                  background: 'var(--color-callout-bg, rgba(255,255,255,0.03))',
                  border: '1px solid var(--color-callout-border, rgba(255,255,255,0.06))',
                  color: 'var(--color-callout-text, #9ca3af)',
                }}
              >
                <span className="font-semibold text-white light:text-gray-900">The honest truth:</span> Consistent profitability
                takes 3–6 months of focused practice. Anyone promising overnight results is lying.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
