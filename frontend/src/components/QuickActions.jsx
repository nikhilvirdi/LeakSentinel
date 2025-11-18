import React from "react";
import { motion } from "framer-motion";

export default function QuickActions() {
  const actions = [
    { icon: "⚙️", text: "Change Passwords" },
    { icon: "🔐", text: "Enable 2FA" },
    { icon: "🧹", text: "Clean Public Profiles" },
    { icon: "🚨", text: "Report Fake Account" },
    { icon: "📝", text: "Generate Takedown Letter" },
    { icon: "📄", text: "Download Full Report" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="cyber-card p-6 mt-10 bg-white/80 dark:bg-black/20"
    >
      <h3 className="font-heading text-lg mb-6 text-center">
        Quick Security Actions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {actions.map((a, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(18,140,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center gap-3 
              px-4 py-3 rounded-xl 
              bg-white/70 dark:bg-[#111] 
              border border-black/10 dark:border-white/10
              text-left font-body 
              transition
            "
          >
            <span className="text-2xl">{a.icon}</span>
            <span className="text-sm">{a.text}</span>
          </motion.button>
        ))}

      </div>
    </motion.div>
  );
}
