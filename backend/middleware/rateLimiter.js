// tiny in-memory rate limiter for demo/hackathon use
const max = parseInt(process.env.RATE_LIMIT_MAX || "200", 10);
const windowMs = 60 * 1000; // 1 minute
const store = new Map();

module.exports = (req, res, next) => {
  try {
    const ip = req.ip || req.connection.remoteAddress || "anon";
    const now = Date.now();
    const entry = store.get(ip) || { count: 0, start: now };
    if (now - entry.start > windowMs) {
      entry.count = 0;
      entry.start = now;
    }
    entry.count++;
    store.set(ip, entry);
    if (entry.count > max) {
      return res.status(429).json({ success: false, message: "Too many requests - slow down." });
    }
    next();
  } catch (err) {
    // fail open
    next();
  }
};
