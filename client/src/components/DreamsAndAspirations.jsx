import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Plane, Shield, Sparkles, TrendingUp } from 'lucide-react';

const DreamsAndAspirations = () => {
  const dreams = [
    { icon: <Car size={24} />, title: 'Dream Car', desc: 'Stop looking at price tags.' },
    { icon: <Home size={24} />, title: 'Own Home', desc: 'Build equity on your terms.' },
    { icon: <Plane size={24} />, title: 'Travel Freedom', desc: 'Work from anywhere.' },
    { icon: <Shield size={24} />, title: 'Family Security', desc: 'Protect what matters most.' },
    { icon: <Sparkles size={24} />, title: 'Better Lifestyle', desc: 'Upgrade your daily standard.' },
    { icon: <TrendingUp size={24} />, title: 'Financial Confidence', desc: 'No more money anxiety.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-dark-100 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            What Are You Building Toward?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Trading isn't about charts and indicators. It's about buying back your time and funding the life you want to live.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {dreams.map((dream, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel p-8 rounded-2xl group cursor-pointer transition-colors hover:bg-dark-200/50 hover:border-emerald-500/30"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-300">
                {dream.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{dream.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{dream.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DreamsAndAspirations;
