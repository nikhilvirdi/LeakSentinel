exports.calculateRisk = (breaches = [], exposures = [], fakes = []) => {
  let score = 0;
  if (breaches && breaches.length) score += 50;
  score += Math.min(30, (exposures || []).length * 8);
  score += Math.min(40, (fakes || []).length * 20);
  if (score > 100) score = 100;
  const level = score > 60 ? "High" : score > 30 ? "Medium" : "Low";
  const reasons = [];
  if (breaches && breaches.length) reasons.push("Found in breach databases");
  if (exposures && exposures.length) reasons.push(`${exposures.length} public exposures found`);
  if (fakes && fakes.length) reasons.push(`${fakes.length} fake/duplicate accounts found`);
  return { score, level, reasons };
};

