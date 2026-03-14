"use client";

import { motion } from "framer-motion";
import { BarChart2, Bot, Monitor } from "lucide-react";

const services = [
  {
    icon: BarChart2,
    title: "Data Analytics",
    description: "Dashboards, reports, and data insights for businesses.",
    color: "violet",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Adding AI features to existing products and workflows.",
    color: "cyan",
  },
  {
    icon: Monitor,
    title: "Web Development",
    description: "Clean, fast websites for small businesses.",
    color: "emerald",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:text-left"
        >
          <p className="text-violet-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            {`// Services`}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Freelance Offerings</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="group p-8 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.13] hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute -inset-4 bg-${service.color}-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`p-3 rounded-xl bg-${service.color}-500/15 text-${service.color}-400 w-fit mb-6 ring-1 ring-${service.color}-500/20`}>
                  <service.icon size={26} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-[0.9375rem]">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
