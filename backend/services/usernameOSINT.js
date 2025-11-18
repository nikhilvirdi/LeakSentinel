// services/usernameOSINT.js
// Lightweight username existence checks (head requests) across common platforms.
// NOTE: This approach uses simple GET requests and checks status codes. Respect rate limits.

const axios = require("axios");

const SITES = [
  { name: "GitHub", url: (u) => `https://github.com/${u}` },
  { name: "Reddit", url: (u) => `https://www.reddit.com/user/${u}` },
  { name: "Instagram", url: (u) => `https://www.instagram.com/${u}` },
  { name: "TikTok", url: (u) => `https://www.tiktok.com/@${u}` },
  { name: "Steam", url: (u) => `https://steamcommunity.com/id/${u}` },
  { name: "Twitch", url: (u) => `https://twitch.tv/${u}` }
];

const timeout = 3000;

async function probe(url) {
  try {
    const r = await axios.get(url, { timeout, maxRedirects: 2, validateStatus: null });
    return r.status;
  } catch (err) {
    return null;
  }
}

exports.scanUsername = async (username) => {
  const results = [];
  for (const site of SITES) {
    const profileUrl = site.url(username);
    const status = await probe(profileUrl);
    results.push({
      platform: site.name,
      profileUrl,
      exists: status === 200,
      status,
    });
  }
  return results;
};
