import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Crosshair, Play } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      icon: <Activity size={24} />,
      title: 'Apply Indicator',
      desc: 'Add the proprietary TradeCraft indicator directly to your TradingView chart. It instantly overlays trend zones, key levels, and momentum data.',
      color: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'border-emerald-500/30'
    },
    {
      num: '02',
      icon: <ShieldCheck size={24} />,
      title: 'Wait For Confirmation',
      desc: 'Patience is an edge. Wait for the algorithm to flash a clear Buy or Sell signal that aligns with the higher timeframe trend zone.',
      color: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'border-blue-500/30'
    },
    {
      num: '03',
      icon: <Crosshair size={24} />,
      title: 'Manage Risk',
      desc: 'Use our mathematical risk framework. Never risk more than 1% per trade. Define your stop-loss and take-profit targets mechanically.',
      color: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'border-purple-500/30'
    },
    {
      num: '04',
      icon: <Play size={24} />,
      title: 'Execute Trade',
      desc: 'Click buy or sell with zero hesitation. Let the math and the probabilities play out without emotional interference.',
      color: 'from-orange-500/20 to-orange-600/5',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <section className="py-24 bg-dark-100 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow">The Process</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            How The Indicator Works
          </h2>
          <p className="text-gray-400 text-lg">
            A simple, mechanical 4-step execution process. No guesswork, no hesitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-0.5 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-orange-500/20" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className={`w-24 h-24 mx-auto bg-dark-200 border ${step.borderColor} rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-xl overflow-hidden group`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                <div className="text-white relative z-10">
                  {step.icon}
                </div>
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dark border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400">
                  {step.num}
                </div>
              </div>
              
              <div className="text-center glass-card p-6 rounded-2xl h-[calc(100%-8rem)]">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
