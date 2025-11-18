import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        mt-28 mb-20 py-16 
        bg-cyber-gradient-dark 
        text-white text-center 
        rounded-2xl shadow-xl
        px-6 max-w-6xl mx-auto
      "
    >
      <h2 className="text-3xl font-heading font-semibold mb-4">
        Ready to see your digital footprint?
      </h2>

      <p className="text-white/70 max-w-2xl mx-auto mb-8 font-body">
        Scan your email, username, or phone number and uncover hidden 
        cyber threats in seconds.
      </p>

      <Link to="/scan">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="cyber-btn cyber-btn-light text-black text-lg"
        >
          Start Scan →
        </motion.button>
      </Link>
    </motion.div>
  );
}
