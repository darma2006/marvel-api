const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies");

const {
  movieRules,
  checkValidation
} = require("../validation/movieValidator");

router.get("/", moviesController.getAll);

router.get("/:id", moviesController.getSingle);

router.post(
  "/",
  movieRules(),
  checkValidation,
  moviesController.createMovie
);

router.put(
  "/:id",
  movieRules(),
  checkValidation,
  moviesController.updateMovie
);

router.delete("/:id", moviesController.deleteMovie);

module.exports = router;