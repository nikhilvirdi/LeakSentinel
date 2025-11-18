import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="
        cyber-card p-6 rounded-xl 
        bg-white/70 dark:bg-black/20
        border border-black/10 dark:border-white/10
        flex flex-col gap-3
      "
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="text-lg font-heading font-semibold">
        {title}
      </h3>

      <p className="text-sm text-black/70 dark:text-white/60 font-body leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
