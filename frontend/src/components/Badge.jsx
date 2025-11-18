import React from "react";
import { motion } from "framer-motion";

export default function Badge({ icon, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="
        flex items-center gap-2 px-3 py-1.5 
        rounded-full border border-black/10 dark:border-white/10
        bg-white/70 dark:bg-white/10 
        text-black dark:text-white 
        text-xs font-body 
        shadow-sm
      "
    >
      <span className="text-base">{icon}</span>
      <span>{text}</span>
    </motion.div>
  );
}
