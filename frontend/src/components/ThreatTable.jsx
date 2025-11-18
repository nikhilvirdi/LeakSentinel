import React from "react";
import { motion } from "framer-motion";

export default function ThreatTable({ threats }) {
  const severityColor = {
    High: "bg-red-500",
    Medium: "bg-yellow-400 text-black",
    Low: "bg-green-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="cyber-card p-6 mt-10 bg-white/80 dark:bg-black/20"
    >
      <h3 className="font-heading text-lg mb-4">Threat Analysis</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[650px]">
          <thead>
            <tr className="border-b border-black/10 dark:border-white/10">
              <th className="p-3">Threat Type</th>
              <th className="p-3">Severity</th>
              <th className="p-3">Found In</th>
              <th className="p-3">Evidence</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {threats.map((t, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition"
              >
                <td className="p-3">{t.type}</td>
                <td className="p-3">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-bold text-white 
                      ${severityColor[t.severity]}
                    `}
                  >
                    {t.severity}
                  </span>
                </td>
                <td className="p-3">{t.foundIn}</td>
                <td className="p-3 text-sm opacity-80">{t.evidence}</td>
                <td className="p-3 text-right">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="cyber-btn cyber-btn-primary text-sm py-2 px-4"
                  >
                    Fix Now →
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
