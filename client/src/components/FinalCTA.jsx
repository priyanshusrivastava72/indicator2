import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-dark">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[400px] bg-emerald-500/10 blur-[150px] pointer-events-none" />
      
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
              Five Years From Now You'll Wish You <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Started Today.</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              The best investment is in skills that stay with you for life. Stop guessing and start executing with precision.
            </p>
            
            <button className="h-14 px-10 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold text-lg transition-colors flex items-center gap-2 mx-auto shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:-translate-y-1 duration-300">
              Join The Program <ArrowRight size={20} />
            </button>
            
            <p className="mt-6 text-sm text-gray-500">
              Backed by our 30-day action-based guarantee.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
