import React from "react";
import { motion } from "framer-motion";
import ScanInputCard from "../components/ScanInputCard.jsx";
import FeaturesGrid from "../components/FeaturesGrid.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import CTASection from "../components/CTASection.jsx";
import Badge from "../components/Badge.jsx";

export default function Home() {
  return (
    <div className="pt-10">

      {/* ============================================================
          HERO SECTION
      ============================================================ */}
      <section className="
        w-full py-24 md:py-32 
        bg-cyber-grid 
        bg-white dark:bg-[#0B0D10]
        transition-colors duration-300
        text-center
      ">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-heading font-bold"
        >
          Find out where your personal data is leaked.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto mt-4 text-black/70 dark:text-white/60 font-body"
        >
          Check if your email, username, or phone has been exposed across 
          breaches, public platforms, and OSINT databases.
        </motion.p>
      </section>


      {/* ============================================================
          SCAN INPUT CARD
      ============================================================ */}
      <div className="mt-[-60px] relative z-10">
        <ScanInputCard />
      </div>


      {/* ============================================================
          TRUST BADGES
      ============================================================ */}
      <div className="mt-6 flex justify-center gap-4 flex-wrap px-6">
        <Badge icon="✓" text="Privacy Safe" />
        <Badge icon="🔐" text="Secure Scan" />
        <Badge icon="🛰️" text="Ethical OSINT" />
        <Badge icon="🗂️" text="Data Not Stored" />
      </div>


      {/* ============================================================
          FEATURES PREVIEW
      ============================================================ */}
      <section className="mt-28 max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-heading font-semibold">
          What LeakSentinel Does
        </h2>

        <FeaturesGrid />
      </section>


      {/* ============================================================
          HOW IT WORKS
      ============================================================ */}
      <HowItWorks />


      {/* ============================================================
          CTA SECTION
      ============================================================ */}
      <CTASection />

    </div>
  );
}
