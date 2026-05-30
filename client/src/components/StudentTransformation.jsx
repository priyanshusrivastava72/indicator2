import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const StudentTransformation = () => {
  const before = [
    'Jumping between different strategies daily',
    'Panicking when a trade goes slightly red',
    'Taking profits too early, letting losers run',
    'Staring at 1-minute charts for 8 hours a day'
  ];

  const after = [
    'Executing one proven framework consistently',
    'Accepting pre-defined risk before entering',
    'Letting winners hit targets mathematically',
    'Analyzing for 60 mins, letting alerts do the work'
  ];

  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">The Transformation</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            From Confused To Consistent
          </h2>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-8 relative">
          
          {/* Arrow pointing from before to after */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-dark border border-white/10 items-center justify-center z-10 text-gray-500">
            <ArrowRight size={24} />
          </div>

          {/* Before */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 glass-card p-8 rounded-2xl border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent"
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">The Confused Beginner</h3>
            <ul className="space-y-6">
              {before.map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-gray-400">
                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 glass-card p-8 rounded-2xl border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
            
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 border-b border-emerald-500/20 pb-4 relative z-10">The Structured Trader</h3>
            <ul className="space-y-6 relative z-10">
              {after.map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-gray-200">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StudentTransformation;
