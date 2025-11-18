// enhanced risk engine that mixes OSINT signals + dataset matches
exports.computeRisk = ({ breaches = [], exposures = [], fakes = [], usernameScan = [], emailScan = {}, phoneScan = {} }) => {
  let score = 0;

  // Base weights
  score += (breaches.length || 0) * 25;        // big penalty for breaches
  score += (exposures.length || 0) * 10;       // exposures matter
  score += (fakes.length || 0) * 20;           // impersonation weight
  score += (usernameScan.filter(p => p.exists).length || 0) * 5;
  score += (emailScan.gravatarExists ? 5 : 0);
  score += (phoneScan.isSpamReported ? 15 : 0);

  if (score > 100) score = 100;
  const level = score > 70 ? "High" : score > 40 ? "Medium" : "Low";

  const reasons = [];
  if (breaches.length) reasons.push(`Breaches: ${breaches.length}`);
  if (exposures.length) reasons.push(`Exposures: ${exposures.length}`);
  if (fakes.length) reasons.push(`Impersonation: ${fakes.length}`);
  if (usernameScan && usernameScan.some(p => p.exists)) reasons.push("Username present on public platforms");
  if (emailScan && emailScan.gravatarExists) reasons.push("Gravatar/profile image exists for email");
  if (phoneScan && phoneScan.isSpamReported) reasons.push("Phone reported as spam");

  return { score, level, reasons };
};
