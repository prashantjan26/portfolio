"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  isEducation?: boolean;
  accent: string;
  highlights: string[];
};

const timeline: Experience[] = [
  {
    company: "Demandbase",
    role: "Data Analyst",
    period: "May 2025 – Present",
    location: "Hyderabad, India",
    current: true,
    accent: "#7c3aed",
    highlights: [
      "Analyze large-scale behavioral and web traffic data using Python and SQL",
      "Detect non-human patterns and improve account identification accuracy across B2B interactions",
      "Uncover anomalies and classify behavioral signals to distinguish valid users from bots",
      "Build scalable data workflows and collaborate cross-functionally",
    ],
  },
  {
    company: "Uber",
    role: "Data Analyst II",
    period: "May 2024 – May 2025",
    location: "Hyderabad, India",
    accent: "#06b6d4",
    highlights: [
      "Analyzed 20M+ weekly sessions to evaluate session failure impact on retention — identified 14 key issues across 7 themes → 24% improvement in user retention",
      "Built real-time Tableau dashboards to track key KPIs and optimize decision-making",
      "Designed matrix-based segmentation for Uber Rides & Eats college users → 40% YoY trip growth and 12-week retention from 6% to 30%",
      "Conducted root cause analysis on Average ETA, identifying factors behind a 400 bps increase within a week",
      "Investigated trip suppression across 100+ cities → 25% reduction in CSAT complaints",
    ],
  },
  {
    company: "Uber",
    role: "Data Analyst",
    period: "Oct 2022 – May 2024",
    location: "Hyderabad, India",
    accent: "#06b6d4",
    highlights: [
      "Automated data workflows using Python and SQL",
      "Built segmentation models and targeted strategies to drive user growth",
    ],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst",
    period: "Feb 2022 – Sep 2022",
    location: "Noida, India",
    accent: "#10b981",
    highlights: [
      "Developed optimized SQL queries to extract and prepare data for dashboards and executive reporting",
    ],
  },
  {
    company: "Delberto Ecom",
    role: "Web Developer Intern",
    period: "Oct 2021 – Dec 2021",
    location: "Noida, India",
    accent: "#f59e0b",
    highlights: ["Built web features using CSS and JavaScript"],
  },
  {
    company: "ABES Engineering College",
    role: "B.Tech · Computer Science & Engineering",
    period: "2018 – 2022",
    location: "Ghaziabad, India",
    isEducation: true,
    accent: "#64748b",
    highlights: ["CGPA: 8.05"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white/[0.015]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Where I&apos;ve Worked</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-3 bottom-6 w-px bg-gradient-to-b from-violet-500/60 via-white/[0.08] to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-[22px] w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: item.accent,
                    backgroundColor: "#05050f",
                    boxShadow: item.current ? `0 0 14px ${item.accent}55` : "none",
                  }}
                >
                  {item.isEducation && (
                    <GraduationCap size={8} style={{ color: item.accent }} />
                  )}
                </div>

                {/* Card */}
                <div className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.045] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-0.5">
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {item.company}
                        </h3>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30">
                            Now
                          </span>
                        )}
                        {item.isEducation && (
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-500/20 text-slate-400 border border-slate-500/30">
                            Education
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold" style={{ color: item.accent }}>
                        {item.role}
                      </p>
                    </div>
                    <div className="text-right text-xs text-slate-500 space-y-1">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar size={11} />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin size={11} />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed"
                      >
                        <span
                          className="mt-[7px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
