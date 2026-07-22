const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const moviesController = require("../controllers/movies");

const {
  movieRules,
  checkValidation
} = require("../validation/movieValidator");

router.get("/", moviesController.getAll);

router.get("/:id", moviesController.getSingle);

router.post(
  "/",
  authenticate,
  movieRules(),
  checkValidation,
  moviesController.createMovie
);

router.put(
  "/:id",
  authenticate,
  movieRules(),
  checkValidation,
  moviesController.updateMovie
);

router.delete(
  "/:id",
  authenticate,
  moviesController.deleteMovie
);

module.exports = router;