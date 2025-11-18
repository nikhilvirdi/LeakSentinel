import React from "react";
import { motion } from "framer-motion";

export default function ScanProgress({ activeStep }) {
  const steps = [
    "Input Received",
    "Checking Email Breaches",
    "Scanning Username Leaks",
    "Checking Phone Exposure",
    "Detecting Impersonation",
    "Calculating Risk Score",
    "Preparing Dashboard"
  ];

  return (
    <div className="cyber-card p-6 bg-white/80 dark:bg-black/20 border border-black/10 dark:border-white/10">
      <h3 className="font-heading text-lg mb-4">Scan Progress</h3>

      <div className="flex flex-col gap-4">
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.12 }}
              className="flex items-center gap-3"
            >
              {/* Icon */}
              <div
                className={`
                  w-7 h-7 rounded-full flex items-center justify-center text-sm
                  ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isActive
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }
                `}
              >
                {isCompleted ? "✔" : isActive ? "⏳" : ""}
              </div>

              {/* Text */}
              <span
                className={`
                  text-sm font-body 
                  ${
                    isCompleted
                      ? "text-green-500"
                      : isActive
                      ? "text-yellow-400"
                      : "text-black/60 dark:text-white/40"
                  }
                `}
              >
                {step}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
