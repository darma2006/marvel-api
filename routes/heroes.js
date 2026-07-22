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

router.post(
  "/",
  authenticate,
  heroRules(),
  checkValidation,
  heroesController.createHero
);

router.put(
  "/:id",
  authenticate,
  heroRules(),
  checkValidation,
  heroesController.updateHero
);

router.delete(
  "/:id",
  authenticate,
  heroesController.deleteHero
);

module.exports = router;