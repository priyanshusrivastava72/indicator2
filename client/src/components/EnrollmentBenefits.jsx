import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, RefreshCw, Layers, Users, Sparkles, Cpu } from 'lucide-react';

const EnrollmentBenefits = () => {
  const benefits = [
    { icon: <Layers size={20} />, title: 'Full 6-Phase Course', desc: 'From basics to advanced technical analysis in a structured format.' },
    { icon: <Zap size={20} />, title: 'Smart Charting Helper', desc: 'TradingView companion script to map support, resistance, and trend theory.' },
    { icon: <Users size={20} />, title: 'Private Community Access', desc: 'Network with serious students and get your chart studies reviewed.' },
    { icon: <RefreshCw size={20} />, title: 'Lifetime Content Updates', desc: 'Get all future module additions and charting helper updates for free.' },
    { icon: <Shield size={20} />, title: 'Risk Management Framework', desc: 'The exact mathematical models used to ensure capital preservation.' },
    { icon: <Check size={20} />, title: 'Completion Certificate', desc: 'Official proof of your new financial skillset upon finishing the modules.' }
  ];

  return (
    <section id="benefits-section" className="py-28 bg-dark-100 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold uppercase mb-4">
            <Sparkles size={12} /> The Value
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
            Everything In Your Enrollment
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
          
          {/* Left Column: Benefit Cards List */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-5 rounded-2xl flex gap-4 items-start border border-white/5 bg-dark-200/50 hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-dark-100 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{benefit.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-xs">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Holographic Digital Access Key Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-[340px]">
              
              {/* Glowing card border backdrops */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
              
              {/* Digital Pass Outer Shell */}
              <div className="relative rounded-3xl p-6 border border-white/10 bg-dark-200 shadow-2xl overflow-hidden flex flex-col justify-between h-[420px] text-left">
                {/* Holographic scanning line */}
                <motion.div 
                  animate={{ y: [0, 360, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                  className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40 z-20 pointer-events-none"
                />

                {/* Ambient glow inside */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Top Section */}
                <div className="flex justify-between items-start z-10">
                  <div className="flex items-center gap-2">
                    <Cpu className="text-emerald-400 animate-pulse" size={20} />
                    <span className="font-mono text-[9px] text-gray-500 font-bold tracking-widest">TRADECRAFT ENGINE</span>
                  </div>
                  <span className="text-[8px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    LIFETIME PASS
                  </span>
                </div>

                {/* Holographic Circle element */}
                <div className="my-auto relative flex items-center justify-center h-44 z-10">
                  <svg className="w-36 h-36 text-emerald-500/10 absolute animate-spin" style={{ animationDuration: '20s' }} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" fill="none" />
                    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6,2" fill="none" />
                  </svg>
                  <svg className="w-24 h-24 text-emerald-500/20 absolute animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="4,6" fill="none" />
                    <polygon points="50,15 80,75 20,75" stroke="currentColor" strokeWidth="0.8" fill="none" />
                  </svg>
                  
                  {/* Glowing core symbol */}
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <span className="font-display font-black text-xl text-emerald-400">TC</span>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/5 pt-4 z-10">
                  <div className="flex justify-between items-end font-mono">
                    <div>
                      <span className="text-[8px] text-gray-600 uppercase tracking-widest block">PASS CREDENTIALS</span>
                      <span className="text-[10px] text-white font-bold tracking-wider mt-1 block">STUDENT PORTAL KEY</span>
                      <span className="text-[7px] text-gray-500 font-bold block mt-0.5">STATUS: APPROVED & SEEDING</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[8px] text-gray-600 block">ENROLL_ID</span>
                      <span className="text-[10px] text-emerald-400 font-bold block mt-1">#TC-84920</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EnrollmentBenefits;
