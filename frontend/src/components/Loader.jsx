import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Auto finish loader after 1.2 seconds
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="
      fixed inset-0 z-[9999] 
      flex items-center justify-center 
      bg-white dark:bg-[#0B0D10]
    ">
      {/* Glowing Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="font-heading text-4xl md:text-5xl font-bold text-black dark:text-white"
      >
        LeakSentinel
      </motion.h1>

      {/* Scanline effect */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: "linear"
        }}
        className="absolute w-full h-[2px] bg-cyber-blue opacity-30"
      />
    </div>
  );
}
