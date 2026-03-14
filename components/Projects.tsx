"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart2, FlaskConical } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.015]">
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
            // Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Impact Work</h2>
        </motion.div>

        {/* Featured project card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group relative p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-violet-500/30 transition-all duration-400 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/[0.07] rounded-full blur-3xl group-hover:bg-violet-600/[0.12] transition-all duration-700 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-500/[0.04] rounded-full blur-3xl group-hover:bg-cyan-500/[0.08] transition-all duration-700 pointer-events-none" />

          <div className="relative">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="p-2 rounded-lg bg-violet-500/15 text-violet-400">
                <BarChart2 size={18} />
              </div>
              {["A/B Testing", "Regression Analysis", "Hypothesis Testing"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Courier XP Impact Analysis
            </h3>

            <p className="text-slate-300 text-[1.0625rem] leading-relaxed mb-8 max-w-2xl">
              Led end-to-end analysis of the Courier Experience optimization A/B test at Uber.
              Applied regression modeling and hypothesis testing to quantify how UX changes
              affected courier performance, satisfaction, and operational efficiency — translating
              statistical findings into direct business outcomes.
            </p>

            {/* What was done */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: FlaskConical, label: "Experimental design & A/B test setup" },
                { icon: BarChart2, label: "Regression & statistical significance testing" },
                { icon: TrendingUp, label: "Operational impact quantification" },
                { icon: BarChart2, label: "Cross-functional stakeholder reporting" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-slate-400 text-sm"
                >
                  <Icon size={14} className="text-violet-400 flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>

            {/* Impact callout */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06]">
              <div className="p-3 rounded-xl bg-emerald-500/15 flex-shrink-0">
                <TrendingUp className="text-emerald-400" size={22} />
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 leading-none mb-0.5">
                  $9.2M
                </div>
                <div className="text-slate-400 text-sm">
                  Operational savings driven by analysis findings
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-600 text-sm text-center mt-8 font-mono"
        >
          More projects coming as I build toward AI engineering.
        </motion.p>
      </div>
    </section>
  );
}
