import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: "📝",
      title: "Enter Your Details",
      text: "Provide your email, username, or phone number."
    },
    {
      icon: "⚡",
      title: "LeakSentinel Scans OSINT Sources",
      text: "Our OSINT engine scans dark web, breach databases & public platforms."
    },
    {
      icon: "🔍",
      title: "Get Your Risk Score + Fix Steps",
      text: "View your full cyber exposure dashboard with recommended actions."
    }
  ];

  return (
    <div className="mt-24 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-10">
        How LeakSentinel Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="
              cyber-card p-6 text-center dark:bg-black/20 bg-white/80
              border border-black/10 dark:border-white/10
              rounded-xl
            "
          >
            <div className="text-4xl mb-3">{s.icon}</div>
            <h3 className="font-heading text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-black/70 dark:text-white/60 font-body">
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
