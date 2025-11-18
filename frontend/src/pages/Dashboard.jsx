import React from "react";
import RiskScoreCard from "../components/RiskScoreCard.jsx";
import BreachCard from "../components/BreachCard.jsx";
import ExposureCard from "../components/ExposureCard.jsx";
import PhoneCard from "../components/PhoneCard.jsx";
import ImpersonationCard from "../components/ImpersonationCard.jsx";
import ExposureChart from "../components/ExposureChart.jsx";
import TimelineChart from "../components/TimelineChart.jsx";
import ThreatTable from "../components/ThreatTable.jsx";
import QuickActions from "../components/QuickActions.jsx";

import { motion } from "framer-motion";

export default function Dashboard() {
  // Fake backend data (replace with real API later)
  const data = {
    riskScore: 78,
    breaches: [
      { name: "Dropbox", year: 2020, data: ["email", "password"] },
      { name: "Canva", year: 2023, data: ["email"] },
    ],
    exposures: [
      { platform: "GitHub", username: "user123" },
      { platform: "Instagram", username: "user123official" },
    ],
    phoneExposed: true,
    impersonation: {
      status: true,
      matches: ["user123_", "user123_official", "user_123_fake"]
    },
    threats: [
      {
        type: "Password Leak",
        severity: "High",
        foundIn: "Dropbox",
        evidence: "Password present in breach dump."
      },
      {
        type: "Username Exposure",
        severity: "Medium",
        foundIn: "GitHub",
        evidence: "Username found across multiple platforms."
      },
      {
        type: "Phone Leak",
        severity: "High",
        foundIn: "Data Broker",
        evidence: "Phone number listed in public dataset."
      },
      {
        type: "Impersonation",
        severity: "Medium",
        foundIn: "Instagram",
        evidence: "Similar handle found impersonating user."
      },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-heading font-bold mb-10"
      >
        Threat Dashboard
      </motion.h1>

      {/* 1) RISK SCORE HERO */}
      <RiskScoreCard score={data.riskScore} />

      {/* 2) SUMMARY GRID */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <BreachCard breaches={data.breaches} />
        <ExposureCard exposures={data.exposures} />
        <PhoneCard phoneExposed={data.phoneExposed} count={data.phoneExposed ? 3 : 0} />
      </div>

      {/* 3) Impersonation Card */}
      <div className="mt-6">
        <ImpersonationCard impersonation={data.impersonation} />
      </div>

      {/* 4) Charts Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <ExposureChart
          breaches={data.breaches}
          exposures={data.exposures}
          phoneExposed={data.phoneExposed}
          impersonation={data.impersonation}
        />

        <TimelineChart />
      </div>

      {/* 5) Threat Table */}
      <ThreatTable threats={data.threats} />

      {/* 6) Quick Actions */}
      <QuickActions />

    </div>
  );
}
