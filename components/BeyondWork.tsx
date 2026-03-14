"use client";

import { motion } from "framer-motion";

const cards = [
  {
    emoji: "⚽ 🏏",
    title: "Die-hard sports fan",
    body: "Real Madrid and Cristiano Ronaldo on the pitch. RCB and Virat Kohli on the crease. Performance, precision, and the relentless hunger to win — that's what drives me off the field too.",
  },
  {
    emoji: "🎯",
    title: "Driven by outcomes",
    body: "Great data work and great sport share the same DNA: obsess over the details others overlook, execute under pressure, and let the scoreboard speak for itself.",
  },
];

export default function BeyondWork() {
  return (
    <section id="beyond" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-violet-400 text-xs font-mono font-semibold tracking-widest uppercase mb-3">
            // Beyond Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">The Human Side</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:border-white/[0.13] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{card.emoji}</div>
              <p className="text-white font-semibold text-lg mb-2">{card.title}</p>
              <p className="text-slate-400 leading-relaxed text-[0.9375rem]">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
