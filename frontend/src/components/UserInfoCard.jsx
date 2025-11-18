import React from "react";
import { motion } from "framer-motion";

export default function UserInfoCard({ email, username, phone }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        cyber-card p-6 mt-6
        bg-white/70 dark:bg-black/20
        border border-black/10 dark:border-white/10
      "
    >
      <h3 className="font-heading text-lg mb-4">Scan Details</h3>

      <div className="flex flex-col gap-2 text-sm font-body">
        {email && (
          <p>
            <span className="text-cyber-blue font-semibold">Email:</span>{" "}
            {email}
          </p>
        )}

        {username && (
          <p>
            <span className="text-cyber-blue font-semibold">Username:</span>{" "}
            {username}
          </p>
        )}

        {phone && (
          <p>
            <span className="text-cyber-blue font-semibold">Phone:</span>{" "}
            {phone}
          </p>
        )}

        {(!email && !username && !phone) && (
          <p className="text-red-400">No input provided.</p>
        )}
      </div>
    </motion.div>
  );
}
