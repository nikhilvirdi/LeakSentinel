const fs = require("fs");
const path = require("path");
const { scanUsername } = require("../services/usernameOSINT");
const { logScan } = require("../utils/logger");

const exposuresPath = path.join(__dirname, "..", "data", "exposure_sites.json");
const fakesPath = path.join(__dirname, "..", "data", "fake_accounts.json");

let exposures = [];
let fakes = [];

try {
  exposures = JSON.parse(fs.readFileSync(exposuresPath, "utf8"));
} catch (e) {
  console.warn("Could not load exposure_sites.json", e.message);
}

try {
  fakes = JSON.parse(fs.readFileSync(fakesPath, "utf8"));
} catch (e) {
  console.warn("Could not load fake_accounts.json", e.message);
}

exports.checkExposures = async (req, res) => {
  const { username = "", email = "", phone = "" } = req.body;
  logScan("exposure-check", { username, email, phone });

  // local dataset match
  const foundExposures = exposures.filter((e) => {
    try {
      const ue = (e.username || "").toLowerCase();
      return (username && ue === username.toLowerCase()) ||
        (email && e.email && e.email.toLowerCase() === email.toLowerCase()) ||
        (phone && e.phone && e.phone === phone);
    } catch (err) {
      return false;
    }
  });

  const foundFakes = fakes.filter((f) => {
    try {
      const fu = (f.username || "").toLowerCase();
      return username && fu === username.toLowerCase();
    } catch (err) {
      return false;
    }
  });

  // OSINT username scanning (non-blocking fail-safe)
  let usernameScan = [];
  if (username) {
    try {
      usernameScan = await scanUsername(username);
    } catch (err) {
      // if the external scans fail, keep going with local results
      usernameScan = [];
    }
  }

  return res.json({
    success: true,
    exposures: foundExposures,
    fakes: foundFakes,
    usernameScan,
  });
};
