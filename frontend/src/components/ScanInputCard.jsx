import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ScanInputCard() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");

  const handleScan = () => {
    if (!email && !username && !phone) {
      alert("Please enter at least one field.");
      return;
    }

    navigate("/scan", {
      state: { email, username, phone }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        cyber-card 
        p-8 max-w-2xl mx-auto 
        dark:bg-black/20 bg-white/80
      "
    >

      <h2 
        className="text-xl font-heading font-semibold mb-6 text-center"
      >
        Start Your Data Exposure Scan
      </h2>

      <div className="flex flex-col gap-4">

        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full px-4 py-3 rounded-lg 
            bg-white dark:bg-[#0F1114] 
            border border-black/10 dark:border-white/10
            text-black dark:text-white 
            focus:ring-2 focus:ring-cyber-blue
          "
        />

        <input
          type="text"
          placeholder="@username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="
            w-full px-4 py-3 rounded-lg 
            bg-white dark:bg-[#0F1114] 
            border border-black/10 dark:border-white/10
            text-black dark:text-white 
            focus:ring-2 focus:ring-cyber-blue
          "
        />

        <input
          type="tel"
          placeholder="+91 98765 43210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="
            w-full px-4 py-3 rounded-lg 
            bg-white dark:bg-[#0F1114] 
            border border-black/10 dark:border-white/10
            text-black dark:text-white 
            focus:ring-2 focus:ring-cyber-blue
          "
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleScan}
          className="
            cyber-btn cyber-btn-primary 
            text-base mt-4
          "
        >
          Scan Now →
        </motion.button>

      </div>
    </motion.div>
  );
}
