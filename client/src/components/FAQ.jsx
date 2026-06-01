import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Is this course beginner-friendly?',
      a: 'Absolutely. We start from the absolute basics, including how to set up your charts and understand market terminology, before moving into the advanced strategies.'
    },
    {
      q: 'How much time do I need per day?',
      a: 'The system is designed for people with jobs or studies. You only need about 45-60 minutes a day to analyze the charts and execute your plan.'
    },
    {
      q: 'Do I need a paid TradingView account?',
      a: 'No, our proprietary indicator is built specifically for TradingView. A free TradingView account is completely sufficient to use all our tools.'
    },
    {
      q: 'How long is my access valid?',
      a: 'You get lifetime access to the course materials, including all future updates and additions to the curriculum.'
    },
    {
      q: 'Will I get indicator updates?',
      a: 'Yes. Any future optimizations or updates to the indicator logic are provided to all Pro and Elite students at no additional cost.'
    },
    {
      q: 'What is the refund policy?',
      a: 'We offer a 30-day action-based money-back guarantee. If you complete the course, apply the system, and do not find value, we will refund your investment.'
    }
  ];

  return (
    <section id="faq-section" className="py-28 bg-dark-100 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold uppercase mb-4">
            <Sparkles size={12} /> Support Desk
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Common Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Support HUD Console */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="glass-card p-6 rounded-3xl border border-white/5 bg-dark-200/50 flex flex-col justify-between h-full relative overflow-hidden shadow-xl min-h-[300px] text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[9px] text-gray-500 font-bold tracking-widest">SYSTEM STATUS</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">Need Help?</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  Our core support desk and community moderation team is online to answer curriculum and chart setup questions.
                </p>

                <div className="space-y-3 font-mono text-[9px] text-gray-400">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span>AVERAGE RESPONSE TIME</span>
                    <span className="text-emerald-400 font-bold">12 MIN</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span>SYSTEM RESOLUTION</span>
                    <span className="text-emerald-400 font-bold">99.8%</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span>OFFICIAL CHANNEL</span>
                    <span className="text-emerald-400 font-bold">#SUPPORT-DESK</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 mt-6">
                <button className="w-full py-3 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer">
                  Open Support Ticket
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
                >
                  <span className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'}`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-90 text-emerald-500' : 'text-gray-500 group-hover:text-emerald-400'}`}>
                    {openIndex === index ? <X size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6">
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
