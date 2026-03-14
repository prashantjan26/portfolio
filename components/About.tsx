"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years in Data" },
  { value: "20M+", label: "Weekly Sessions Analyzed" },
  { value: "24%", label: "Retention Improvement" },
  { value: "$9.2M", label: "Operational Savings" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Journey</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-14 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-slate-300 leading-[1.85] text-[1.0625rem]"
          >
            <p>
              I'm a data professional who started by building things — and evolved into someone
              obsessed with understanding what happens inside them.
            </p>
            <p>
              After shipping web features and writing my first SQL queries, I found my calling
              in data. Specifically, the kind that moves fast and hides hard truths. At{" "}
              <span className="text-white font-semibold">Uber</span>, I worked at a scale most
              analysts never touch: 20M+ weekly sessions, retention patterns across college
              cohorts, root-cause investigations spanning 100+ cities.
            </p>
            <p>
              Now at{" "}
              <span className="text-white font-semibold">Demandbase</span>, that foundation is
              being applied to behavioral signals and bot detection — work that sits squarely at
              the intersection of data analysis and machine intelligence.
            </p>
            <p>
              The arrow in my headline (
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Data Analyst → AI Engineer
              </span>
              ) isn't just a title update. It's a deliberate path: deepening ML knowledge,
              understanding systems end-to-end, and eventually building AI products that solve
              real problems.
            </p>
            <p className="text-slate-400">
              Long-term goal? Entrepreneurship. Building things that matter.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 min-w-[260px]"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-violet-500/30 hover:bg-violet-500/[0.05] transition-all duration-300 group"
              >
                <div className="text-2xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
