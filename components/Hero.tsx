"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* ── Gradient background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Violet blob – top-left */}
        <div className="blob absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-violet-600/[0.18] blur-[140px]" />
        {/* Cyan blob – bottom-right */}
        <div className="blob-delay absolute -bottom-48 -right-32 w-[550px] h-[550px] rounded-full bg-cyan-500/[0.14] blur-[120px]" />
        {/* Indigo center glow */}
        <div className="blob-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-800/[0.15] blur-[120px]" />
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid" />
        {/* Radial fade at edges */}
        <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_50%] from-transparent to-[#05050f]/60" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Open to opportunities · Hyderabad, India
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.45, 0.15, 1] }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none mb-5"
        >
          Prashant Singh
        </motion.h1>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.21, 0.45, 0.15, 1] }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl font-semibold flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span className="text-slate-300">Data Analyst</span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              →
            </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Engineer
            </span>
          </p>
        </motion.div>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Ex-Uber · Demandbase · Python · SQL · ML
          <br />
          <span className="text-slate-500 text-sm">3+ years turning messy data into decisions that ship</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:prashantsinghofficial07@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <a
            href="https://github.com/prashantjan26"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/prashantjan26"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
