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
    heroRules(),
    checkValidation,
    heroesController.createHero
);

router.put(
    "/:id",
    heroRules(),
    checkValidation,
    heroesController.updateHero
);

router.delete("/:id", heroesController.deleteHero);

module.exports = router;