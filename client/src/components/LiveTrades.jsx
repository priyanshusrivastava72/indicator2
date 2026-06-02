import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Scale, Check, Shield } from 'lucide-react';

const tradesData = [
  {
    id: 'TC-284',
    type: 'TREND STRUCTURE EXAMPLE',
    ticker: 'NIFTY / INR',
    direction: 'STUDY: TREND THEORY',
    outcome: 'SUPPORT CONFIRMED',
    outcomeType: 'win',
    impact: 'Support Rebound',
    rule: 'Structure Aligned',
    desc: 'This case study shows how price historical support aligns with volume expansion. Understanding support zones helps identify consolidation structures for theory and backtesting.',
    metrics: { entry: '24,120', exit: '24,270', stop: '24,070', size: 'Support Rebound' },
    chartData: [35, 30, 45, 55, 52, 75, 80],
  },
  {
    id: 'TC-285',
    type: 'MARKET BEHAVIOR EXAMPLE',
    ticker: 'NIFTY / INR',
    direction: 'STUDY: RISK THEORY',
    outcome: 'INVALID BREAKOUT',
    outcomeType: 'loss',
    impact: 'Downside Protection',
    rule: '1% Risk Limit Rule',
    desc: 'Analyzing failed breakouts is crucial. If the price slips below the support level, a strict stop loss limits the hypothetical loss to 1%, protecting simulator capital.',
    metrics: { entry: '24,180', exit: '24,130', stop: '24,130', size: 'Downside Cut' },
    chartData: [60, 55, 58, 48, 40, 35, 35],
  },
  {
    id: 'TC-286',
    type: 'RISK MANAGEMENT EXAMPLE',
    ticker: 'NIFTY / INR',
    direction: 'STUDY: TRAILING THEORY',
    outcome: 'BREAK-EVEN EXIT',
    outcomeType: 'breakeven',
    impact: 'Capital Protected',
    rule: 'Risk Shield Setup',
    desc: 'In this simulation, price moves in our favor but reverses. Trailing stop-loss concepts protect the initial capital by shifting the exit point to the entry price.',
    metrics: { entry: '24,150', exit: '24,150', stop: '24,150', size: 'Risk Shielded' },
    chartData: [45, 48, 55, 62, 50, 45, 45],
  },
];

export default function LiveTrades() {
  const [selectedTrade, setSelectedTrade] = useState(tradesData[0]);

  return (
    <section
      id="live-trades"
      className="py-24 md:py-32 relative overflow-hidden border-t bg-dark border-white/5"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.02) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Controls */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center gap-2.5 mb-5 justify-center">
            <div className="w-5 h-px bg-emerald-500/50" />
            <p className="font-mono text-xs tracking-widest uppercase font-bold text-emerald-400">
              Complete Transparency
            </p>
            <div className="w-5 h-px bg-emerald-500/50" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Market Case Studies & Risk Theory
          </h2>
          
          <p className="text-sm md:text-base text-gray-500 leading-relaxed mt-4 max-w-2xl">
            We focus on structure, not alerts. Building a professional skill relies on understanding risk limits and studying multiple market scenarios.
          </p>
        </div>

        {/* Dynamic Ledger Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Side: Ledger Audit Table */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Account Stats HUD */}
            <div className="grid grid-cols-3 gap-3 border bg-dark-100 border-white/5 p-4 rounded-2xl font-mono text-[10px]">
              <div>
                <span className="text-gray-500 block">CONFLUENCE</span>
                <span className="text-emerald-400 font-bold text-sm mt-1 block">Level Aligned</span>
              </div>
              <div className="border-l border-white/5 pl-3">
                <span className="text-gray-500 block">SCENARIO ANALYSIS</span>
                <span className="text-white font-bold text-sm mt-1 block">Educational Demonstration</span>
              </div>
              <div className="border-l border-white/5 pl-3">
                <span className="text-gray-500 block">MAX RISK RULE</span>
                <span className="text-red-400 font-bold text-sm mt-1 block">Study Scenario</span>
              </div>
            </div>

            {/* List Table Rows */}
            <div className="space-y-3 flex-1 mt-4">
              {tradesData.map((trade) => {
                const isSelected = selectedTrade.id === trade.id;
                
                // Color mapping
                const colorTheme = 
                  trade.outcomeType === 'win' ? '#10b981' : 
                  trade.outcomeType === 'loss' ? '#ef4444' : '#6b7280';

                return (
                  <div
                    key={trade.id}
                    onClick={() => setSelectedTrade(trade)}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'bg-white/5 border-emerald-500/30 shadow-[0_8px_24px_rgba(16,185,129,0.05)]'
                        : 'bg-dark-100/40 border-white/5 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Left icon status */}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 text-xs transition-colors"
                        style={{
                          backgroundColor: isSelected ? `${colorTheme}15` : 'rgba(255,255,255,0.01)',
                          borderColor: isSelected ? `${colorTheme}30` : 'rgba(255,255,255,0.05)',
                          color: colorTheme,
                        }}
                      >
                        {trade.outcomeType === 'win' ? <TrendingUp size={14} /> :
                         trade.outcomeType === 'loss' ? <TrendingDown size={14} /> : <Scale size={14} />}
                      </div>

                      {/* Details text */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] text-gray-500">{trade.id}</span>
                          <span className="font-mono text-[9px] text-gray-400 font-bold">{trade.ticker}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white mt-0.5 truncate">
                          {trade.type}
                        </h4>
                      </div>
                    </div>

                    {/* Outcome Badging */}
                    <div className="text-right shrink-0">
                      <span
                        className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border block"
                        style={{
                          backgroundColor: `${colorTheme}15`,
                          borderColor: `${colorTheme}30`,
                          color: colorTheme,
                        }}
                      >
                        {trade.outcome}
                      </span>
                      <span className="text-[9px] font-mono text-gray-500 block mt-1">{trade.impact}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest pt-2">
              // STUDIED UNDER TRADECRAFT RISK FRAMEWORK RULES
            </p>
          </div>

          {/* Right Side: Interactive Detail Log Card */}
          <div className="lg:col-span-5 h-[340px] lg:h-auto min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTrade.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full rounded-2xl border overflow-hidden flex flex-col justify-between p-6 relative bg-dark-100 border-white/5 shadow-xl"
              >
                {/* Colored top indicator strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    backgroundColor: 
                      selectedTrade.outcomeType === 'win' ? '#10b981' : 
                      selectedTrade.outcomeType === 'loss' ? '#ef4444' : '#6b7280',
                  }}
                />

                {/* Card Title Header */}
                <div>
                  <div className="flex items-center justify-between text-[9px] font-mono text-gray-500 border-b border-white/5 pb-2">
                    <span>LEDGER_RECORD_V2</span>
                    <span className="font-bold">{selectedTrade.id}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-4 flex items-center gap-2">
                    {selectedTrade.type}
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400">
                      {selectedTrade.rule}
                    </span>
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed mt-2.5">
                    {selectedTrade.desc}
                  </p>
                </div>

                {/* Computed stats detail matrix */}
                <div className="grid grid-cols-2 gap-2 font-mono text-[9px] p-3.5 rounded-xl border border-white/5 bg-white/[0.01] my-4">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-gray-500">SUPPORT LEVEL:</span>
                    <span className="text-white font-bold">{selectedTrade.metrics.entry}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-gray-500">RISK FLOOR:</span>
                    <span className="text-red-400 font-bold">{selectedTrade.metrics.stop}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">RESISTANCE:</span>
                    <span className="text-emerald-400 font-bold">{selectedTrade.metrics.exit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">STUDY FOCUS:</span>
                    <span className="text-white font-bold">{selectedTrade.metrics.size}</span>
                  </div>
                </div>

                {/* SVG Mini Trendline */}
                <div className="h-16 w-full relative flex items-end">
                  <svg width="100%" height="100%" viewBox="0 0 200 50" preserveAspectRatio="none" className="overflow-visible">
                    <path
                      d={`M 0 ${50 - selectedTrade.chartData[0]} 
                          L 30 ${50 - selectedTrade.chartData[1]} 
                          L 60 ${50 - selectedTrade.chartData[2]} 
                          L 90 ${50 - selectedTrade.chartData[3]} 
                          L 120 ${50 - selectedTrade.chartData[4]} 
                          L 150 ${50 - selectedTrade.chartData[5]} 
                          L 200 ${50 - selectedTrade.chartData[6]}`}
                      fill="none"
                      stroke={
                        selectedTrade.outcomeType === 'win' ? '#10b981' : 
                        selectedTrade.outcomeType === 'loss' ? '#ef4444' : '#6b7280'
                      }
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
