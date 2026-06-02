import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Aryan R.',
    role: 'Software Engineer',
    quote: "The risk management lessons changed how I evaluate uncertainty.",
    type: 'video',
    badge: 'Risk Moat Applied'
  },
  {
    name: 'Sneha M.',
    role: 'College Student',
    quote: "I finally developed a repeatable learning process for analyzing charts.",
    type: 'text',
    badge: 'Verified Consistency'
  },
  {
    name: 'Karan P.',
    role: 'Business Owner',
    quote: "The course helped me understand market structure much more clearly.",
    type: 'text',
    badge: 'Consistent Study Habits'
  }
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="py-28 bg-dark relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold uppercase mb-4">
            Real Results
          </span>
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
              className="glass-card p-8 rounded-2xl flex flex-col relative group border border-white/5 bg-dark-100/40"
            >
              {/* Top Row Badge */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex text-emerald-500 gap-0.5">
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                  <Star fill="currentColor" size={12} />
                </div>
                <span className="text-[8px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  {test.badge}
                </span>
              </div>

              {test.type === 'video' && (
                <div className="w-full h-44 bg-dark-200 rounded-xl mb-6 relative overflow-hidden flex flex-col justify-between p-4 cursor-pointer group-hover:border-emerald-500/50 transition-colors border border-white/10">
                  {/* Holographic scanner backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent opacity-30 pointer-events-none" />
                  
                  {/* Video header details */}
                  <div className="flex justify-between items-center z-10 font-mono text-[8px] text-gray-500">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      STUDENT_INTERVIEW.MP4
                    </span>
                    <span>02:14</span>
                  </div>

                  {/* Play Core */}
                  <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 mx-auto relative z-10 group-hover:scale-105 transition-transform duration-300">
                    <Play fill="currentColor" size={16} className="ml-0.5" />
                  </div>

                  {/* Simulated Waveform at base */}
                  <div className="flex items-end gap-0.5 h-6 z-10 opacity-70">
                    <div className="w-1 h-3 bg-emerald-500/60 rounded-full" />
                    <div className="w-1 h-4 bg-emerald-500/80 rounded-full" />
                    <div className="w-1 h-2 bg-emerald-500/60 rounded-full" />
                    <div className="w-1 h-5 bg-emerald-500 rounded-full" />
                    <div className="w-1 h-1 bg-emerald-500/40 rounded-full" />
                    <div className="w-1 h-4 bg-emerald-500/80 rounded-full" />
                    <div className="w-1 h-3 bg-emerald-500/60 rounded-full" />
                    <div className="w-1 h-5 bg-emerald-500 rounded-full" />
                    <div className="w-1 h-2 bg-emerald-500/60 rounded-full" />
                    <div className="w-1 h-6 bg-emerald-500 rounded-full" />
                    <div className="w-1 h-3 bg-emerald-500/60 rounded-full" />
                    <div className="w-1 h-4 bg-emerald-500/80 rounded-full" />
                    <div className="w-1 h-1 bg-emerald-500/40 rounded-full" />
                    <div className="w-1 h-5 bg-emerald-500 rounded-full" />
                    <div className="w-1 h-2 bg-emerald-500/60 rounded-full" />
                    <div className="w-1 h-4 bg-emerald-500/80 rounded-full" />
                    <div className="w-1 h-3 bg-emerald-500/60 rounded-full" />
                  </div>
                </div>
              )}
              
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-sm">"{test.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-4">
                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono font-bold text-emerald-400 text-xs shadow-inner">
                  {test.name.split(' ')[0][0]}
                </div>
                <div>
                  <div className="text-white font-bold text-xs">{test.name}</div>
                  <div className="text-gray-500 text-[10px]">{test.role}</div>
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
          className="max-w-4xl mx-auto glass-card p-6 md:p-12 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 flex flex-col md:flex-row items-center gap-8 justify-between shadow-lg"
        >
          <div className="flex-1 text-left">
            <div className="flex items-center gap-3 text-emerald-400 mb-4">
              <MessageCircle size={20} />
              <h3 className="text-lg font-bold text-white">Exclusive Student Community</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Join hundreds of serious students asking questions, sharing case studies, and improving their chart-reading skills together every single day.</p>
          </div>
          
          <div className="flex -space-x-3 shrink-0">
            <div className="w-10 h-10 rounded-full border-2 border-dark-100 bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg relative z-50">
              AR
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-dark-100 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg relative z-40">
              SM
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-dark-100 bg-gradient-to-br from-emerald-700 to-teal-700 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg relative z-30">
              KP
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-dark-100 bg-gradient-to-br from-emerald-800 to-teal-800 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg relative z-20">
              DK
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-dark-100 bg-gradient-to-br from-emerald-900 to-teal-900 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg relative z-10">
              VJ
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-dark-100 bg-emerald-500 flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg relative z-0">
              +2k
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
