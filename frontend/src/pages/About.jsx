import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-24">

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold mb-6 text-center"
      >
        About LeakSentinel
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-center text-black/70 dark:text-white/60 font-body max-w-2xl mx-auto mb-16"
      >
        LeakSentinel is a cybersecurity platform designed to reveal hidden digital
        risks, leaked data, impersonation attempts and overall exposure across OSINT,
        dark web and public sources.
      </motion.p>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="cyber-card bg-white/80 dark:bg-black/20 p-8 mb-12 rounded-xl"
      >
        <h2 className="text-2xl font-heading mb-3">Our Mission</h2>

        <p className="font-body text-black/70 dark:text-white/60 leading-relaxed">
          Our mission is simple: empower users with complete transparency into their
          online footprint. With rising cyber threats, every individual deserves a
          clear view of their leaked data, exposed accounts and potential security
          vulnerabilities.
        </p>
      </motion.div>

      {/* Features/Values */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Value 1 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="cyber-card p-6 bg-white/80 dark:bg-black/20"
        >
          <div className="text-3xl mb-2">🔒</div>
          <h3 className="font-heading text-lg mb-2">Security First</h3>
          <p className="text-sm text-black/70 dark:text-white/60 font-body">
            We prioritize privacy, encryption and ethical OSINT practices.
          </p>
        </motion.div>

        {/* Value 2 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="cyber-card p-6 bg-white/80 dark:bg-black/20"
        >
          <div className="text-3xl mb-2">🛰️</div>
          <h3 className="font-heading text-lg mb-2">Deep OSINT Coverage</h3>
          <p className="text-sm text-black/70 dark:text-white/60 font-body">
            We analyze dark web dumps, social platforms, breach archives and public datasets.
          </p>
        </motion.div>

        {/* Value 3 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="cyber-card p-6 bg-white/80 dark:bg-black/20"
        >
          <div className="text-3xl mb-2">⚡</div>
          <h3 className="font-heading text-lg mb-2">Fast & Real-Time</h3>
          <p className="text-sm text-black/70 dark:text-white/60 font-body">
            Our scanning engine delivers results in seconds, even across large datasets.
          </p>
        </motion.div>

      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        <h2 className="text-2xl font-heading mb-4">Built for Hackathon 2025</h2>
        <p className="text-black/70 dark:text-white/60 font-body max-w-lg mx-auto">
          LeakSentinel represents a futuristic, high-performance vision of
          cybersecurity made simple, accessible and powerful.
        </p>
      </motion.div>

    </div>
  );
}
