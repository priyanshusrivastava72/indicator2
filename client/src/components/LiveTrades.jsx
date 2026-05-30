import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, MinusCircle, TrendingUp, TrendingDown, Scale } from 'lucide-react';

const LiveTrades = () => {
  const trades = [
    {
      type: 'winning',
      title: 'Winning Trade',
      icon: <TrendingUp size={24} />,
      color: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      badge: 'Profit: +3R',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      desc: 'The market aligns with our structure and indicator. The trade hits our take-profit level mechanically, yielding a 1:3 Risk/Reward ratio.'
    },
    {
      type: 'losing',
      title: 'Losing Trade',
      icon: <TrendingDown size={24} />,
      color: 'text-red-400',
      bgGlow: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      badge: 'Loss: -1R',
      badgeColor: 'bg-red-500/20 text-red-400 border-red-500/30',
      desc: 'Yes, we take losses. But because of our strict mathematical risk framework, a loss is always capped at a maximum of 1% of the portfolio.'
    },
    {
      type: 'breakeven',
      title: 'Break-Even',
      icon: <Scale size={24} />,
      color: 'text-blue-400',
      bgGlow: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      badge: 'Result: 0R',
      badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      desc: 'The market moves in our favor but reverses. Our trailing stop rules kick in, protecting our initial capital. We live to trade another day.'
    }
  ];

  return (
    <section className="py-24 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">Complete Transparency</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Reality of Live Trading
          </h2>
          <p className="text-gray-400 text-lg">
            We don't just show you the 1000% winners. A professional system accounts for losses and break-evens to ensure long-term survival.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trades.map((trade, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 rounded-2xl border ${trade.borderColor} relative overflow-hidden group`}
            >
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] ${trade.bgGlow} transition-transform group-hover:scale-150 duration-700`} />
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-dark-200 border border-white/10 flex items-center justify-center ${trade.color}`}>
                  {trade.icon}
                </div>
                
                <div className={`px-3 py-1 rounded-full text-xs font-bold border ${trade.badgeColor}`}>
                  {trade.badge}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{trade.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                {trade.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveTrades;
