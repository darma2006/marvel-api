const authenticate = require("../middleware/authenticate");
const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroes");

const {
    heroRules,
    checkValidation
} = require("../validation/heroValidator");

router.get("/", heroesController.getAll);

router.get("/:id", heroesController.getSingle);

// #swagger.security = [{
//   "googleAuth": []
// }]
router.post(
  "/",
  authenticate,
  heroRules(),
  checkValidation,
  heroesController.createHero
);

// #swagger.security = [{
//   "googleAuth": []
// }]
router.put(
  "/:id",
  authenticate,
  heroRules(),
  checkValidation,
  heroesController.updateHero
);

// #swagger.security = [{
//   "googleAuth": []
// }]
router.delete(
  "/:id",
  authenticate,
  heroesController.deleteHero
);

module.exports = router;