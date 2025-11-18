import React from "react";
import { motion } from "framer-motion";

export default function ScanAnimation() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="relative w-56 h-56">
        
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-cyber-blue/40" />

        {/* Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border border-cyber-blue/50"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Sweeping Line */}
        <motion.div
          className="absolute inset-0 origin-bottom-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          <div className="w-[2px] h-1/2 bg-cyber-blue mx-auto rounded-full shadow-[0_0_10px_#128CFF]" />
        </motion.div>

        {/* Center Dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-cyber-blue rounded-full shadow-[0_0_12px_#128CFF]" />
        </div>

      </div>
    </div>
  );
}
