import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

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
    <section id="faq-section" className="py-24 bg-dark-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Common Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
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
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'}`}>
                  {faq.q}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-90 text-emerald-500' : 'text-gray-500 group-hover:text-emerald-400'}`}>
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
                      <p className="text-gray-400 leading-relaxed">
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
    </section>
  );
};

export default FAQ;
