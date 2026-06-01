import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Activity, ShieldCheck, Users, ArrowRight } from 'lucide-react';

const pillars = [
  {
    id: 'course',
    icon: BookOpen,
    title: 'Structured Course',
    desc: 'Step-by-step curriculum taking you from zero to market competent.',
    details: '6 Phases / 24 Modules',
    badge: 'EDUCATION',
    decor: 'modules',
  },
  {
    id: 'indicator',
    icon: Activity,
    title: 'Smart Indicator',
    desc: 'Proprietary TradingView algorithm that filters market noise.',
    details: 'Buy/Sell Signals & Volume Profiles',
    badge: 'ALGORITHM',
    decor: 'signals',
  },
  {
    id: 'risk',
    icon: ShieldCheck,
    title: 'Risk Framework',
    desc: 'Mathematical capital preservation rules to keep you in the game.',
    details: 'Max 1% Risk / Position Sizing Calculator',
    badge: 'PRESERVATION',
    decor: 'risk-gauge',
  },
  {
    id: 'community',
    icon: Users,
    title: 'Private Community',
    desc: 'Network with serious traders. No spam, just pure execution.',
    details: 'Daily Watchlists & Live Trade Sharing',
    badge: 'NETWORK',
    decor: 'community-pulse',
  },
];

function CardDecor({ type, isHovered }) {
  if (type === 'modules') {
    return (
      <div className="mt-6 space-y-2 w-full font-mono text-[10px] text-gray-500">
        <div className="flex justify-between items-center bg-white/2 px-2.5 py-1.5 rounded border border-white/5">
          <span>PHASE 1: Foundation</span>
          <span className="text-emerald-500/80">100%</span>
        </div>
        <div className="flex justify-between items-center bg-white/2 px-2.5 py-1.5 rounded border border-white/5">
          <span>PHASE 2: Risk Management</span>
          <span className="text-emerald-500/80">100%</span>
        </div>
        <div className="flex justify-between items-center bg-white/2 px-2.5 py-1.5 rounded border border-white/5 opacity-50">
          <span>PHASE 3: Execution Edge</span>
          <span>Pending</span>
        </div>
      </div>
    );
  }

  if (type === 'signals') {
    return (
      <div className="mt-6 relative w-full h-16 bg-white/2 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full text-emerald-500/10" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path d="M 0 30 L 20 28 L 40 32 L 60 10 L 80 15 L 100 5" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <div className="flex items-center gap-3 relative z-10">
          <span className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            [ BUY TRIGGER ]
          </span>
          <span className="text-[10px] font-mono text-gray-400 font-semibold">@ 22,450</span>
        </div>
      </div>
    );
  }

  if (type === 'risk-gauge') {
    return (
      <div className="mt-6 w-full font-mono text-[10px] space-y-2 text-gray-500">
        <div className="flex items-center justify-between">
          <span>MAX ACC-RISK / TRADE</span>
          <span className="text-emerald-400 font-bold">1.00%</span>
        </div>
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-dark-300 rounded-full overflow-hidden border border-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '40%' : '25%' }}
            transition={{ duration: 0.5 }}
            className="h-full bg-emerald-500"
          />
        </div>
        <div className="flex items-center justify-between text-[8px] text-gray-600">
          <span>CONSERVATIVE</span>
          <span>AGGRESSIVE</span>
        </div>
      </div>
    );
  }

  if (type === 'community-pulse') {
    return (
      <div className="mt-6 flex items-center justify-between w-full font-mono text-[10px] bg-white/2 p-3 rounded-xl border border-white/5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-gray-400">MEMBERS ACTIVE</span>
        </div>
        <span className="text-white font-bold">1,420+</span>
      </div>
    );
  }

  return null;
}

export default function EcosystemPillars() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="ecosystem"
      className="py-24 md:py-32 bg-dark relative border-t border-white/5 overflow-hidden"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.03) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 justify-center mb-5"
          >
            <div className="w-5 h-px bg-emerald-500/50" />
            <p className="font-mono text-xs tracking-widest uppercase font-bold text-emerald-400">
              The Complete Ecosystem
            </p>
            <div className="w-5 h-px bg-emerald-500/50" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            Everything You Need To Succeed.{' '}
            <span className="text-gradient block mt-1">In One Unified Framework.</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            We don't just sell an indicator or a course. We provide a full, structured system where each piece leverages the next to secure your growth.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isHovered = hoveredId === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="h-full"
              >
                <div
                  className="rounded-2xl p-7 border transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(10,10,10,0.6)',
                    borderColor: isHovered ? 'rgba(16,185,129,0.35)' : 'rgba(255,255,255,0.04)',
                    boxShadow: isHovered
                      ? '0 20px 40px -15px rgba(16,185,129,0.15), inset 0 1px 0 rgba(255,255,255,0.03)'
                      : '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.01)',
                  }}
                >
                  {/* Radial spotlight effect behind card */}
                  <div
                    className="absolute -top-16 -left-16 w-36 h-36 rounded-full pointer-events-none transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 75%)',
                      opacity: isHovered ? 1 : 0.3,
                    }}
                  />

                  {/* Header Row */}
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: isHovered ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.02)',
                          borderColor: isHovered ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)',
                          color: isHovered ? '#10b981' : '#888',
                        }}
                      >
                        <Icon size={20} strokeWidth={isHovered ? 2.2 : 1.8} />
                      </div>

                      <span className="font-mono text-[8px] tracking-widest text-gray-500 bg-white/2 px-2 py-0.5 rounded border border-white/5">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Visual preview metadata container */}
                  <div>
                    <CardDecor type={pillar.decor} isHovered={isHovered} />

                    {/* Footer Row */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono">
                      <span className="text-gray-500">{pillar.details}</span>
                      <ArrowRight
                        size={12}
                        className="text-gray-600 transition-all duration-300"
                        style={{
                          color: isHovered ? '#10b981' : undefined,
                          transform: isHovered ? 'translateX(3px)' : 'none',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
