import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, MessageCircle } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Aryan R.',
      role: 'Software Engineer',
      quote: "The risk management framework alone paid for the course in my first week. Finally, a system that focuses on capital protection.",
      type: 'video'
    },
    {
      name: 'Sneha M.',
      role: 'College Student',
      quote: "I've bought three other courses before this. They all felt like scams. This is the first time I've learned a repeatable process.",
      type: 'text'
    },
    {
      name: 'Karan P.',
      role: 'Business Owner',
      quote: "No fluff, no flashy cars, just pure market mechanics. I went from losing money consistently to being profitable for 3 months straight.",
      type: 'text'
    }
  ];

  return (
    <section id="social-proof" className="py-24 bg-dark-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow">Real Results</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Don't Just Take Our Word For It
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col relative group"
            >
              {test.type === 'video' && (
                <div className="w-full h-40 bg-dark-200 rounded-lg mb-6 relative overflow-hidden flex items-center justify-center cursor-pointer group-hover:border-emerald-500/50 transition-colors border border-white/10">
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                    <Play fill="currentColor" size={20} className="ml-1" />
                  </div>
                </div>
              )}
              
              <div className="flex text-emerald-500 mb-4 gap-1">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
              
              <p className="text-gray-300 mb-8 flex-grow leading-relaxed">"{test.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-dark-200 border border-white/10 flex items-center justify-center font-bold text-white">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{test.name}</div>
                  <div className="text-gray-500 text-xs">{test.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card p-6 md:p-12 rounded-2xl border-emerald-500/20 bg-emerald-500/5 flex flex-col md:flex-row items-center gap-8 justify-between"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3 text-emerald-400 mb-4">
              <MessageCircle size={24} />
              <h3 className="text-xl font-bold text-white">Exclusive Private Community</h3>
            </div>
            <p className="text-gray-400">Join hundreds of serious traders posting their setups, asking questions, and improving together every single day.</p>
          </div>
          
          <div className="flex -space-x-4">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className={`w-12 h-12 rounded-full border-2 border-dark-100 bg-dark-200 flex items-center justify-center text-xs font-bold text-gray-400 shadow-lg relative z-[${10-i}]`}>
                User
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-dark-100 bg-emerald-500 flex items-center justify-center text-xs font-bold text-white shadow-lg relative z-0">
              +2k
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
