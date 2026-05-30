import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const rows = [
  {
    topic: 'Income Growth',
    traditional: 'Fixed annual increment of 8–12%',
    growth: 'Multiple income streams, no ceiling',
  },
  {
    topic: 'Market Knowledge',
    traditional: 'Zero — money sits in FD or savings',
    growth: 'Understands markets, inflation, and assets',
  },
  {
    topic: 'Financial Skill',
    traditional: 'One professional skill (job role)',
    growth: 'Career skill + financial skill',
  },
  {
    topic: 'Life Decisions',
    traditional: 'Wait for appraisal to make big purchases',
    growth: 'Capital can be deployed at any time',
  },
  {
    topic: 'Retirement Plan',
    traditional: 'EPF + hope for the best',
    growth: 'Active portfolio growing alongside career',
  },
  {
    topic: 'Response to Market Crash',
    traditional: 'Panic or do nothing',
    growth: 'Sees opportunities others are afraid of',
  },
];

export default function CareerVsEducation() {
  return (
    <section
      className="py-28 relative overflow-hidden border-t border-white/5"
      style={{ backgroundColor: '#07080a' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-sm tracking-widest uppercase mb-4"
            style={{ color: '#10b981' }}
          >
            Why Financial Skills Matter
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
          >
            Career Only vs.{' '}
            <span style={{ color: '#10b981' }}>Career + Financial Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto"
          >
            A strong career remains essential. Financial education simply helps you
            make smarter decisions alongside it.
          </motion.p>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Table Header */}
          <div
            className="grid grid-cols-3 text-sm font-mono uppercase tracking-widest"
            style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="px-6 py-4 text-gray-600">Area</div>
            <div
              className="px-6 py-4 text-center"
              style={{
                color: '#ef4444',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(239,68,68,0.04)',
              }}
            >
              Career Only
            </div>
            <div
              className="px-6 py-4 text-center"
              style={{
                color: '#10b981',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(16,185,129,0.05)',
              }}
            >
              Career + Finance
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.topic}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid grid-cols-3 group"
              style={{
                borderBottom:
                  i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              {/* Topic */}
              <div
                className="px-6 py-5 flex items-center"
                style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}
              >
                <span className="text-sm font-semibold text-gray-300">{row.topic}</span>
              </div>

              {/* Traditional */}
              <div
                className="px-6 py-5 flex items-start gap-3 group-hover:bg-red-500/5 transition-colors duration-200"
                style={{
                  borderRight: '1px solid rgba(255,255,255,0.05)',
                  background: 'rgba(239,68,68,0.02)',
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(239,68,68,0.15)', color: '#ef4444' }}
                >
                  <X size={12} />
                </div>
                <span className="text-sm text-gray-500 leading-relaxed">{row.traditional}</span>
              </div>

              {/* Growth */}
              <div
                className="px-6 py-5 flex items-start gap-3 group-hover:bg-emerald-500/5 transition-colors duration-200"
                style={{ background: 'rgba(16,185,129,0.02)' }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}
                >
                  <Check size={12} />
                </div>
                <span className="text-sm text-gray-300 leading-relaxed">{row.growth}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom callout */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto italic"
        >
          "A strong career remains important. Financial education helps you make better
          decisions alongside it — not instead of it."
        </motion.p>

      </div>
    </section>
  );
}
