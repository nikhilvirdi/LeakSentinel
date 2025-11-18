import React from "react";
import { motion } from "framer-motion";

export default function RevenueStreams() {
  const items = [
    {
      icon: "🏢",
      title: "Corporate Partnerships",
      text: "Colleges, startups, SMBs & enterprise licensing."
    },
    {
      icon: "🔌",
      title: "API Monetization",
      text: "Offer API for breach scans, exposure search & risk scoring."
    },
    {
      icon: "🕸️",
      title: "Dark Web Monitoring Add-On",
      text: "Premium subscription upgrade for detecting deep web leaks."
    },
    {
      icon: "🧹",
      title: "Data Cleanup Services",
      text: "Broker site removal, impersonation takedowns, privacy cleanup."
    },
    {
      icon: "💸",
      title: "Annual Subscription Discounts",
      text: "Yearly plans with 2 months free for higher conversions."
    }
  ];

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-heading text-center mb-10">
        Additional Revenue Streams
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="
              cyber-card p-6 rounded-xl 
              bg-white/80 dark:bg-black/20
              border border-black/10 dark:border-white/10
            "
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="font-heading text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-black/70 dark:text-white/60 leading-relaxed font-body">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
