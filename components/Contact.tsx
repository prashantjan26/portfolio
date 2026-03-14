"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    display: "prashantsinghofficial07@gmail.com",
    href: "mailto:prashantsinghofficial07@gmail.com",
    colorClass: "text-violet-400",
    bgClass: "bg-violet-500/10",
    borderClass: "border-violet-500/20",
  },
  {
    icon: Github,
    label: "GitHub",
    display: "github.com/prashantjan26",
    href: "https://github.com/prashantjan26",
    colorClass: "text-slate-300",
    bgClass: "bg-white/[0.06]",
    borderClass: "border-white/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    display: "linkedin.com/in/prashantjan26",
    href: "https://linkedin.com/in/prashantjan26",
    colorClass: "text-cyan-400",
    bgClass: "bg-cyan-500/10",
    borderClass: "border-cyan-500/20",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white/[0.015]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center"
        >
          <p className="text-violet-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            {`// Contact`}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A data challenge, an AI project, or just a conversation worth having — I&apos;m up for it.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 space-y-3"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.14] hover:bg-white/[0.06] transition-all duration-200 group"
            >
              <div className={`p-3 rounded-xl border ${link.bgClass} ${link.borderClass}`}>
                <link.icon className={link.colorClass} size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-500 text-[11px] font-mono font-semibold tracking-wider uppercase mb-0.5">
                  {link.label}
                </p>
                <p className="text-white font-medium text-sm truncate">{link.display}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
