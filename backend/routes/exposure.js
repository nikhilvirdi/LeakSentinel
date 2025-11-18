const router = require("express").Router();
const { checkExposures } = require("../controllers/exposureController");
const { validateInput } = require("../utils/validator");

router.post("/", (req, res, next) => {
  const err = validateInput(req.body);
  if (err) return res.status(400).json({ success: false, message: err });
  return checkExposures(req, res, next);
});

module.exports = router;
