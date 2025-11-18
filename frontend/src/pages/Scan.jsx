import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ScanAnimation from "../components/ScanAnimation.jsx";
import ScanLogs from "../components/ScanLogs.jsx";
import ScanProgress from "../components/ScanProgress.jsx";
import UserInfoCard from "../components/UserInfoCard.jsx";

import { motion } from "framer-motion";

export default function Scan() {
  const navigate = useNavigate();
  const location = useLocation();

  // Received data from Home page
  const { email, username, phone } = location.state || {};

  // Fake logs
  const logs = [
    "Initializing OSINT modules...",
    "Checking breach databases...",
    "Querying HaveIBeenPwned...",
    "Scanning username across 350 platforms...",
    "Checking phone number in public datasets...",
    "Parsing exposure data...",
    "Identifying impersonation signals...",
    "Calculating digital risk score...",
    "Finalizing scan...",
    "Preparing dashboard..."
  ];

  // Scan progress step index
  const [activeStep, setActiveStep] = useState(0);

  // Scan completion flag
  const [isScanComplete, setIsScanComplete] = useState(false);

  // Progress step interval
  useEffect(() => {
    let step = 0;

    const interval = setInterval(() => {
      setActiveStep(step);
      step++;

      if (step === logs.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsScanComplete(true);
        }, 600);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Optional: Auto redirect after scan completes
  // useEffect(() => {
  //   if (isScanComplete) {
  //     setTimeout(() => navigate("/dashboard"), 1000);
  //   }
  // }, [isScanComplete]);


  return (
    <div className="max-w-6xl mx-auto px-6 pt-10 pb-20">

      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-6">
        Scanning your digital footprint…
      </h1>
      <p className="text-center text-black/70 dark:text-white/60 font-body mb-10">
        Collecting data from OSINT sources...
      </p>

      {/* Radar Animation */}
      {!isScanComplete && <ScanAnimation />}

      {/* Logs + Progress */}
      <div className="grid md:grid-cols-2 gap-6 mt-4">

        {/* Fake Terminal Logs */}
        <ScanLogs logs={logs} />

        {/* Vertical Scan Steps */}
        <ScanProgress activeStep={activeStep} />
      </div>

      {/* User Details */}
      <UserInfoCard email={email} username={username} phone={phone} />

      {/* Final CTA Button */}
      {isScanComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => navigate("/dashboard")}
            className="
              cyber-btn cyber-btn-dark 
              text-lg px-10
            "
          >
            View Dashboard →
          </button>
        </motion.div>
      )}

    </div>
  );
}
