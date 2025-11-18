const router = require("express").Router();
const { checkBreaches } = require("../controllers/breachController");
const { validateInput } = require("../utils/validator");

router.post("/", (req, res, next) => {
  const err = validateInput(req.body);
  if (err) return res.status(400).json({ success: false, message: err });
  return checkBreaches(req, res, next);
});

module.exports = router;
