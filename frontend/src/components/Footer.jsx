import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        mt-20 py-10 
        text-center 
        border-t border-black/10 dark:border-white/10 
        bg-white/60 dark:bg-[#0B0D10]/60 
        backdrop-blur-xl 
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo */}
        <div className="font-heading text-xl font-bold tracking-wide mb-4">
          LeakSentinel
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-4 text-sm font-body">
          <Link
            to="/"
            className="hover:text-cyber-blue transition-colors"
          >
            Home
          </Link>

          <Link
            to="/pricing"
            className="hover:text-cyber-blue transition-colors"
          >
            Pricing
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyber-blue transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Bottom Text */}
        <div className="text-xs text-black/60 dark:text-white/40 font-body">
          Built for Hackathon 2025 • Ethical OSINT Scanner • Cybersecurity UI
        </div>

      </div>
    </footer>
  );
}
