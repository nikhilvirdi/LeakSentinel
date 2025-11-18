import React from "react";
import { motion } from "framer-motion";

export default function PricingCard({
  title,
  price,
  features,
  buttonText,
  highlight,
  color,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className={`
        p-8 rounded-2xl border 
        bg-white/80 dark:bg-black/20
        shadow-lg transition
        ${highlight ? "border-cyber-blue shadow-xl" : "border-black/10 dark:border-white/10"}
      `}
    >
      {/* Title */}
      <h3
        className={`text-xl font-heading mb-3 ${
          highlight ? "text-cyber-blue" : ""
        }`}
      >
        {title}
      </h3>

      {/* Price */}
      <p className="text-4xl font-bold mb-4">
        {price}
      </p>

      {/* Feature List */}
      <ul className="text-sm font-body text-black/70 dark:text-white/60 space-y-2 mb-6">
        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: highlight ? "0 0 18px rgba(18,140,255,0.5)" : "" }}
        whileTap={{ scale: 0.95 }}
        className={`
          w-full py-3 rounded-xl font-body
          ${highlight ? "bg-cyber-blue text-white" : "bg-black text-white dark:bg-white dark:text-black"}
        `}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
