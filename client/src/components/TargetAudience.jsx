import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  LineChart,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

const audiences = [
  {
    id: 'students',
    icon: GraduationCap,
    num: '01',
    tag: '18–24 YRS',
    title: 'Students & Youth',
    headline: 'Learn risk-focused compounding principles early.',
    desc: 'Most students wait until graduation to learn about capital. Understanding compound interest and risk rules early gives you a structured educational base.',
    points: [
      'Learn in just 1 hour per day alongside college',
      'Understand rules with small hypothetical setups',
      'Build theoretical financial skillsets early',
    ],
    stat: { value: '1 HR', label: 'DAILY COMMITMENT' },
  },
  {
    id: 'professionals',
    icon: Briefcase,
    num: '02',
    tag: '24–35 YRS',
    title: 'Working Professionals',
    headline: "Your salary has a limit. Your skills don't.",
    desc: 'A job secures your present. Structured financial education builds your long-term understanding. This framework teaches you to interpret charts in 45–60 minutes per day.',
    points: [
      'Pre-market analysis studies in under 60 minutes',
      'No active screen dependency or monitoring',
      'Build a structured secondary skill',
    ],
    stat: { value: '45 MIN', label: 'CHART WINDOW' },
  },
  {
    id: 'investors',
    icon: LineChart,
    num: '03',
    tag: 'ACTIVE TRADERS',
    title: 'Existing Investors',
    headline: 'Transition from passive to active charting analysis.',
    desc: 'If you already hold mutual funds or long-term stocks, active pricing structure analysis is valuable. Learn to read support and resistance lines based on institutional theories.',
    points: [
      'Understand the pure price action behind charts',
      'Structured support & resistance theory',
      'Complement portfolios with technical analysis skills',
    ],
    stat: { value: '2X+', label: 'COMPREHENSION' },
  },
  {
    id: 'beginners',
    icon: Rocket,
    num: '04',
    tag: 'ZERO BASE',
    title: 'Absolute Beginners',
    headline: 'No prior finance experience required.',
    desc: 'Analyzing markets is not a casino — it is a process. If you can follow a checklist, manage risk parameters, and remain disciplined, you can study market structures successfully.',
    points: [
      'Starts from absolute zero market fundamentals',
      'Step-by-step TradingView setup checklist',
      'Risk-free simulation study logs',
    ],
    stat: { value: '0 → 1', label: 'CURRICULUM FLOW' },
  },
];

/* ─── Mockup Widgets for Right Column ─── */
function MockupWidget({ id }) {
  if (id === 'students') {
    return (
      <div className="aud-mockup-panel h-full flex flex-col justify-between gap-4">
        <div className="aud-mockup-title">Compounding Education Theory</div>
        
        {/* Compounding Comparison Bar Chart */}
        <div className="space-y-4 my-auto">
          {/* Active Trading CAGR */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-left">
              <span className="text-emerald-400 font-semibold light:text-emerald-700">Hypothetical Compounding (15% Hypo)</span>
              <span className="font-mono text-emerald-400 font-bold light:text-emerald-700">3.1X Growth</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-white/5 border border-white/5 light:bg-black/5 light:border-black/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
              />
            </div>
          </div>
          
          {/* Traditional FD */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-gray-500 text-left">
              <span>Baseline FD (6% rate)</span>
              <span className="font-mono">1.8X Growth</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-white/5 border border-white/5 light:bg-black/5 light:border-black/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '58%' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gray-500 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 light:border-black/5 pt-3 mt-2 flex justify-between items-center text-[10px] font-mono text-gray-500">
          <span>Base: Hypothetical Contribution</span>
          <span className="text-emerald-400 light:text-emerald-700 font-bold">Difference: 1.7x Ratio</span>
        </div>
      </div>
    );
  }
  
  if (id === 'professionals') {
    return (
      <div className="aud-mockup-panel h-full flex flex-col justify-between gap-4">
        <div className="aud-mockup-title">60-Min Daily Case Study Log</div>
        
        {/* Mock Daily Ledger Sheet */}
        <div className="space-y-2 text-[11px] my-auto">
          <div className="flex justify-between items-center py-1.5 border-b border-white/5 light:border-black/5 text-gray-400 light:text-gray-600">
            <span className="font-mono text-left">MON: RELIANCE (Support Confluence)</span>
            <span className="text-emerald-400 light:text-emerald-700 font-mono font-bold">Completed</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-white/5 light:border-black/5 text-gray-400 light:text-gray-600">
            <span className="font-mono text-left">TUE: TCS (Failed Breakout Study)</span>
            <span className="text-emerald-400 light:text-emerald-700 font-mono font-bold">Completed</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-white/5 light:border-black/5 text-gray-400 light:text-gray-600">
            <span className="font-mono text-left">WED: INFY (Trend Channel Align)</span>
            <span className="text-emerald-400 light:text-emerald-700 font-mono font-bold">Completed</span>
          </div>
          <div className="flex justify-between items-center py-1.5 text-gray-400 light:text-gray-600 text-left">
            <span className="font-mono">THU: SBIN (Risk Limit Active)</span>
            <span className="text-emerald-400 light:text-emerald-700 font-mono font-bold">Completed</span>
          </div>
        </div>

        <div className="border-t border-white/5 light:border-black/5 pt-3 mt-2 flex justify-between items-center text-[10px] font-mono">
          <span className="text-gray-500">Risk Parameter: 1% Theory</span>
          <span className="text-emerald-400 light:text-emerald-700 font-bold">Completed Studies: 4/Week</span>
        </div>
      </div>
    );
  }
  
  if (id === 'investors') {
    return (
      <div className="aud-mockup-panel h-full flex flex-col justify-between gap-4">
        <div className="aud-mockup-title">Core & Satellite Study Allocation</div>
        
        {/* Visual Allocation blocks */}
        <div className="space-y-3 my-auto">
          {/* Core */}
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 light:bg-black/5 light:border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <div className="text-left">
                <p className="font-semibold text-gray-300 light:text-gray-800 text-xs">Core Portfolio (80%)</p>
                <p className="text-[9px] text-gray-500">Mutual Funds & Blue-chips</p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-gray-400">Historical Baseline</span>
          </div>

          {/* Satellite */}
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 light:bg-emerald-500/5 light:border-emerald-500/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <p className="font-semibold text-emerald-400 light:text-emerald-700 text-xs">Satellite Edge (20%)</p>
                <p className="text-[9px] text-emerald-500/80 light:text-emerald-600/80">Active Technical Analysis</p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 light:text-emerald-700 font-bold">1:2+ R:R Setup</span>
          </div>
        </div>

        <div className="border-t border-white/5 light:border-black/5 pt-3 mt-2 flex justify-between items-center text-[10px] font-mono text-gray-500">
          <span>Objective: Analytical Precision</span>
          <span className="text-emerald-400 light:text-emerald-700 font-bold">Systematic Study</span>
        </div>
      </div>
    );
  }
  
  if (id === 'beginners') {
    return (
      <div className="aud-mockup-panel h-full flex flex-col justify-between gap-4">
        <div className="aud-mockup-title">0 → 1 Safe Learning Path</div>
        
        {/* Step List Timeline */}
        <div className="space-y-3.5 my-auto text-left">
          <div className="flex items-start gap-2.5 text-gray-400">
            <span className="w-5 h-5 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 text-[10px] light:text-emerald-700">1</span>
            <div>
              <p className="font-semibold text-gray-300 light:text-gray-800 text-xs leading-none">Learn Market Structure</p>
              <p className="text-[9px] text-gray-500 mt-1">Master price actions (No indicator clutter).</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2.5 text-gray-400">
            <span className="w-5 h-5 rounded bg-white/5 border border-white/5 text-gray-500 font-mono font-bold flex items-center justify-center shrink-0 text-[10px] light:bg-black/5 light:border-black/5">2</span>
            <div>
              <p className="font-semibold text-gray-300 light:text-gray-800 text-xs leading-none">30-Day Simulation Practice</p>
              <p className="text-[9px] text-gray-500 mt-1">Validate core strategies with virtual capital.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-gray-400">
            <span className="w-5 h-5 rounded bg-white/5 border border-white/5 text-gray-500 font-mono font-bold flex items-center justify-center shrink-0 text-[10px] light:bg-black/5 light:border-black/5">3</span>
            <div>
              <p className="font-semibold text-gray-300 light:text-gray-800 text-xs leading-none">Micro-Risk Practice Account</p>
              <p className="text-[9px] text-gray-500 mt-1">Practice layouts with small, strict risk boundaries.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 light:border-black/5 pt-3 mt-2 flex justify-between items-center text-[10px] font-mono text-emerald-400 light:text-emerald-700">
          <span>Shielded Onboarding</span>
          <span className="font-bold">Safe Simulation</span>
        </div>
      </div>
    );
  }

  return null;
}

/* ─── Tab Button ─── */
function TabButton({ aud, isActive, onClick, index }) {
  const Icon = aud.icon;

  return (
    <button
      onClick={onClick}
      className={`aud-tab-button group relative ${isActive ? 'active' : ''}`}
    >
      {/* Active background layout indicator */}
      {isActive && (
        <motion.div
          layoutId="activeTabIndicator"
          className="absolute inset-0 bg-emerald-500/5 border border-emerald-500/15 light:bg-emerald-500/10 light:border-emerald-500/25 rounded-xl pointer-events-none"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}

      <div className="aud-tab-icon-box z-10">
        <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
      </div>

      <div className="flex-1 min-w-0 z-10">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="comp-num">{aud.num}</span>
          <span className="text-[9px] font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-gray-500 light:bg-black/5 light:border-black/5">
            {aud.tag}
          </span>
        </div>
        <p className="font-display font-bold text-sm text-gray-300 light:text-gray-800 transition-colors duration-300 group-hover:text-white light:group-hover:text-emerald-800 text-left">
          {aud.title}
        </p>
      </div>

      <div
        className={`transition-all duration-300 z-10 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
        style={{ color: 'var(--color-accent-green, #10b981)' }}
      >
        <ChevronRight size={14} />
      </div>
    </button>
  );
}

/* ─── Detail Panel ─── */
function DetailPanel({ aud }) {
  const Icon = aud.icon;

  return (
    <motion.div
      key={aud.id}
      initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="aud-detail-card"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* Large watermark number */}
      <div
        className="absolute right-8 bottom-4 font-display font-black select-none pointer-events-none leading-none text-emerald-500"
        style={{
          fontSize: 'clamp(100px, 14vw, 160px)',
          opacity: 0.03,
        }}
      >
        {aud.num}
      </div>

      {/* Panel Content (2-column layout) */}
      <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col h-full justify-between gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          {/* Left Column (Text description & Points) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Top row */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.02))',
                    borderColor: 'rgba(16,185,129,0.3)',
                    color: '#10b981',
                  }}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <span className="font-display font-black text-2xl block leading-none text-emerald-400 light:text-emerald-700">
                    {aud.stat.value}
                  </span>
                  <span className="text-gray-500 text-[9px] font-mono uppercase tracking-widest block mt-1">
                    {aud.stat.label}
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h3
                className="font-display font-bold text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)' }}
              >
                {aud.headline}
              </h3>

              {/* Description */}
              <p className="text-gray-400 light:text-gray-600 leading-relaxed mb-6 text-sm max-w-lg">
                {aud.desc}
              </p>

              {/* Points list */}
              <div className="space-y-3">
                {aud.points.map((pt, i) => (
                  <div
                    key={pt}
                    className="flex items-start gap-3"
                  >
                    <span className="shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 border bg-emerald-500/10 border-emerald-500/20 text-emerald-500 light:bg-emerald-500/10 light:text-emerald-700 light:border-emerald-500/15">
                      <CheckCircle2 size={11} />
                    </span>
                    <span className="text-gray-300 light:text-gray-700 text-sm font-medium leading-relaxed">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Visual Mockup Widget) */}
          <div className="lg:col-span-5 min-h-[220px]">
            <MockupWidget id={aud.id} />
          </div>
        </div>

        {/* CTA Action at the bottom */}
        <div className="border-t border-white/5 light:border-black/5 pt-6 mt-2">
          <button
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer"
          >
            <Sparkles size={14} />
            Start as a {aud.title.split(' ')[0]}
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function TargetAudience() {
  const [active, setActive] = useState('students');
  const [autoplay, setAutoplay] = useState(true);
  const current = audiences.find((a) => a.id === active);

  // Auto-rotate through tabs every 6s unless paused
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActive((prev) => {
        const currentIndex = audiences.findIndex((a) => a.id === prev);
        const nextIndex = (currentIndex + 1) % audiences.length;
        return audiences[nextIndex].id;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const handleTabClick = (id) => {
    setAutoplay(false);
    setActive(id);
  };

  return (
    <section
      id="target-audience"
      className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-dark"
    >
      {/* Background soft ambient radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%',
          left: '25%',
          width: '50vw',
          height: '50vw',
          maxWidth: '650px',
          maxHeight: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-2xl text-center lg:text-left">
          <div className="flex items-center gap-2.5 mb-5 justify-center lg:justify-start">
            <div className="w-5 h-px bg-emerald-500/50" />
            <p className="font-mono text-xs tracking-widest uppercase font-bold text-emerald-400">
              Structured Audience
            </p>
          </div>

          <h2
            className="font-display font-bold text-white leading-tight animate-fade-in"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.6rem)' }}
          >
            Built for every{' '}
            <span className="relative inline-block text-gradient">
              stage of life.
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-500/50" />
            </span>
          </h2>

          <p className="mt-5 text-gray-500 text-base md:text-lg leading-relaxed">
            Select your profile to see how TradeCraft fits your lifestyle and financial goals.
          </p>
        </div>

        {/* Layout: Vertical Tab list on left, Detail panel on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Tab List */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full gap-4">
            <div className="aud-sidebar-container">
              {audiences.map((aud, i) => (
                <TabButton
                  key={aud.id}
                  aud={aud}
                  isActive={active === aud.id}
                  onClick={() => handleTabClick(aud.id)}
                  index={i}
                />
              ))}
            </div>

            {/* Autoplay toggler */}
            <div className="flex items-center gap-3 px-5 py-1 justify-center lg:justify-start">
              <button
                onClick={() => setAutoplay(!autoplay)}
                className={`relative w-8 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                  autoplay
                    ? 'bg-emerald-500/30'
                    : 'bg-white/10 border border-white/5 light:bg-black/10 light:border-black/5'
                }`}
              >
                <motion.div
                  animate={{ x: autoplay ? 16 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 w-3 h-3 rounded-full bg-emerald-400 light:bg-emerald-600"
                />
              </button>
              <span className="text-gray-600 text-[10px] font-mono uppercase tracking-wider">
                {autoplay ? 'Rotation Active' : 'Rotation Paused'}
              </span>
            </div>
          </div>

          {/* Right Detail Panel */}
          <div className="lg:col-span-8 min-h-[460px] lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              <DetailPanel key={active} aud={current} />
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile slide dots indicators */}
        <div className="flex items-center gap-2 justify-center mt-8 lg:hidden">
          {audiences.map((aud) => (
            <button
              key={aud.id}
              onClick={() => handleTabClick(aud.id)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: active === aud.id ? '#10b981' : 'rgba(255,255,255,0.1)',
                transform: active === aud.id ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
