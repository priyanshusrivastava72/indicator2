import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { BookOpen, Activity, ShieldCheck, Users } from 'lucide-react';

const EcosystemPillars = () => {
  const pillars = [
    {
      icon: <BookOpen size={32} />,
      title: 'Structured Course',
      desc: 'Step-by-step curriculum taking you from zero to market competent.',
      color: 'from-blue-500/20 to-blue-600/5'
    },
    {
      icon: <Activity size={32} />,
      title: 'Smart Indicator',
      desc: 'Proprietary TradingView algorithm that filters market noise.',
      color: 'from-emerald-500/20 to-emerald-600/5'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Risk Framework',
      desc: 'Mathematical capital preservation rules to keep you in the game.',
      color: 'from-purple-500/20 to-purple-600/5'
    },
    {
      icon: <Users size={32} />,
      title: 'Private Community',
      desc: 'Network with serious traders. No spam, just pure execution.',
      color: 'from-orange-500/20 to-orange-600/5'
    }
  ];

  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow">The Complete Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Everything You Need To Succeed. <br />
            <span className="text-gray-500">In One Place.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <Card3D key={index} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card3D = ({ pillar, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`glass-card p-8 rounded-2xl h-full flex flex-col items-start cursor-crosshair border border-white/10 bg-gradient-to-br ${pillar.color} transition-colors hover:border-white/30 relative overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="w-14 h-14 rounded-xl bg-dark-200 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
          {pillar.icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 relative z-10">{pillar.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed relative z-10">{pillar.desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default EcosystemPillars;
