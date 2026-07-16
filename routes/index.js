const router = require("express").Router();

router.use("/heroes", require("./heroes"));
router.use("/movies", require("./movies"));

module.exports = router;