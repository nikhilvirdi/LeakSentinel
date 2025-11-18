import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ toggleTheme }) {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "GitHub", path: "https://github.com", external: true },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="
        backdrop-blur-xl 
        bg-white/70 dark:bg-[#0B0D10]/70 
        shadow-md dark:shadow-white/5 
        border-b border-black/10 dark:border-white/10
        transition-all duration-300
      ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-heading text-xl font-bold tracking-wide hover:opacity-80 transition"
          >
            LeakSentinel
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group font-body font-medium"
                >
                  <span
                    className={`
                      ${pathname === item.path ? "text-cyber-blue" : "text-black dark:text-white"} 
                      transition
                    `}
                  >
                    {item.name}
                  </span>

                  {/* Hover underline */}
                  <span className="
                    absolute left-0 -bottom-1 w-0 h-[2px] 
                    bg-cyber-blue transition-all duration-300 group-hover:w-full
                  "></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative group font-body font-medium"
                >
                  <span
                    className={`
                      ${pathname === item.path ? "text-cyber-blue" : "text-black dark:text-white"} 
                      transition
                    `}
                  >
                    {item.name}
                  </span>

                  {/* Hover underline */}
                  <span className="
                    absolute left-0 -bottom-1 w-0 h-[2px] 
                    bg-cyber-blue transition-all duration-300 group-hover:w-full
                  "></span>
                </Link>
              )
            )}
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">

            {/* Start Scan Button */}
            <Link to="/scan">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(18,140,255,0.3)" }}
                whileTap={{ scale: 0.96 }}
                className="
                  cyber-btn cyber-btn-primary 
                  hidden md:flex
                "
              >
                Start Scan →
              </motion.button>
            </Link>

            {/* Dark/Light Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="
                w-10 h-10 flex items-center justify-center 
                rounded-full border border-black/20 dark:border-white/20 
                bg-white dark:bg-[#111418] 
                shadow-sm dark:shadow-white/10
              "
            >
              <span className="text-xl">
                {document.documentElement.classList.contains("dark") ? "🌙" : "☀️"}
              </span>
            </motion.button>
          </div>

        </div>
      </div>
    </div>
  );
}
