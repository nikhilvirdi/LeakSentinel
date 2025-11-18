export const sampleDashboardData = {
  riskScore: 78,
  severity: "High",
  breaches: [
    { name: "Dropbox", year: 2020, data: ["email", "password"] },
    { name: "Canva", year: 2023, data: ["email"] }
  ],
  exposures: [
    { platform: "GitHub", username: "user123" },
    { platform: "Instagram", username: "user123official" }
  ],
  phoneExposed: true,
  impersonation: {
    status: true,
    matches: ["user123_", "user123official"]
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
    }
  ]
};
