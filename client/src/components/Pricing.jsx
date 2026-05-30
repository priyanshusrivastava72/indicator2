import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Invest In Your Financial Intelligence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Basic Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Course Only</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-white">₹4,999</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">Perfect for those who just want to learn the framework.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={16} className="text-emerald-500" /> Full 6-Phase Course</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={16} className="text-emerald-500" /> Risk Management Framework</li>
              <li className="flex items-center gap-3 text-gray-500 text-sm"><X size={16} /> No Indicator Access</li>
              <li className="flex items-center gap-3 text-gray-500 text-sm"><X size={16} /> No Private Community</li>
            </ul>
            
            <button className="w-full h-12 rounded-lg border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Pro Tier (Featured) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-3xl relative border-emerald-500/50 bg-gradient-to-b from-emerald-500/10 to-transparent shadow-[0_0_50px_rgba(16,185,129,0.1)] h-[105%] flex flex-col z-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/30">
              Most Popular
            </div>
            
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">The Complete System</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-gray-500 line-through text-lg">₹19,999</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-5xl font-bold text-white">₹9,999</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">Everything you need to execute consistently.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-200 text-sm font-medium"><Check size={18} className="text-emerald-500" /> Everything in Basic</li>
              <li className="flex items-center gap-3 text-white text-sm font-bold"><Check size={18} className="text-emerald-500" /> Smart Trading Indicator</li>
              <li className="flex items-center gap-3 text-white text-sm font-bold"><Check size={18} className="text-emerald-500" /> Private Community Access</li>
              <li className="flex items-center gap-3 text-white text-sm font-bold"><Check size={18} className="text-emerald-500" /> Lifetime Content Updates</li>
            </ul>
            
            <button className="w-full h-14 rounded-lg bg-emerald-500 text-white font-bold text-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
              Enroll Now
            </button>
          </motion.div>

          {/* Elite Tier */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-2">1-on-1 Mentorship</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-white">₹24,999</span>
            </div>
            <p className="text-gray-400 text-sm mb-8">Personalized guidance to accelerate your journey.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={16} className="text-emerald-500" /> Everything in Pro</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={16} className="text-emerald-500" /> 4x 1-on-1 Mentorship Calls</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={16} className="text-emerald-500" /> Personal Trade Reviews</li>
              <li className="flex items-center gap-3 text-gray-300 text-sm"><Check size={16} className="text-emerald-500" /> Direct WhatsApp Access</li>
            </ul>
            
            <button className="w-full h-12 rounded-lg border border-white/10 text-white font-bold hover:bg-white/5 transition-colors">
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
