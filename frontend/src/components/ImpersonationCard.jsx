import React from "react";
import { motion } from "framer-motion";

export default function ImpersonationCard({ impersonation }) {
  const status = impersonation.status ? "Possible" : "None";
  const color = impersonation.status ? "bg-red-500" : "bg-green-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="cyber-card p-6 bg-white/80 dark:bg-black/20"
    >
      <h3 className="font-heading text-lg mb-3">Impersonation Check</h3>

      <div className="flex items-center gap-3 mb-3">
        <p className="text-4xl font-bold text-cyber-blue">
          {impersonation.matches.length}
        </p>

        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${color}`}>
          {status}
        </span>
      </div>

      <p className="text-sm text-black/70 dark:text-white/60 mb-4 font-body">
        Suspicious accounts or handles impersonating you.
      </p>

      <div className="text-sm mb-2">
        {impersonation.matches.slice(0, 2).map((m, i) => (
          <p key={i}>• {m}</p>
        ))}
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="cyber-btn cyber-btn-dark mt-4"
      >
        Review Accounts →
      </motion.button>
    </motion.div>
  );
}
