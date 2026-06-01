import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Plane, Shield, Sparkles, TrendingUp, ArrowUpRight } from 'lucide-react';

const dreams = [
  {
    id: 'car',
    icon: Car,
    title: 'Dream Car',
    desc: 'Stop looking at price tags.',
    longDesc: 'When your trading income matches your ambition, the showroom becomes a catalog — not a museum.',
    badge: 'CAPEX_UPGRADE',
    span: 'lg:col-span-1',
    decor: 'speedometer',
    image: '/assets/dream_car.png'
  },
  {
    id: 'home',
    icon: Home,
    title: 'Own Home',
    desc: 'Build equity on your terms.',
    longDesc: 'Skip the 30-year debt trap. Build real equity faster through active compound returns and smart leverage.',
    badge: 'ASSET_ACQUISITION',
    span: 'lg:col-span-2',
    decor: 'blueprint',
    image: '/assets/luxury_villa.png'
  },
  {
    id: 'travel',
    icon: Plane,
    title: 'Travel Freedom',
    desc: 'Work from anywhere.',
    longDesc: 'Trade from any timezone. Your only real constraint is a stable internet connection and chart time.',
    badge: 'LOCATION_INDEPENDENCE',
    span: 'lg:col-span-2',
    decor: 'timezones',
    image: '/assets/travel_freedom.png'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Family Security',
    desc: 'Protect what matters most.',
    longDesc: 'Build a bulletproof financial moat. Protect your family from single-point-of-failure salaries.',
    badge: 'RISK_MITIGATION',
    span: 'lg:col-span-1',
    decor: 'shield-rings',
  },
  {
    id: 'lifestyle',
    icon: Sparkles,
    title: 'Better Lifestyle',
    desc: 'Upgrade your daily standard.',
    longDesc: 'No more compromising on quality. Buy back your time and elevate your daily choices.',
    badge: 'MARGIN_EXPANSION',
    span: 'lg:col-span-1',
    decor: 'sparkles',
  },
  {
    id: 'confidence',
    icon: TrendingUp,
    title: 'Financial Confidence',
    desc: 'No more money anxiety.',
    longDesc: 'Replace panic with a plan. Know exactly how to navigate any market condition with a statistical edge.',
    badge: 'PSYCHOLOGICAL_EDGE',
    span: 'lg:col-span-2',
    decor: 'mini-chart',
    image: '/assets/trading_station.png'
  },
];

// Timezones for the timezone card
const timezones = [
  { name: 'NYC', time: '03:00' },
  { name: 'LON', time: '08:00' },
  { name: 'DEL', time: '13:30' },
  { name: 'TYO', time: '17:00' },
];

function VectorDecor({ type, isHovered }) {
  if (type === 'speedometer') {
    return (
      <svg
        className={`absolute right-0 bottom-0 w-36 h-36 pointer-events-none transition-all duration-500 ${
          isHovered
            ? 'opacity-[0.16] scale-105 text-emerald-400'
            : 'opacity-[0.03] text-emerald-500 light:opacity-[0.02]'
        }`}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M10,80 A40,40 0 1,1 90,80" />
        <path d="M10,80 L18,74 M90,80 L82,74 M50,10 L50,20 M20,30 L28,36 M80,30 L72,36" strokeDasharray="1,1" />
        <line
          x1="50"
          y1="80"
          x2="65"
          y2="45"
          strokeWidth="2"
          stroke="currentColor"
          style={{
            transform: isHovered ? 'rotate(35deg)' : 'rotate(0deg)',
            transformOrigin: '50px 80px',
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
        <circle cx="50" cy="80" r="3.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === 'blueprint') {
    return (
      <div
        className={`absolute right-0 bottom-0 w-64 h-32 pointer-events-none overflow-hidden select-none transition-all duration-500 ${
          isHovered
            ? 'opacity-[0.18] scale-102 text-emerald-400'
            : 'opacity-[0.04] text-emerald-500 light:opacity-[0.02]'
        }`}
      >
        <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M10,90 L10,10 L120,10 L120,90 Z" />
          <path d="M30,10 L30,90 M70,10 L70,90 M100,10 L100,90" />
          <path d="M10,40 L120,40 M10,70 L120,70" />
          <circle cx="150" cy="50" r="22" className={isHovered ? 'animate-pulse' : ''} />
          <path d="M125,50 L175,50 M150,25 L150,75" strokeDasharray="2,2" />
        </svg>
      </div>
    );
  }

  if (type === 'timezones') {
    return (
      <div
        className={`absolute right-6 bottom-4 flex gap-2 pointer-events-none select-none font-mono text-[9px] transition-all duration-500 ${
          isHovered
            ? 'opacity-100 translate-y-[-2px]'
            : 'opacity-[0.2] light:opacity-[0.15] text-emerald-500'
        }`}
      >
        {timezones.map((tz) => (
          <div
            key={tz.name}
            className={`flex flex-col items-center px-2 py-1.5 rounded-lg border transition-colors duration-300 ${
              isHovered
                ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400 light:bg-emerald-500/5 light:border-emerald-500/15 light:text-emerald-700'
                : 'bg-dark-300/80 border-white/5 light:bg-black/5 light:border-black/5 text-gray-400'
            }`}
          >
            <span className="text-[8px] opacity-75">{tz.name}</span>
            <span className="font-bold mt-0.5">{tz.time}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'shield-rings') {
    return (
      <svg
        className={`absolute right-4 bottom-4 w-28 h-28 pointer-events-none transition-all duration-500 ${
          isHovered
            ? 'opacity-[0.16] scale-105 text-emerald-400'
            : 'opacity-[0.03] text-emerald-500 light:opacity-[0.02]'
        }`}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="50" cy="50" r="40" />
        <circle
          cx="50"
          cy="50"
          r="30"
          strokeDasharray="4,3"
          className={isHovered ? 'animate-[spin_12s_linear_infinite]' : ''}
          style={{ transformOrigin: 'center' }}
        />
        <circle cx="50" cy="50" r="20" />
        <path d="M50,10 L50,90 M10,50 L90,50" strokeWidth="0.5" strokeDasharray="3,3" />
      </svg>
    );
  }

  if (type === 'sparkles') {
    return (
      <svg
        className={`absolute right-6 bottom-6 w-24 h-24 pointer-events-none transition-all duration-500 ${
          isHovered
            ? 'opacity-[0.16] scale-110 rotate-[15deg] text-emerald-400'
            : 'opacity-[0.03] text-emerald-500 light:opacity-[0.02]'
        }`}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M20,50 Q50,50 50,20 Q50,50 80,50 Q50,50 50,80 Q50,50 20,50 Z" />
        <path d="M75,25 Q85,25 85,15 Q85,25 95,25 Q85,25 85,35 Q85,25 75,25 Z" strokeWidth="0.8" />
      </svg>
    );
  }

  if (type === 'mini-chart') {
    return (
      <svg
        className={`absolute right-4 bottom-2 w-48 h-20 pointer-events-none transition-all duration-500 ${
          isHovered
            ? 'opacity-[0.25] translate-y-[-2px] text-emerald-400'
            : 'opacity-[0.06] text-emerald-500 light:opacity-[0.03]'
        }`}
        viewBox="0 0 150 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M 0 45 Q 25 35 40 40 T 80 15 T 120 25 T 150 5" fill="none" />
        <path d="M 0 45 Q 25 35 40 40 T 80 15 T 120 25 T 150 5 L 150 50 L 0 50 Z" fill="url(#dreams-emerald-gradient)" stroke="none" opacity="0.2" />
        <defs>
          <linearGradient id="dreams-emerald-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return null;
}

export default function DreamsAndAspirations() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="dreams-section"
      className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-dark"
    >
      {/* Background radial orbs ( strictly emerald ) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 justify-center mb-5"
          >
            <div className="w-5 h-px bg-emerald-500/50" />
            <p className="font-mono text-xs tracking-widest uppercase font-bold text-emerald-400">
              The Real Target
            </p>
            <div className="w-5 h-px bg-emerald-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            What Are You Building{' '}
            <span className="relative inline-block">
              <span className="text-gradient">Toward?</span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-500/50 origin-left"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Trading isn't about complex charts and flashing indicators. It's about buying back your time and funding the life you actually want to live.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {dreams.map((dream, index) => {
            const Icon = dream.icon;
            const isHovered = hoveredId === dream.id;

            return (
              <motion.div
                key={dream.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(dream.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group cursor-pointer ${dream.span}`}
              >
                <div className="dream-card">
                  {/* Subtle inner radial glow (always emerald) */}
                  <div
                    className="absolute -top-16 -left-16 w-36 h-36 rounded-full pointer-events-none transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
                      opacity: isHovered ? 1 : 0.4,
                    }}
                  />

                  {/* Vector decorations */}
                  {!dream.image && <VectorDecor type={dream.decor} isHovered={isHovered} />}

                  <div className="p-7 md:p-8 flex flex-col h-full justify-between relative z-10">
                    <div>
                      <div className={dream.image && dream.span === 'lg:col-span-2' ? 'grid grid-cols-1 sm:grid-cols-12 gap-6 items-center' : ''}>
                        <div className={dream.image && dream.span === 'lg:col-span-2' ? 'sm:col-span-7 text-left' : 'text-left'}>
                          {/* Top Row: Icon & Tech Badge */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="dream-icon-wrapper">
                              <Icon size={20} strokeWidth={isHovered ? 2.2 : 1.8} />
                            </div>

                            {/* Monospace Tech Badge */}
                            <span className="dream-badge">
                              {dream.badge}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-display font-bold text-white text-xl mb-2 flex items-center gap-1.5 group-hover:text-emerald-500 light:group-hover:text-emerald-700 transition-colors duration-300">
                            {dream.title}
                            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-emerald-500 light:text-emerald-700" />
                          </h3>

                          {/* Primary Description */}
                          <p className="text-emerald-400 light:text-emerald-700 text-sm md:text-base font-semibold leading-relaxed mb-3">
                            {dream.desc}
                          </p>

                          {/* Divider */}
                          <div className="dream-card-divider my-3.5" />

                          {/* Secondary detailed text */}
                          <p className="text-gray-300 light:text-gray-600 text-[13px] md:text-sm leading-relaxed">
                            {dream.longDesc}
                          </p>
                        </div>

                        {dream.image && dream.span === 'lg:col-span-2' && (
                          <div className="sm:col-span-5 h-40 rounded-2xl border border-white/10 overflow-hidden relative shadow-lg">
                            <img src={dream.image} alt={dream.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          </div>
                        )}
                      </div>

                      {/* Image layout for 1-column card (e.g. Dream Car) */}
                      {dream.image && dream.span === 'lg:col-span-1' && (
                        <div className="w-full h-28 rounded-xl border border-white/10 overflow-hidden relative mt-4 shadow-lg">
                          <img src={dream.image} alt={dream.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 text-xs font-mono">
            // STATUS: SYSTEM READY &middot; COMPOUND ENGINE ONLINE
          </p>
        </motion.div>
      </div>
    </section>
  );
}
