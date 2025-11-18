// naive similarity for username comparison (simple ratio)
exports.similarity = (a = "", b = "") => {
  a = (a || "").toLowerCase();
  b = (b || "").toLowerCase();
  if (!a.length || !b.length) return 0;
  const min = Math.min(a.length, b.length);
  let matches = 0;
  for (let i = 0; i < min; i++) if (a[i] === b[i]) matches++;
  return matches / Math.max(a.length, b.length);
};
