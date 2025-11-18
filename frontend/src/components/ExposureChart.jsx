import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function ExposureChart({ breaches, exposures, phoneExposed, impersonation }) {
  const data = [
    { name: "Breaches", value: breaches.length },
    { name: "Usernames", value: exposures.length },
    { name: "Phone", value: phoneExposed ? 1 : 0 },
    { name: "Impersonation", value: impersonation.matches.length },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="cyber-card p-6 bg-white/80 dark:bg-black/20 w-full h-80"
    >
      <h3 className="font-heading text-lg mb-4">Exposure Distribution</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip 
            contentStyle={{
              background: "#0B0D10",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Bar dataKey="value" fill="#128CFF" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
