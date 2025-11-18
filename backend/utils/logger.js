exports.logScan = (type, payload) => {
  // lightweight structured log for demo (append to file later if needed)
  const ts = new Date().toISOString();
  console.log(`[${ts}] [SCAN:${type}]`, JSON.stringify(payload));
};
