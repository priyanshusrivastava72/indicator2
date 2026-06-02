import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, ShieldCheck, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen lg:min-h-0 flex items-center justify-center py-20 lg:py-0 lg:pt-16 bg-dark overflow-hidden">
      {/* Background Gradients & Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 xl:gap-12 items-center w-full">
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4 lg:mb-3">
            <Activity size={16} />
            <span>Structured Chart-Reading Education</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.15] mb-4 lg:mb-3">
            Your Degree Gets You A Job.<br />
            <span className="text-gradient">Learn How Markets Work. Build Financial Confidence.</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-400 mb-4 lg:mb-3 max-w-xl font-sans leading-relaxed">
            Learn market structure, financial literacy, chart-reading theory, risk management concepts, and decision-making frameworks through a structured educational curriculum.
          </p>

          {/* New Left-Column Metric HUD Grid */}
          <div className="grid grid-cols-3 gap-3 my-4 lg:my-3 max-w-lg">
            {/* HUD 1: Study hours */}
            <div className="hero-hud-card">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider leading-none">STUDY HOURS</span>
              <span className="font-display font-black text-sm text-emerald-400 light:text-emerald-700 leading-none mt-1">120+ Hrs</span>
              {/* Miniature sparkline SVG */}
              <svg className="w-full h-4 mt-2 text-emerald-500" viewBox="0 0 50 15" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0,12 Q10,12 15,7 T30,10 T40,2 T50,5" />
              </svg>
            </div>

            {/* HUD 2: Lectures */}
            <div className="hero-hud-card">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider leading-none">LECTURES</span>
              <span className="font-display font-black text-sm text-white light:text-gray-900 leading-none mt-1">45+ Lessons</span>
              {/* Mini progress bar */}
              <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-emerald-500 w-[80%]" />
              </div>
            </div>

            {/* HUD 3: Risk Rule */}
            <div className="hero-hud-card">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider leading-none">Risk Framework</span>
              <span className="font-display font-black text-sm text-emerald-400 light:text-emerald-700 leading-none mt-1">Learning System</span>
              <span className="text-[7px] font-mono text-gray-500 mt-2.5 leading-none">CORE PRINCIPLE</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 lg:gap-3">
            <button className="h-12 lg:h-11 px-8 lg:px-6 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20">
              Start Learning Now <ChevronRight size={18} />
            </button>
            <button className="h-12 lg:h-11 px-8 lg:px-6 border border-white/10 hover:bg-white/5 text-white rounded-lg font-medium transition-colors cursor-pointer">
              View Curriculum
            </button>
          </div>

          <div className="mt-8 lg:mt-5 flex items-center gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2"><TrendingUp size={16} className="text-emerald-500"/> 2,000+ Students</div>
            <div className="w-1 h-1 rounded-full bg-gray-700" />
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-500"/> Risk-First Approach</div>
          </div>
        </motion.div>

        {/* Right Visual Column (Trading Terminal Mockup) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative px-4 lg:pt-4"
        >
          {/* Floating Risk:Reward Badge */}
          <motion.div 
            animate={{ y: [4, -4, 4] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute -left-2 lg:-left-6 top-6 bg-dark-100 border border-white/10 rounded-lg p-2.5 shadow-xl flex items-center gap-2.5 z-20 light:bg-white light:border-black/5"
          >
            <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-[9px] font-bold">R:R</div>
            <div className="text-left">
              <div className="text-[8px] text-gray-500 leading-none">Risk Ratio</div>
              <div className="text-[10px] font-bold text-gray-300 light:text-gray-800 mt-0.5">1:2+ Theory</div>
            </div>
          </motion.div>

          {/* Floating Volume Feed Badge */}
          <motion.div 
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute -right-2 -bottom-3 lg:-bottom-2 bg-dark-100 border border-white/10 rounded-lg p-2.5 shadow-xl flex items-center gap-2 z-20 light:bg-white light:border-black/5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <div className="text-left font-mono">
              <span className="text-[8px] font-bold text-gray-400 light:text-gray-700">VOL: OVER AVERAGE</span>
            </div>
          </motion.div>

          <div className="glass-card rounded-2xl p-6 lg:p-4 relative shadow-2xl shadow-emerald-900/20">
            {/* Mockup Header with Live Ticker */}
            <div className="flex items-center justify-between mb-4 lg:mb-3 border-b border-white/5 pb-4 lg:pb-2.5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2">
                <div className="pulse-dot animate-pulse" />
                <span className="text-xs font-mono font-bold text-emerald-400 light:text-emerald-700">NIFTY 50 &middot; 24,150.25</span>
              </div>
            </div>

            {/* SVG Chart with BUY/SELL flags and Volume Profile */}
            <div className="h-64 lg:h-44 xl:h-52 w-full relative">
              <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                {/* Grid */}
                <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(255,255,255,0.05)" />

                {/* Volume Profile Histogram (Translucent base columns) */}
                <g opacity="0.08" stroke="none">
                  <rect x="42" y="160" width="16" height="40" fill="#ef4444" />
                  <rect x="92" y="150" width="16" height="50" fill="#10b981" />
                  <rect x="142" y="130" width="16" height="70" fill="#10b981" />
                  <rect x="192" y="120" width="16" height="80" fill="#10b981" />
                  <rect x="242" y="145" width="16" height="55" fill="#ef4444" />
                  <rect x="292" y="110" width="16" height="90" fill="#10b981" />
                  <rect x="342" y="90" width="16" height="110" fill="#10b981" />
                </g>
                
                {/* Candles */}
                <g strokeWidth="2">
                  <line x1="50" y1="120" x2="50" y2="160" stroke="#ef4444" />
                  <rect x="45" y="130" width="10" height="20" fill="#ef4444" />

                  <line x1="100" y1="140" x2="100" y2="180" stroke="#10b981" />
                  <rect x="95" y="150" width="10" height="20" fill="#10b981" />

                  <line x1="150" y1="110" x2="150" y2="150" stroke="#10b981" />
                  <rect x="145" y="115" width="10" height="30" fill="#10b981" />

                  <line x1="200" y1="80" x2="200" y2="130" stroke="#10b981" />
                  <rect x="195" y="90" width="10" height="30" fill="#10b981" />
                  
                  {/* Simulated analysis markers */}
                  <line x1="250" y1="60" x2="250" y2="100" stroke="#ef4444" strokeWidth="2" />
                  <line x1="250" y1="60" x2="250" y2="100" stroke="#ef4444" />
                  <rect x="245" y="70" width="10" height="20" fill="#ef4444" />

                  <line x1="300" y1="40" x2="300" y2="90" stroke="#10b981" />
                  <rect x="295" y="50" width="10" height="30" fill="#10b981" />

                  <line x1="350" y1="20" x2="350" y2="60" stroke="#10b981" />
                  <rect x="345" y="30" width="10" height="20" fill="#10b981" />
                </g>

                {/* Support Annotation */}
                <g transform="translate(195, 135)">
                  <rect x="-30" y="-8" width="60" height="16" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="0.8" />
                  <text x="0" y="3" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SUPPORT LEVEL</text>
                </g>

                {/* Resistance Annotation */}
                <g transform="translate(345, 60)">
                  <rect x="-30" y="-8" width="60" height="16" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="0.8" />
                  <text x="0" y="3" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RESISTANCE LEVEL</text>
                </g>

                {/* Trend line */}
                <motion.path 
                  d="M 20 180 Q 150 150 200 120 T 380 40" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Floating Study Mode Badge */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-3 lg:-right-4 top-14 bg-dark-100 border border-white/10 rounded-lg p-3 shadow-xl flex items-center gap-3 light:bg-white light:border-black/5"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Activity size={16} />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-400">Mode</div>
                <div className="text-sm font-bold text-emerald-400">CHART STUDY</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
