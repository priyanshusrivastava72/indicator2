import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[400px] bg-emerald-500/10 blur-[150px] pointer-events-none" />
      
      {/* Left Floating HUD Tag */}
      <div className="absolute left-6 lg:left-12 top-1/4 -translate-y-1/2 hidden xl:flex floating-cta-hud z-20">
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <div className="text-left font-mono">
          <p className="text-[8px] text-gray-500 uppercase tracking-widest leading-none">COMMUNITY</p>
          <p className="text-[11px] font-bold text-gray-300 light:text-gray-700 mt-1">2,000+ Students</p>
        </div>
      </div>

      {/* Right Floating HUD Tag */}
      <div className="absolute right-6 lg:right-12 bottom-1/4 translate-y-1/2 hidden xl:flex floating-cta-hud z-20">
        <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="text-left font-mono">
          <p className="text-[8px] text-gray-500 uppercase tracking-widest leading-none">REFUND POLICY</p>
          <p className="text-[11px] font-bold text-gray-300 light:text-gray-700 mt-1">30-Day Refund</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-20 rounded-3xl border-emerald-500/20 shadow-[0_0_80px_rgba(16,185,129,0.1)] relative overflow-hidden"
        >
          {/* subtle grid background inside card */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '30px 30px' }} />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Build Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Knowledge That Lasts.</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Financial education is a lifelong skill that supports informed decision-making. Start learning through a structured educational framework.
            </p>
            
            <button className="h-14 px-10 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold text-lg transition-colors flex items-center gap-2 mx-auto shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-1 duration-300 cursor-pointer">
              Start Learning <ArrowRight size={20} />
            </button>
            
            <p className="mt-6 text-sm text-gray-500 font-mono">
              Backed by our 30-day refund policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
