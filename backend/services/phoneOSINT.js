// services/phoneOSINT.js
// Small helper for phone checks (mocked data for demo)
const knownSpam = ["9999999999", "8887776666", "911"];

exports.phoneOSINT = (phone) => {
  const cleaned = (phone || "").replace(/\D/g, "");
  return {
    phone: cleaned,
    isValid: cleaned.length >= 10,
    isSpamReported: knownSpam.includes(cleaned),
    carrier: null // placeholder for a future carrier lookup integration
  };
};
