import React from "react";
import PricingCard from "../components/PricingCard.jsx";
import RevenueStreams from "../components/RevenueStreams.jsx";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-24">

      {/* ========================= HERO ========================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          LeakSentinel Pricing & Revenue Model
        </h1>
        <p className="text-black/70 dark:text-white/60 font-body max-w-2xl mx-auto">
          Choose a plan that fits your needs. Simple, transparent and built for individuals, 
          teams and enterprises.
        </p>
      </motion.div>

      {/* ========================= PRICING GRID ========================= */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* FREE PLAN */}
        <PricingCard
          title="Free"
          price="₹0 / month"
          features={[
            "Basic Email Breach Check",
            "Username Exposure Summary (limited)",
            "Phone Exposure (Yes/No)",
            "Basic Impersonation Check",
            "Basic Risk Score",
            "1 Fix-Now Suggestion",
          ]}
          buttonText="Start Free Scan →"
          highlight={false}
        />

        {/* PRO PLAN (HIGHLIGHTED) */}
        <PricingCard
          title="Pro"
          price="₹199 / month"
          features={[
            "Full Breach History",
            "Unlimited Username Scans",
            "Unlimited Phone Exposure Scans",
            "Deep Impersonation Analysis",
            "Detailed Risk Breakdown",
            "Auto Takedown Templates",
            "2FA Security Audit",
            "Full PDF Security Report",
            "Scan History & Trend Graphs",
            "Priority OSINT Engine",
          ]}
          buttonText="Upgrade to Pro →"
          highlight={true}        // makes it glow & blue
        />

        {/* ENTERPRISE PLAN */}
        <PricingCard
          title="Enterprise"
          price="Custom Pricing"
          features={[
            "Bulk Scanning (50–500 users)",
            "Employee Leak Monitoring",
            "Custom OSINT Integrations",
            "Dark Web Monitoring",
            "Admin Dashboard",
            "Monthly Security Reports",
            "Dedicated Support Team",
          ]}
          buttonText="Contact Sales →"
          highlight={false}
        />

      </div>

      {/* ========================= REVENUE STREAMS ========================= */}
      <RevenueStreams />

    </div>
  );
}
