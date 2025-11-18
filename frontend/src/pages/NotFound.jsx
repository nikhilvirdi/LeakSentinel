import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

      {/* Glitchy 404 */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-7xl md:text-9xl font-heading font-bold
          text-black dark:text-white relative
        "
      >
        <span className="absolute top-0 left-0 text-red-500 opacity-40 blur-sm">
          404
        </span>
        <span className="absolute top-0 right-0 text-cyber-blue opacity-40 blur-sm">
          404
        </span>
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-4 text-black/70 dark:text-white/60 font-body max-w-lg"
      >
        The page you are looking for has vanished into the darknet.
      </motion.p>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10"
      >
        <Link to="/">
          <button className="cyber-btn cyber-btn-primary px-8 py-3 text-lg">
            Go Home →
          </button>
        </Link>
      </motion.div>

    </div>
  );
}
