import React from "react";
import { motion } from "framer-motion";

export default function PhoneCard({ phoneExposed, count }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cyber-card p-6 bg-white/80 dark:bg-black/20"
    >
      <h3 className="font-heading text-lg mb-3">Phone Exposure</h3>

      {/* Status */}
      <div className="flex items-center gap-3 mb-4">
        <p className="text-4xl font-bold text-cyber-blue">
          {count}
        </p>

        <span
          className={`
            px-3 py-1 rounded-full text-xs font-bold
            ${
              phoneExposed
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }
          `}
        >
          {phoneExposed ? "Exposed" : "Safe"}
        </span>
      </div>

      <p className="text-sm text-black/70 dark:text-white/60 font-body mb-6">
        Number of data sources where your phone appeared.
      </p>

      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="cyber-btn cyber-btn-dark"
      >
        View Sources →
      </motion.button>
    </motion.div>
  );
}
