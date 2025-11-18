import React from "react";
import { motion } from "framer-motion";

export default function BreachCard({ breaches }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cyber-card p-6 bg-white/80 dark:bg-black/20"
    >
      <h3 className="font-heading text-lg mb-3">
        Breach Summary
      </h3>

      <p className="text-4xl font-bold text-cyber-blue mb-2">
        {breaches.length}
      </p>

      <p className="text-sm text-black/70 dark:text-white/60 mb-4 font-body">
        Breaches found
      </p>

      <div className="text-sm mb-4">
        {breaches.slice(0, 3).map((b, i) => (
          <div key={i} className="mb-1">
            <span className="font-semibold">{b.name}</span>{" "}
            <span className="text-xs opacity-70">({b.year})</span>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cyber-btn cyber-btn-dark mt-4"
      >
        View Breaches →
      </motion.button>
    </motion.div>
  );
}
