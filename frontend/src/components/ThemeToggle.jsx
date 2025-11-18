import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme on first load
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  // Apply theme changes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        fixed bottom-6 right-6 z-50
        p-4 rounded-full
        bg-white dark:bg-black
        border border-black/10 dark:border-white/10
        shadow-xl
      "
    >
      {theme === "light" ? "🌙" : "☀️"}
    </motion.button>
  );
}
