import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import Router from "./router.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader.jsx";

function AppContent() {
  const location = useLocation();

  // ------------------------------
  // 🚀 Cyber Intro Loader State
  // ------------------------------
  const [isLoading, setIsLoading] = React.useState(true);

  if (isLoading) {
    return <Loader onFinish={() => setIsLoading(false)} />;
  }

  // ------------------------------
  // 🌙 Navbar Theme Toggle
  // ------------------------------
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B0D10] transition-colors duration-300">

      {/* Navbar */}
      <Navbar toggleTheme={toggleTheme} />

      {/* Animated Page Transitions */}
      <div className="flex-1 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Router />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Dark Mode Toggle */}
      <ThemeToggle />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
