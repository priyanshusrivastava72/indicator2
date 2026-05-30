import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, RefreshCw, Layers, Users } from 'lucide-react';

const EnrollmentBenefits = () => {
  const benefits = [
    { icon: <Layers size={24} />, title: 'Full 6-Phase Course', desc: 'From basics to advanced technical analysis in a structured format.' },
    { icon: <Zap size={24} />, title: 'Smart Trading Indicator', desc: 'Proprietary signals directly on your chart. Buy/Sell/Trend visualization.' },
    { icon: <Users size={24} />, title: 'Private Community Access', desc: 'Network with serious traders and get your chart setups reviewed.' },
    { icon: <RefreshCw size={24} />, title: 'Lifetime Content Updates', desc: 'Get all future module additions and indicator optimizations for free.' },
    { icon: <Shield size={24} />, title: 'Risk Management Framework', desc: 'The exact mathematical models used to ensure capital preservation.' },
    { icon: <Check size={24} />, title: 'Completion Certificate', desc: 'Official proof of your new financial skillset upon finishing the modules.' }
  ];

  return (
    <section className="py-24 bg-dark-100 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">The Value</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Everything In Your Enrollment
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-dark-200 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollmentBenefits;
