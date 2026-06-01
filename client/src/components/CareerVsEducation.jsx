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
      id="career-vs-education"
      className="py-28 relative overflow-hidden border-t border-white/5 bg-dark"
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
            className="font-mono text-sm tracking-widest uppercase mb-4 text-emerald-500"
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
            <span className="text-emerald-500">Career + Financial Education</span>
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
          className="overflow-x-auto pb-4 scrollbar-thin"
        >
          <div className="comp-table-wrapper max-w-5xl mx-auto rounded-3xl overflow-hidden min-w-[700px] lg:min-w-0">
            {/* Table Header */}
            <div className="grid grid-cols-3 comp-table-header">
              <div className="comp-header-cell comp-header-cell-topic">
                <span>Comparison Area</span>
              </div>
              <div className="comp-header-cell comp-header-cell-traditional">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-red-500/10 text-red-400 border border-red-500/20 light:bg-red-500/10 light:text-red-700 light:border-red-500/15 mb-2">
                  Traditional Path
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                  Career Only
                </span>
              </div>
              <div className="comp-header-cell comp-header-cell-growth">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 light:bg-emerald-500/10 light:text-emerald-700 light:border-emerald-500/15 mb-2">
                  Accelerated Growth
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  Career + Finance
                </span>
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
                className="grid grid-cols-3 comp-row group"
              >
                {/* Topic */}
                <div className="comp-cell-topic">
                  <span className="comp-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-sm font-semibold tracking-wide">{row.topic}</span>
                </div>

                {/* Traditional */}
                <div className="comp-cell-traditional">
                  <div className="comp-icon-box comp-icon-box-red">
                    <X size={13} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm leading-relaxed">{row.traditional}</span>
                </div>

                {/* Growth */}
                <div className="comp-cell-growth">
                  <div className="comp-icon-box comp-icon-box-green">
                    <Check size={13} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm leading-relaxed">{row.growth}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom tagline callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-gray-400 light:bg-black/5 light:border-black/5 light:text-gray-600">
            💡 A strong career remains essential. Financial education helps you make better decisions alongside it.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
