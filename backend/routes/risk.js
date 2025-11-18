const router = require("express").Router();
const { computeRisk } = require("../controllers/riskController");
const { validateInput } = require("../utils/validator");

router.post("/", (req, res) => {
  // Expect breachResults, exposureResults, fakeResults OR inputs
  const body = req.body || {};
  // If no results provided, allow API to compute from inputs (optional)
  const err = validateInput(body);
  if (err && !body.breachResults && !body.exposureResults && !body.fakeResults) {
    return res.status(400).json({ success: false, message: err });
  }
  return computeRisk(req, res);
});

module.exports = router;
