import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Activity, Clock, ShieldAlert } from 'lucide-react';

const IndicatorShowcase = () => {
  const [activeTab, setActiveTab] = useState('buy');

  const tabs = [
    { id: 'buy', label: 'Buy Signals', icon: <Activity size={18} /> },
    { id: 'sell', label: 'Sell Signals', icon: <ShieldAlert size={18} /> },
    { id: 'trend', label: 'Trend Zones', icon: <LineChart size={18} /> },
    { id: 'mtf', label: 'Multi-Timeframe', icon: <Clock size={18} /> }
  ];

  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">Proprietary Technology</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Smart Trading Indicator
          </h2>
          <p className="text-gray-400 text-lg">
            Remove the guesswork. Our algorithm analyzes price action, volume, and momentum to give you objective execution triggers.
          </p>
        </div>

        <div className="glass-panel border border-white/10 rounded-3xl overflow-hidden max-w-6xl mx-auto shadow-[0_0_50px_rgba(16,185,129,0.05)]">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-white/10 bg-dark-200/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-8 py-5 font-medium text-sm transition-colors whitespace-nowrap relative ${
                  activeTab === tab.id ? 'text-emerald-400' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab.icon}
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="indicator-tab"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Chart Content Area */}
          <div className="p-8 lg:p-12 relative min-h-[500px] flex items-center justify-center bg-dark">
            {/* Grid Background */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center"
              >
                {activeTab === 'buy' && (
                  <div className="w-full max-w-3xl">
                    <ChartMockup type="buy" />
                    <div className="mt-8 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">High-Probability Buy Entries</h3>
                      <p className="text-gray-400">The indicator waits for structural shifts and momentum confirmation before flashing a buy signal.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'sell' && (
                  <div className="w-full max-w-3xl">
                    <ChartMockup type="sell" />
                    <div className="mt-8 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Precise Sell Triggers</h3>
                      <p className="text-gray-400">Protect profits by exiting when momentum shifts, not when it's too late.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'trend' && (
                  <div className="w-full max-w-3xl">
                    <ChartMockup type="trend" />
                    <div className="mt-8 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Clear Trend Visualization</h3>
                      <p className="text-gray-400">Green background for uptrends. Red for downtrends. Never trade against the primary flow.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'mtf' && (
                  <div className="w-full max-w-3xl">
                    <ChartMockup type="mtf" />
                    <div className="mt-8 text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Multi-Timeframe Alignment</h3>
                      <p className="text-gray-400">See higher timeframe trends directly on your execution chart.</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simplified SVG Chart Component for Visuals
const ChartMockup = ({ type }) => {
  return (
    <div className="w-full h-[300px] bg-dark-100 border border-white/5 rounded-xl relative overflow-hidden flex items-end px-12 pb-12 pt-20">
      
      {/* Background Zones */}
      {type === 'trend' && (
        <>
          <div className="absolute left-0 top-0 w-1/2 h-full bg-red-500/5" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-emerald-500/5" />
        </>
      )}

      {type === 'mtf' && (
        <div className="absolute top-4 right-4 bg-dark-200 border border-white/10 rounded-lg p-3 flex gap-4 text-xs font-mono">
          <div className="flex flex-col"><span className="text-gray-500">1H</span><span className="text-emerald-400">BULL</span></div>
          <div className="flex flex-col"><span className="text-gray-500">4H</span><span className="text-emerald-400">BULL</span></div>
          <div className="flex flex-col"><span className="text-gray-500">1D</span><span className="text-red-400">BEAR</span></div>
        </div>
      )}

      <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none" className="overflow-visible">
        {/* Simple line representing price action */}
        <motion.path 
          d="M 0 150 Q 100 120 200 160 T 400 80 T 600 40"
          fill="none" 
          stroke={type === 'sell' ? '#ef4444' : '#10b981'} 
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Dynamic Signals based on tab */}
        {type === 'buy' && (
          <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}>
            <polygon points="400,100 390,115 410,115" fill="#10b981" />
            <text x="400" y="135" fill="#10b981" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">BUY</text>
          </motion.g>
        )}

        {type === 'sell' && (
          <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}>
            <polygon points="200,140 190,125 210,125" fill="#ef4444" />
            <text x="200" y="115" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">SELL</text>
          </motion.g>
        )}
      </svg>
    </div>
  );
};

export default IndicatorShowcase;
