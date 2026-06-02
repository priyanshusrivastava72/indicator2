import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Crosshair, Play, Check } from 'lucide-react';

const steps = [
  {
    id: 'apply',
    num: '01',
    icon: Activity,
    title: 'Study Chart Structure',
    label: 'INTEGRATE',
    desc: 'Configure standard TradingView charting tools with support, resistance, and volume profiles to organize your workspace.',
  },
  {
    id: 'confirm',
    num: '02',
    icon: ShieldCheck,
    title: 'Observe Market Context',
    label: 'CONFLUENCE',
    desc: 'Patience is key. Study multiple timeframes to wait for alignment between volume trends and market structure levels.',
  },
  {
    id: 'risk',
    num: '03',
    icon: Crosshair,
    title: 'Learn Risk Concepts',
    label: 'PRESERVE',
    desc: 'Calculate position size based on strict risk rules. Determine appropriate stop-loss placement to keep potential downside under 1% of total hypothetical capital.',
  },
  {
    id: 'practice',
    num: '04',
    icon: Play,
    title: 'Practice & Journal',
    desc: 'Log your simulated charts and notes in your study spreadsheet. Audit the theoretical outcomes to build discipline and pattern recognition.',
  },
];

// Left side visual screens based on active step
function TerminalVisual({ stepId }) {
  if (stepId === 'apply') {
    return (
      <div className="w-full h-full flex flex-col justify-between font-mono text-xs text-gray-400 p-6">
        <div>
          <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-white/5 pb-2">
            <span>CHART_WORKSPACE_V1</span>
            <span className="text-emerald-500">READY</span>
          </div>
          <div className="mt-4 space-y-1 text-[10px]">
            <p className="text-emerald-400">&gt; Loading Chart Setup...</p>
            <p className="text-gray-500">&gt; Analyzing historical ranges...</p>
            <p className="text-gray-500">&gt; Drawing key levels...</p>
          </div>
        </div>

        {/* Mini simulated chart overlay */}
        <div className="relative h-28 w-full border border-white/5 bg-dark-200/50 rounded-lg overflow-hidden flex items-end">
          <div className="absolute inset-0 bg-emerald-500/[0.02]" />
          <svg className="w-full h-full text-emerald-500/20" viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d="M 0 35 L 20 30 L 40 32 L 60 15 L 80 18 L 100 10" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="absolute top-2 left-2 text-[8px] text-emerald-500/70 border border-emerald-500/20 px-1 rounded">
            + CHART ANALYSIS READY
          </div>
        </div>

        <div className="text-[9px] text-gray-600">
          // STATUS: SUPPORT & RESISTANCE MAPPED
        </div>
      </div>
    );
  }

  if (stepId === 'confirm') {
    return (
      <div className="w-full h-full flex flex-col justify-between font-mono text-xs text-gray-400 p-6">
        <div>
          <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-white/5 pb-2">
            <span>CONFLUENCE_STUDY</span>
            <span className="text-emerald-400 animate-pulse">ANALYZING</span>
          </div>
          <div className="mt-4 space-y-1.5 text-[10px]">
            <div className="flex justify-between"><span>M15 STRUCT:</span><span className="text-emerald-400">🟢 BULLISH</span></div>
            <div className="flex justify-between"><span>H1 STRUCT:</span><span className="text-emerald-400">🟢 BULLISH</span></div>
            <div className="flex justify-between"><span>H4 STRUCT:</span><span className="text-emerald-400">🟢 BULLISH</span></div>
          </div>
        </div>

        {/* Confluence approval mockup */}
        <div className="my-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex flex-col items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/20">
          <span className="text-[9px] text-emerald-500 font-bold tracking-widest uppercase">CONFLUENCE APPROVED</span>
          <span className="text-lg font-black text-white tracking-widest flex items-center gap-1 animate-pulse">
            ▲ BULLISH STRUCT
          </span>
          <span className="text-[8px] text-gray-400">SUPPORT ZONE AT 24,120</span>
        </div>

        <div className="text-[9px] text-gray-600">
          // STATE: READY TO APPLY RISK RULES
        </div>
      </div>
    );
  }

  if (stepId === 'risk') {
    return (
      <div className="w-full h-full flex flex-col justify-between font-mono text-xs text-gray-400 p-6">
        <div>
          <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-white/5 pb-2">
            <span>POSITION_CALCULATOR</span>
            <span className="text-emerald-500">LOADED</span>
          </div>
          
          <div className="mt-4 space-y-2 text-[10px]">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>Account Size:</span>
              <span className="text-white">₹1,00,000</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>Hypothetical Risk (1%):</span>
              <span className="text-emerald-400 font-bold">₹1,000</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>Required SL:</span>
              <span className="text-red-400">50 Points</span>
            </div>
          </div>
        </div>

        {/* Computed size bubble */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex justify-between items-center">
          <div>
            <span className="text-[8px] text-gray-500 block">HYPOTHETICAL SIZE</span>
            <span className="text-sm font-bold text-white">20 Units</span>
          </div>
          <div className="text-right">
            <span className="text-[8px] text-gray-500 block">RISK TO REWARD</span>
            <span className="text-sm font-bold text-emerald-400">1 : 3.2</span>
          </div>
        </div>

        <div className="text-[9px] text-gray-600">
          // FORMULA: RISK_CAPITAL / SL_POINTS = HYPO_SIZE
        </div>
      </div>
    );
  }

  if (stepId === 'practice') {
    return (
      <div className="w-full h-full flex flex-col justify-between font-mono text-xs text-gray-400 p-6">
        <div>
          <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-white/5 pb-2">
            <span>SIMULATION_LOGGER</span>
            <span className="text-emerald-500">SUCCESS</span>
          </div>
          
          <div className="mt-4 space-y-1 text-[10px]">
            <p className="text-gray-500">&gt; Simulating entry in log...</p>
            <p className="text-emerald-400">&gt; Demo Log Success. Level: 24,120</p>
            <p className="text-gray-500">&gt; Saving study metrics to journal...</p>
          </div>
        </div>

        {/* Order ticket receipt */}
        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Check size={12} />
            </div>
            <div>
              <span className="text-[9px] text-gray-500 block">SIMULATED NIFTY JOURNAL</span>
              <span className="text-xs font-bold text-white">20 Units @ 24,120</span>
            </div>
          </div>
          <span className="text-[9px] font-bold text-emerald-400">LOGGED</span>
        </div>

        <div className="text-[9px] text-gray-600">
          // JOURNALING COMPLETED
        </div>
      </div>
    );
  }

  return null;
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState('apply');

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-dark"
    >
      {/* Background soft ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.012]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

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
              The Process
            </p>
            <div className="w-5 h-px bg-emerald-500/50" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            How The Learning Framework Works
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            A simple, mechanical 4-step learning process. No guesswork, no hesitation.
          </p>
        </div>

        {/* Split screen dynamic dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          
          {/* Left Side: Dynamic HUD Terminal Screen */}
          <div className="lg:col-span-5 h-[340px] flex items-center justify-center">
            <div
              className="w-full h-full rounded-2xl border overflow-hidden relative flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--color-terminal-bg, #0a0a0a)',
                borderColor: 'rgba(255,255,255,0.05)',
                boxShadow: '0 25px 60px -30px rgba(16,185,129,0.12), inset 0 1px 0 rgba(255,255,255,0.03)',
              }}
            >
              {/* Top border glowing stripe */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-emerald-500/40" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-full"
                >
                  <TerminalVisual stepId={activeStep} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Step Timeline Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group cursor-pointer rounded-2xl border transition-all duration-300 relative overflow-hidden ${isActive ? 'active-step-card' : ''}`}
                  style={{
                    backgroundColor: isActive ? 'rgba(16,185,129,0.04)' : 'rgba(10,10,10,0.3)',
                    borderColor: isActive ? 'rgba(16,185,129,0.25)' : 'rgba(255,255,255,0.04)',
                  }}
                >
                  {/* Left edge colored stripe */}
                  {isActive && (
                    <motion.div
                      layoutId="howItWorksActiveIndicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500"
                    />
                  )}

                  <div className="p-5 flex items-start gap-4">
                    {/* Step Icon */}
                    <div
                      className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-colors duration-300"
                      style={{
                        backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.02)',
                        borderColor: isActive ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.06)',
                        color: isActive ? '#10b981' : '#555',
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Step label / num */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[9px] font-bold text-gray-500">{step.num}</span>
                        <span
                          className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: isActive ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.02)',
                            color: isActive ? '#34d399' : '#555',
                          }}
                        >
                          {step.label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-sm font-bold transition-colors duration-300"
                        style={{ color: isActive ? '#fff' : '#888' }}
                      >
                        {step.title}
                      </h3>

                      {/* Description - expanded on active */}
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 text-xs leading-relaxed">
                              {step.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
