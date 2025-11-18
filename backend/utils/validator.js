exports.validateInput = ({ email, phone, username }) => {
  const e = (email || "").toString().trim();
  const p = (phone || "").toString().trim();
  const u = (username || "").toString().trim();

  if (!e && !p && !u) {
    return "Provide at least one input: email, phone, or username.";
  }

  // basic email format check if present
  if (e && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
    return "Invalid email format.";
  }

  // basic phone sanity
  if (p && !/^[\d+\-\s()]{7,20}$/.test(p)) {
    return "Invalid phone format.";
  }

  // username constraints
  if (u && u.length < 2) {
    return "Username too short.";
  }

  return null;
};
