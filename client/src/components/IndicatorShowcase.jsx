import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Activity, Clock, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';

const tabs = [
  { id: 'buy', label: 'Support Zones', icon: <Activity size={16} /> },
  { id: 'sell', label: 'Resistance Zones', icon: <ShieldAlert size={16} /> },
  { id: 'trend', label: 'Trend Channels', icon: <LineChart size={16} /> },
  { id: 'mtf', label: 'Multi-Timeframe Structure', icon: <Clock size={16} /> },
];

export default function IndicatorShowcase() {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <section
      id="indicator"
      className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-dark"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.03) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Grid overlay */}
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 justify-center mb-5"
          >
            <div className="w-5 h-px bg-emerald-500/50" />
            <p className="font-mono text-xs tracking-widest uppercase font-bold text-emerald-400">
              Educational Technology
            </p>
            <div className="w-5 h-px bg-emerald-500/50" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Market Structure Visualizer
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            This educational visualization tool helps students study market structure, trend development, support zones, resistance zones, and volume behavior.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left panel: Info & Tabs selection */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="font-mono text-[9px] tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                MODULE 5 CHART THEORY
              </span>
              <h3 className="text-2xl font-bold text-white mt-4">
                Study market structure interactively.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-2 mb-6">
                Learn how to map support, resistance, and volume profiles directly onto standard TradingView charts.
              </p>

              {/* Custom Vertical Tabs list */}
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full relative flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left ${activeTab === tab.id ? 'active-showcase-btn' : ''}`}
                    style={{
                      backgroundColor: activeTab === tab.id ? 'rgba(16,185,129,0.06)' : 'rgba(10,10,10,0.4)',
                      borderColor: activeTab === tab.id ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.04)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="transition-colors duration-300"
                        style={{ color: activeTab === tab.id ? '#10b981' : '#666' }}
                      >
                        {tab.icon}
                      </div>
                      <span
                        className="text-xs font-bold transition-colors duration-300"
                        style={{ color: activeTab === tab.id ? 'var(--color-tab-text-active, #fff)' : 'var(--color-tab-text-inactive, #666)' }}
                      >
                        {tab.label}
                      </span>
                    </div>

                    <ChevronRight
                      size={14}
                      className="transition-all"
                      style={{
                        color: activeTab === tab.id ? '#10b981' : '#444',
                        transform: activeTab === tab.id ? 'translateX(2px)' : 'none',
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Micro details panel bottom */}
            <div className="mt-8 pt-6 border-t border-white/5 font-mono text-[9px] text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>CHART STUDY V2.4 CONFLUENCE MODE ACTIVATED</span>
            </div>
          </div>

          {/* Right panel: Live Terminal Mockup */}
          <div className="lg:col-span-8">
            <div
              className="rounded-3xl border overflow-hidden h-full flex flex-col justify-between"
              style={{
                backgroundColor: 'var(--color-terminal-bg, rgba(8,8,8,0.95))',
                borderColor: 'rgba(255,255,255,0.05)',
                boxShadow: '0 30px 70px -30px rgba(16,185,129,0.1)',
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-dark-100/50">
                <div className="flex items-center gap-4">
                  {/* Lights */}
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>

                  {/* Pair code */}
                  <span className="font-mono text-[10px] text-gray-400 font-bold bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    NIFTY 50 &middot; 5M &middot; TRADINGVIEW
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/60" />
                  <span>FEED: LIVE</span>
                </div>
              </div>

              {/* Graphic Display Area */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative overflow-hidden bg-dark">
                
                {/* Simulated Chart grid pattern */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.02]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex-1 flex flex-col justify-between relative z-10"
                  >
                    {/* Simulated Candlestick Chart */}
                    <div className="h-[220px] w-full relative flex items-end">
                      <ChartMockup type={activeTab} />
                    </div>

                    {/* Explanatory description below the chart */}
                    <div className="mt-8 border-t border-white/5 pt-6">
                      {activeTab === 'buy' && (
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest uppercase">
                            SUPPORT ZONE MAPPING
                          </span>
                          <h4 className="text-lg font-bold text-white mt-1">
                            Support Level Identification
                          </h4>
                          <p className="text-gray-500 text-xs leading-relaxed mt-1">
                            The tool identifies key historical support zones where buying interest has historically emerged, helping students study potential consolidation areas.
                          </p>
                        </div>
                      )}

                      {activeTab === 'sell' && (
                        <div>
                          <span className="text-[10px] font-mono text-red-400 font-bold tracking-widest uppercase">
                            RESISTANCE ZONE MAPPING
                          </span>
                          <h4 className="text-lg font-bold text-white mt-1">
                            Resistance Level Identification
                          </h4>
                          <p className="text-gray-500 text-xs leading-relaxed mt-1">
                            The tool identifies key historical resistance zones where selling pressure has historically emerged, helping students study potential reversal points.
                          </p>
                        </div>
                      )}

                      {activeTab === 'trend' && (
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest uppercase">
                            TREND CHANNEL ANALYSIS
                          </span>
                          <h4 className="text-lg font-bold text-white mt-1">
                            Trend Channel Mapping
                          </h4>
                          <p className="text-gray-500 text-xs leading-relaxed mt-1">
                            Dynamic background color channels (Green for uptrends, Red for downtrends) help visualize the primary trend direction for backtesting and study purposes.
                          </p>
                        </div>
                      )}

                      {activeTab === 'mtf' && (
                        <div>
                          <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-widest uppercase">
                            MULTI-TIMEFRAME STRUCTURE
                          </span>
                          <h4 className="text-lg font-bold text-white mt-1">
                            Multi-Timeframe Theory
                          </h4>
                          <p className="text-gray-500 text-xs leading-relaxed mt-1">
                            Displays higher timeframe (15m, 1h, 4h, 1D) structures on your study chart, helping you visualize market trend alignment without switching tabs.
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Highly Polished Simulated Candlestick Mockup ─── */
function ChartMockup({ type }) {
  // Coordinates and configurations for different tabs
  // Each candle has: index, type ('bull' or 'bear'), bodyTop, bodyBottom, wickTop, wickBottom
  const candles = [
    { index: 1, type: 'bear', bt: 110, bb: 130, wt: 95, wb: 140 },
    { index: 2, type: 'bear', bt: 125, bb: 145, wt: 115, wb: 155 },
    { index: 3, type: 'bull', bt: 130, bb: 140, wt: 120, wb: 150 },
    { index: 4, type: 'bear', bt: 135, bb: 160, wt: 125, wb: 170 },
    { index: 5, type: 'bull', bt: 120, bb: 155, wt: 110, wb: 160 },
    { index: 6, type: 'bull', bt: 90, bb: 125, wt: 80, wb: 135 },
    { index: 7, type: 'bull', bt: 70, bb: 95, wt: 60, wb: 105 },
    { index: 8, type: 'bear', bt: 80, bb: 90, wt: 75, wb: 100 },
    { index: 9, type: 'bull', bt: 50, bb: 80, wt: 40, wb: 90 },
    { index: 10, type: 'bull', bt: 30, bb: 55, wt: 20, wb: 65 },
  ];

  return (
    <div className="relative w-full h-[220px] flex items-end">
      
      {/* Background Ribbon zone for Trend visualization */}
      {type === 'trend' && (
        <div className="absolute inset-0 flex">
          <div className="w-[50%] h-full bg-red-500/[0.03] border-r border-dashed border-red-500/10 relative">
            <span className="absolute bottom-2 left-2 text-[8px] font-mono text-red-500/50">DOWNTREND ZONE</span>
          </div>
          <div className="w-[50%] h-full bg-emerald-500/[0.04] relative">
            <span className="absolute bottom-2 left-2 text-[8px] font-mono text-emerald-500/50">UPTREND ZONE</span>
          </div>
        </div>
      )}

      {/* Multi-Timeframe Alignment HUD */}
      {type === 'mtf' && (
        <div className="absolute top-2 right-2 bg-dark-300 border border-white/5 rounded-xl p-3 flex gap-3 text-[9px] font-mono shadow-md z-20">
          <div className="flex flex-col">
            <span className="text-gray-500">M15</span>
            <span className="text-emerald-400 font-bold mt-0.5 flex items-center gap-0.5">🟢 BULL</span>
          </div>
          <div className="w-px h-6 bg-white/5" />
          <div className="flex flex-col">
            <span className="text-gray-500">H1</span>
            <span className="text-emerald-400 font-bold mt-0.5 flex items-center gap-0.5">🟢 BULL</span>
          </div>
          <div className="w-px h-6 bg-white/5" />
          <div className="flex flex-col">
            <span className="text-gray-500">H4</span>
            <span className="text-red-400 font-bold mt-0.5 flex items-center gap-0.5">🔴 BEAR</span>
          </div>
        </div>
      )}

      {/* Grid Coordinates Lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-b border-white/5 pb-1">
        <div className="w-full border-t border-white/[0.02]" />
        <div className="w-full border-t border-white/[0.02]" />
        <div className="w-full border-t border-white/[0.02]" />
      </div>

      <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none" className="overflow-visible select-none pointer-events-none">
        
        {/* Price grid labels */}
        <text x="590" y="30" fill="rgba(255,255,255,0.15)" fontSize="8" fontFamily="monospace" textAnchor="end">24,300.00</text>
        <text x="590" y="90" fill="rgba(255,255,255,0.15)" fontSize="8" fontFamily="monospace" textAnchor="end">24,150.00</text>
        <text x="590" y="150" fill="rgba(255,255,255,0.15)" fontSize="8" fontFamily="monospace" textAnchor="end">24,000.00</text>

        {/* EMA indicator line */}
        <motion.path
          d="M 10 135 L 70 145 L 130 150 L 190 148 L 250 140 L 310 100 L 370 85 L 430 75 L 490 60 L 550 40"
          fill="none"
          stroke="rgba(16,185,129,0.3)"
          strokeWidth="1.5"
          strokeDasharray="2,2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Candlesticks loop */}
        {candles.map((candle) => {
          const isGreen = candle.type === 'bull';
          const x = 30 + (candle.index - 1) * 55;
          const bodyWidth = 16;
          const wickX = x + bodyWidth / 2;

          return (
            <g key={candle.index}>
              {/* Wick */}
              <line
                x1={wickX}
                y1={candle.wt}
                x2={wickX}
                y2={candle.wb}
                stroke={isGreen ? '#10b981' : '#ef4444'}
                strokeWidth="1.2"
              />
              {/* Body */}
              <rect
                x={x}
                y={candle.bt}
                width={bodyWidth}
                height={Math.max(4, candle.bb - candle.bt)}
                fill={isGreen ? '#10b981' : '#ef4444'}
                rx="1"
              />
            </g>
          );
        })}

        {/* BUY Trigger Event HUD Overlay */}
        {type === 'buy' && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Dashed Buy parameters */}
            <line x1="305" y1="100" x2="550" y2="100" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            <text x="315" y="94" fill="#10b981" fontSize="7" fontFamily="monospace" fontWeight="bold">SUPPORT LEVEL: 24,120</text>

            <line x1="305" y1="140" x2="550" y2="140" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" opacity="0.4" />
            <text x="315" y="134" fill="#ef4444" fontSize="7" fontFamily="monospace" fontWeight="bold">RISK FLOOR: 23,980</text>

            {/* Glowing Buy Bubble */}
            <circle cx="305" cy="100" r="14" fill="#10b981" opacity="0.15" />
            <polygon points="305,94 300,103 310,103" fill="#10b981" />
            <rect x="285" y="112" width="40" height="12" fill="#10b981" rx="2" />
            <text x="305" y="120" fill="#ffffff" fontSize="7" fontWeight="black" fontFamily="monospace" textAnchor="middle">SUPPORT</text>
          </motion.g>
        )}

        {/* SELL Trigger Event HUD Overlay */}
        {type === 'sell' && (
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Dashed Sell parameters */}
            <line x1="470" y1="60" x2="580" y2="60" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            <text x="480" y="54" fill="#ef4444" fontSize="7" fontFamily="monospace" fontWeight="bold">RESISTANCE LEVEL: 24,240</text>

            {/* Glowing Sell Bubble */}
            <circle cx="470" cy="60" r="14" fill="#ef4444" opacity="0.15" />
            <polygon points="470,66 465,57 475,57" fill="#ef4444" />
            <rect x="445" y="24" width="50" height="12" fill="#ef4444" rx="2" />
            <text x="470" y="32" fill="#ffffff" fontSize="7" fontWeight="black" fontFamily="monospace" textAnchor="middle">RESISTANCE</text>
          </motion.g>
        )}
      </svg>
    </div>
  );
}
