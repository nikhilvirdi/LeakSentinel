// services/emailOSINT.js
const crypto = require("crypto");
const axios = require("axios");

exports.emailOSINT = async (email) => {
  const normalized = (email || "").trim().toLowerCase();
  const hash = crypto.createHash("md5").update(normalized).digest("hex");
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?d=404`;
  let gravatarExists = false;

  try {
    const r = await axios.get(gravatarUrl, { timeout: 2000, validateStatus: null });
    if (r.status === 200) gravatarExists = true;
  } catch (e) {
    gravatarExists = false;
  }

  const domain = (normalized.split("@")[1] || "").toLowerCase();
  const isCommonProvider = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com"].includes(domain);

  return {
    email: normalized,
    gravatarExists,
    domain,
    isCommonProvider,
  };
};
