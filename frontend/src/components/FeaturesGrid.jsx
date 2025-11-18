import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeaturesGrid() {
  const features = [
    {
      icon: "🔐",
      title: "Breach Detection",
      text: "Detect email breaches and leaked credentials across OSINT sources."
    },
    {
      icon: "🌐",
      title: "Exposure Mapping",
      text: "Find where your username appears across platforms and leak databases."
    },
    {
      icon: "📱",
      title: "Phone Leak Alerts",
      text: "Instantly know if your phone number is exposed on the internet."
    },
    {
      icon: "🕵️‍♂️",
      title: "Impersonation Check",
      text: "Discover fake accounts and usernames impersonating your identity."
    }
  ];

  return (
    <div className="grid-3 mt-12">
      {features.map((f, i) => (
        <FeatureCard
          key={i}
          icon={f.icon}
          title={f.title}
          text={f.text}
        />
      ))}
    </div>
  );
}
