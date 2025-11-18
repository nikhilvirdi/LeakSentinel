import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ScanLogs({ logs }) {
  const [displayedLogs, setDisplayedLogs] = useState([]);
  const logContainerRef = useRef(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < logs.length) {
        setDisplayedLogs((prev) => [...prev, logs[index]]);
        index++;

        // Auto-scroll down
        setTimeout(() => {
          if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
          }
        }, 50);

      } else {
        clearInterval(interval);
      }
    }, Math.random() * (500 - 300) + 300);

    return () => clearInterval(interval);
  }, [logs]);

  return (
    <div
      ref={logContainerRef}
      className="
        h-56 md:h-64 
        overflow-y-auto 
        cyber-card 
        bg-black/40 dark:bg-black/40 
        text-green-400 
        font-mono text-sm p-4 
        border border-green-400/20
        shadow-inner
      "
    >
      {displayedLogs.map((log, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="mb-1"
        >
          $ {log}
        </motion.div>
      ))}
    </div>
  );
}
