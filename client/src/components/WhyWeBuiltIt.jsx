import React from 'react';
import { motion } from 'framer-motion';
import { FilterX, Search, MessageSquareX, HeartPulse } from 'lucide-react';

const WhyWeBuiltIt = () => {
  const points = [
    { icon: <FilterX size={20} />, title: 'Too much noise', desc: 'YouTube is filled with contradictory strategies.' },
    { icon: <Search size={20} />, title: 'Too many indicators', desc: 'Charts that look like a mess of tangled wires.' },
    { icon: <MessageSquareX size={20} />, title: 'Confusing advice', desc: 'Gurus telling you what to trade, not how to analyze.' },
    { icon: <HeartPulse size={20} />, title: 'Emotional trading', desc: 'Making decisions based on fear and FOMO.' }
  ];

  return (
    <section className="py-24 bg-dark-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Storytelling */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">The Origin</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Why We Developed This Script
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                When we started analyzing markets, we fell into the same traps everyone else does. We bought courses that promised easy returns and delivered nothing but basic, generic indicators.
              </p>
              <p>
                We realized the industry wasn't designed to build your skills. It was designed to keep you dependent on alert groups and signal services.
              </p>
              <p className="text-white font-medium border-l-2 border-emerald-500 pl-6 py-2 bg-gradient-to-r from-emerald-500/10 to-transparent">
                We built this tool to strip away the noise. To give you objective, structural data instead of emotional opinions.
              </p>
            </div>
          </motion.div>

          {/* Right: The Problems Solved */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {points.map((point, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border-white/5 bg-dark-200/30">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-sm text-gray-500">{point.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyWeBuiltIt;
