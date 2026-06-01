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
    headline: 'Build compounding wealth before your first salary.',
    desc: 'Most students wait until they get a job to start investing. Early compounders build a solid edge while others are still looking for internships.',
    points: [
      'Learn in just 1 hour per day alongside college',
      'Start with small capital (₹5,000–₹10,000)',
      'Build high-value market skills early',
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
    desc: 'A job secures your present. Structured trading builds your future wealth. This framework requires only 45–60 minutes of chart analysis per day.',
    points: [
      'Pre-market setup in under 60 minutes',
      'No constant chart watching required',
      'Generate a secondary income engine',
    ],
    stat: { value: '45 MIN', label: 'CHART WINDOW' },
  },
  {
    id: 'investors',
    icon: LineChart,
    num: '03',
    tag: 'ACTIVE TRADERS',
    title: 'Existing Investors',
    headline: 'Transition from passive to active compounding.',
    desc: 'If you already hold mutual funds or long-term stocks, active pricing skill is your leverage. Know when to enter, scale, and exit with institutional rules.',
    points: [
      'Understand the pure price action behind charts',
      'Accurate entry & exit system rules',
      'Complement passive portfolios with active returns',
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
    desc: 'Trading is not a casino — it is a process. If you can follow a checklist, manage risk parameters, and remain disciplined, you can trade successfully.',
    points: [
      'Starts from absolute zero market fundamentals',
      'Step-by-step TradingView setup checklist',
      'Risk-free simulator trading before real capital',
    ],
    stat: { value: '0 → 1', label: 'CURRICULUM FLOW' },
  },
];

/* ─── Tab Button ─── */
function TabButton({ aud, isActive, onClick, index }) {
  const Icon = aud.icon;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative w-full text-left"
    >
      <motion.div
        animate={{
          backgroundColor: isActive ? 'rgba(16,185,129,0.06)' : 'transparent',
          borderColor: isActive ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.03)',
        }}
        transition={{ duration: 0.25 }}
        style={{
          borderLeft: `2.5px solid ${isActive ? '#10b981' : 'rgba(255,255,255,0.05)'}`,
        }}
        className={`relative flex items-center gap-4 px-5 py-4 rounded-r-2xl border-y border-r transition-all duration-300 overflow-hidden ${isActive ? 'active-tab-div' : ''}`}
      >
        {/* Active background layout transition */}
        {isActive && (
          <motion.div
            layoutId="activeTabBackground"
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-emerald-500/10 to-transparent"
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          />
        )}

        <div
          className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300"
          style={{
            backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.02)',
            borderColor: isActive ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)',
            color: isActive ? '#10b981' : '#555',
          }}
        >
          <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} />
        </div>

        <div className="relative z-10 flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="font-mono text-[9px] font-bold tracking-widest"
              style={{ color: isActive ? '#10b981' : '#444' }}
            >
              {aud.num}
            </span>
            <span
              className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded"
              style={{
                backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.02)',
                color: isActive ? '#34d399' : '#555',
              }}
            >
              {aud.tag}
            </span>
          </div>
          <p
            className="font-display font-bold text-sm truncate transition-colors duration-300"
            style={{ color: isActive ? 'var(--color-tab-text-active, #fff)' : 'var(--color-tab-text-inactive, #666)' }}
          >
            {aud.title}
          </p>
        </div>

        <div
          className="transition-all duration-300"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'translateX(0)' : 'translateX(-6px)',
            color: '#10b981',
          }}
        >
          <ChevronRight size={14} />
        </div>
      </motion.div>
    </motion.button>
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
      className="relative h-full"
    >
      <div
        className="relative h-full rounded-3xl overflow-hidden"
        style={{
          background: 'var(--color-detail-panel-bg, linear-gradient(160deg, rgba(14,14,14,0.95), rgba(8,8,8,0.98)))',
          border: '1px solid rgba(16,185,129,0.15)',
          boxShadow: '0 30px 80px -25px rgba(16,185,129,0.1), inset 0 1px 0 rgba(255,255,255,0.03)',
        }}
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

        {/* Panel Content */}
        <div className="relative z-10 p-8 md:p-10 lg:p-12 flex flex-col h-full justify-between">
          <div>
            {/* Top row */}
            <div className="flex items-center justify-between mb-8">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.02))',
                  borderColor: 'rgba(16,185,129,0.3)',
                  color: '#10b981',
                }}
              >
                <Icon size={24} />
              </div>

              {/* Metric/Stat Bubble */}
              <div className="text-right">
                <span className="font-display font-black text-3xl block leading-none text-emerald-400">
                  {aud.stat.value}
                </span>
                <span className="text-gray-500 text-[9px] font-mono uppercase tracking-widest">
                  {aud.stat.label}
                </span>
              </div>
            </div>

            {/* Headline */}
            <h3
              className="font-display font-bold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)' }}
            >
              {aud.headline}
            </h3>

            {/* Divider line */}
            <div
              className="h-px mb-6"
              style={{
                background: 'linear-gradient(90deg, rgba(16,185,129,0.4), transparent)',
              }}
            />

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base max-w-lg">
              {aud.desc}
            </p>

            {/* Points list */}
            <div className="space-y-3.5 mb-8">
              {aud.points.map((pt, i) => (
                <div
                  key={pt}
                  className="flex items-start gap-3"
                >
                  <span
                    className="shrink-0 w-5.5 h-5.5 rounded-lg flex items-center justify-center mt-0.5 border"
                    style={{
                      backgroundColor: 'rgba(16,185,129,0.1)',
                      borderColor: 'rgba(16,185,129,0.2)',
                      color: '#10b981',
                    }}
                  >
                    <CheckCircle2 size={12} />
                  </span>
                  <span className="text-gray-300 text-sm font-medium leading-relaxed">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Action */}
          <div className="pt-4">
            <button
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <Sparkles size={14} />
              Start as a {aud.title.split(' ')[0]}
              <ArrowRight size={14} />
            </button>
          </div>
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
            className="font-display font-bold text-white leading-tight"
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
          <div className="lg:col-span-4 flex flex-col gap-2">
            {audiences.map((aud, i) => (
              <TabButton
                key={aud.id}
                aud={aud}
                isActive={active === aud.id}
                onClick={() => handleTabClick(aud.id)}
                index={i}
              />
            ))}

            {/* Autoplay toggler */}
            <div className="mt-4 flex items-center gap-3 px-5">
              <button
                onClick={() => setAutoplay(!autoplay)}
                className="relative w-8 h-4 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: autoplay ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.06)',
                }}
              >
                <motion.div
                  animate={{ x: autoplay ? 16 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute top-0.5 w-3 h-3 rounded-full bg-emerald-400"
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
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
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
