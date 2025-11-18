import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RiskScoreCard({ score }) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = score;
    const duration = 1200;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayScore(end);
        clearInterval(counter);
      } else {
        setDisplayScore(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [score]);

  const severity =
    score >= 80 ? "High" : score >= 50 ? "Medium" : "Low";
  const severityColor =
    severity === "High"
      ? "text-red-500"
      : severity === "Medium"
      ? "text-yellow-400"
      : "text-green-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="cyber-card p-8 flex flex-col items-center bg-white/80 dark:bg-black/20"
    >
      <h2 className="font-heading text-xl mb-4">Digital Risk Score</h2>

      {/* Donut chart */}
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="52"
            stroke="gray"
            strokeWidth="10"
            fill="none"
            className="opacity-20"
          />

          <motion.circle
            cx="60"
            cy="60"
            r="52"
            stroke="#128CFF"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 360 }}
            animate={{
              strokeDashoffset: 360 - (360 * score) / 100
            }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            style={{
              strokeDasharray: 360
            }}
          />
        </svg>

        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-heading">
            {displayScore}
          </span>
        </div>
      </div>

      {/* Severity */}
      <p className={`text-lg mt-4 font-bold ${severityColor}`}>
        {severity} Risk
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cyber-btn cyber-btn-primary mt-6"
      >
        View Breakdown →
      </motion.button>
    </motion.div>
  );
}
