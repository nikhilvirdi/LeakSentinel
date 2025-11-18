import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

export default function TimelineChart() {
  // Fake trend data (you can replace with real API data later)
  const data = [
    { month: "Jan", exposures: 2 },
    { month: "Feb", exposures: 3 },
    { month: "Mar", exposures: 5 },
    { month: "Apr", exposures: 6 },
    { month: "May", exposures: 4 },
    { month: "Jun", exposures: 7 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="cyber-card p-6 bg-white/80 dark:bg-black/20 w-full h-80"
    >
      <h3 className="font-heading text-lg mb-4">Exposure Timeline</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              background: "#0B0D10",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="exposures"
            stroke="#128CFF"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
