const { calculateRisk } = require("../utils/scoreUtils");
const { computeRisk: engineCompute } = require("../utils/riskEngine");
const { logScan } = require("../utils/logger");

/**
 * Accepts:
 *  - breachResults, exposureResults, fakeResults (recommended)
 *  - OR username/email/phone to compute via datasets (MVP)
 */
exports.computeRisk = (req, res) => {
  const payload = req.body || {};
  logScan("risk-score", payload);

  const breachResults = payload.breachResults || payload.breaches || [];
  const exposureResults = payload.exposureResults || payload.exposures || [];
  const fakeResults = payload.fakeResults || payload.fakes || [];

  // Simple legacy score (keeps backward compatibility)
  const legacy = calculateRisk(breachResults, exposureResults, fakeResults);

  // Enhanced engine (if extra OSINT fragments present)
  const enhanced = engineCompute({
    breaches: breachResults,
    exposures: exposureResults,
    fakes: fakeResults,
    usernameScan: payload.usernameScan || [],
    emailScan: payload.emailScan || {},
    phoneScan: payload.phoneScan || {},
  });

  // Return both for transparency
  return res.json({
    success: true,
    legacy,
    enhanced,
  });
};
