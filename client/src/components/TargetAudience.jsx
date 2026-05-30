import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, LineChart, Rocket, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

const audiences = [
  {
    id: 'students',
    icon: GraduationCap,
    num: '01',
    tag: '18–24 yrs',
    title: 'Students',
    headline: 'Build wealth before your first salary.',
    desc: 'Most students wait until they have a job to start investing. The ones who learn financial skills early are already compounding while others are still searching on Naukri.',
    points: [
      'Learn in just 1 hour per day',
      'Start with ₹5,000–₹10,000 capital',
      'Build a skill nobody teaches in college',
    ],
    color: '#10b981',
    glow: 'rgba(16,185,129,0.12)',
    border: 'rgba(16,185,129,0.3)',
  },
  {
    id: 'professionals',
    icon: Briefcase,
    num: '02',
    tag: '24–35 yrs',
    title: 'Working Professionals',
    headline: "Your salary caps out. Your skills don't.",
    desc: 'A job gives you income. Trading gives you an alternative growth engine. With only 45–60 minutes of chart time per day, this system is designed for people with a life.',
    points: [
      'Pre-market analysis in 45–60 mins',
      'No need to watch charts all day',
      'Grow wealth alongside your career',
    ],
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.3)',
  },
  {
    id: 'investors',
    icon: LineChart,
    num: '03',
    tag: 'Market-Aware',
    title: 'Existing Investors',
    headline: 'Go beyond FDs and mutual funds.',
    desc: 'If you already invest in stocks or mutual funds, you understand the market partially. This system gives you active trading skills to compound your returns even faster.',
    points: [
      'Understand price action behind your stocks',
      'Know when to exit, not just when to enter',
      'Add active income alongside passive investing',
    ],
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.12)',
    border: 'rgba(168,85,247,0.3)',
  },
  {
    id: 'beginners',
    icon: Rocket,
    num: '04',
    tag: 'Zero Experience',
    title: 'Complete Beginners',
    headline: 'Zero experience. Full potential.',
    desc: "You don't need a finance degree, a trading background, or special software. If you can follow a checklist and respect a process, you can trade successfully.",
    points: [
      'Starts from absolute zero fundamentals',
      'Step-by-step indicator installation guide',
      'Paper trade first, real money later',
    ],
    color: '#f97316',
    glow: 'rgba(249,115,22,0.12)',
    border: 'rgba(249,115,22,0.3)',
  },
];

export default function TargetAudience() {
  const [active, setActive] = useState('students');
  const current = audiences.find((a) => a.id === active);
  const Icon = current.icon;

  return (
    <section
      className="py-28 relative overflow-hidden border-t border-white/5"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Ambient background glow that changes with tab */}
      <motion.div
        key={current.id + '-bg'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute pointer-events-none"
        style={{
          top: '0%',
          right: '0%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${current.glow} 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm tracking-widest uppercase mb-3"
              style={{ color: '#10b981' }}
            >
              Who Is This For?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Built for Every<br />
              <span style={{ color: current.color }} className="transition-colors duration-500">
                Stage of Life.
              </span>
            </motion.h2>
          </div>
          <p className="text-gray-500 text-lg max-w-xs leading-relaxed">
            Pick your profile and see exactly how TradeCraft fits into your world.
          </p>
        </div>

        {/* Selector Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {audiences.map((aud) => {
            const AudIcon = aud.icon;
            const isActive = active === aud.id;
            return (
              <button
                key={aud.id}
                onClick={() => setActive(aud.id)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  backgroundColor: isActive ? aud.color : 'rgba(255,255,255,0.05)',
                  color: isActive ? '#fff' : '#6b7280',
                  border: `1px solid ${isActive ? aud.color : 'rgba(255,255,255,0.08)'}`,
                  boxShadow: isActive ? `0 0 20px ${aud.glow}` : 'none',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <AudIcon size={16} />
                {aud.title}
              </button>
            );
          })}
        </div>

        {/* Main Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                border: `1px solid ${current.border}`,
                background: 'rgba(10,10,10,0.8)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="grid md:grid-cols-2">

                {/* Left Panel — Big Visual */}
                <div
                  className="p-10 md:p-14 flex flex-col justify-between min-h-[420px] relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${current.glow}, transparent 60%)` }}
                >
                  {/* Large Number Watermark */}
                  <div
                    className="absolute right-6 bottom-6 font-display font-bold select-none pointer-events-none leading-none"
                    style={{
                      fontSize: '160px',
                      color: current.color,
                      opacity: 0.06,
                    }}
                  >
                    {current.num}
                  </div>

                  {/* Tag + Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className="px-3 py-1.5 rounded-full text-xs font-bold font-mono"
                      style={{
                        backgroundColor: `${current.color}20`,
                        color: current.color,
                        border: `1px solid ${current.border}`,
                      }}
                    >
                      {current.tag}
                    </span>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${current.color}15`,
                        border: `1px solid ${current.border}`,
                        color: current.color,
                      }}
                    >
                      <Icon size={28} />
                    </div>
                  </div>

                  {/* Headline */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
                      {current.headline}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {current.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    className="mt-6 self-start flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:gap-3"
                    style={{
                      background: `linear-gradient(135deg, ${current.color}, ${current.color}cc)`,
                      boxShadow: `0 4px 20px ${current.glow}`,
                    }}
                  >
                    Start as a {current.title} <ArrowRight size={16} />
                  </button>
                </div>

                {/* Right Panel — Details */}
                <div className="p-10 md:p-14 border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-center gap-8">

                  <div>
                    <p
                      className="text-xs font-bold font-mono tracking-widest uppercase mb-6"
                      style={{ color: current.color }}
                    >
                      What You Get
                    </p>
                    <ul className="space-y-5">
                      {current.points.map((pt, i) => (
                        <motion.li
                          key={pt}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <span
                            className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${current.color}25`, color: current.color }}
                          >
                            <CheckCircle2 size={14} />
                          </span>
                          <span className="text-gray-300 font-medium leading-relaxed">{pt}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Other profiles */}
                  <div className="mt-4 pt-8 border-t border-white/5">
                    <p className="text-xs text-gray-600 uppercase tracking-widest font-mono mb-4">Other Profiles</p>
                    <div className="flex flex-col gap-2">
                      {audiences.filter((a) => a.id !== active).map((aud) => {
                        const AudIcon = aud.icon;
                        return (
                          <button
                            key={aud.id}
                            onClick={() => setActive(aud.id)}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-gray-500 hover:text-gray-200 hover:bg-white/5 transition-all duration-200 group text-sm text-left"
                          >
                            <AudIcon size={16} />
                            <span>{aud.title}</span>
                            <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
