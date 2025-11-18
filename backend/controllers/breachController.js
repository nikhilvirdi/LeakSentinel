const fs = require("fs");
const path = require("path");
const { logScan } = require("../utils/logger");

const dataPath = path.join(__dirname, "..", "data", "breach_dump.json");
let breaches = [];
try {
  breaches = JSON.parse(fs.readFileSync(dataPath, "utf8"));
} catch (e) {
  console.warn("Could not load breach_dump.json", e.message);
}

exports.checkBreaches = (req, res) => {
  const { email = "", phone = "" } = req.body;
  logScan("breach-check", { email, phone });

  const found = breaches.filter((b) => {
    try {
      const be = (b.email || "").toLowerCase();
      const e = (email || "").toLowerCase();
      return (email && be === e) || (phone && b.phone === phone);
    } catch (err) {
      return false;
    }
  });

  return res.json({ success: true, count: found.length, found });
};
