import React from "react";
import { motion } from "framer-motion";

export default function ExposureCard({ exposures }) {
  const total = exposures.length;
  const severity =
    total >= 10 ? "High" : total >= 5 ? "Medium" : "Low";

  const severityColor =
    severity === "High"
      ? "bg-red-500"
      : severity === "Medium"
      ? "bg-yellow-400 text-black"
      : "bg-green-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cyber-card p-6 bg-white/80 dark:bg-black/20"
    >
      <h3 className="font-heading text-lg mb-3">Username Exposure</h3>

      <div className="flex items-center gap-3 mb-3">
        <p className="text-4xl font-bold text-cyber-blue">{total}</p>

        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${severityColor}`}>
          {severity}
        </span>
      </div>

      <p className="text-sm text-black/70 dark:text-white/60 mb-4 font-body">
        Platforms with your username exposed
      </p>

      <div className="text-sm mb-3">
        {exposures.slice(0, 2).map((e, i) => (
          <p key={i}>
            <span className="font-semibold">{e.platform}</span> → {e.username}
          </p>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="cyber-btn cyber-btn-dark mt-4"
      >
        View Platforms →
      </motion.button>
    </motion.div>
  );
}
