"use client";

import { motion } from "framer-motion";

type SkillGroup = {
  category: string;
  colorClasses: { bg: string; text: string; border: string };
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    colorClasses: {
      bg: "bg-violet-500/10",
      text: "text-violet-300",
      border: "border-violet-500/20",
    },
    skills: ["Python", "SQL", "R", "C++", "JavaScript"],
  },
  {
    category: "Data Analysis",
    colorClasses: {
      bg: "bg-cyan-500/10",
      text: "text-cyan-300",
      border: "border-cyan-500/20",
    },
    skills: [
      "A/B Testing",
      "Statistical Modeling",
      "Hypothesis Testing",
      "Regression Analysis",
      "Cohort Analysis",
    ],
  },
  {
    category: "Data Tools",
    colorClasses: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-300",
      border: "border-indigo-500/20",
    },
    skills: ["Pandas", "NumPy", "Scikit-learn", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    category: "Databases",
    colorClasses: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
      border: "border-emerald-500/20",
    },
    skills: ["PostgreSQL", "MySQL", "NoSQL", "Oracle", "BigQuery"],
  },
  {
    category: "Cloud",
    colorClasses: {
      bg: "bg-amber-500/10",
      text: "text-amber-300",
      border: "border-amber-500/20",
    },
    skills: ["GCP", "AWS"],
  },
  {
    category: "Tools & Environment",
    colorClasses: {
      bg: "bg-rose-500/10",
      text: "text-rose-300",
      border: "border-rose-500/20",
    },
    skills: ["Git", "Excel", "Jupyter Notebook", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
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
            // Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Stack</h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <p
                className={`text-[11px] font-mono font-semibold tracking-widest uppercase mb-3 ${group.colorClasses.text}`}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 + j * 0.03 }}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium border cursor-default transition-all duration-200 hover:brightness-125 select-none
                      ${group.colorClasses.bg} ${group.colorClasses.text} ${group.colorClasses.border}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
