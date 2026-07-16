const { body, validationResult } = require("express-validator");

const movieRules = () => {
  return [
    body("title").notEmpty().withMessage("Title is required"),
    body("releaseYear").isNumeric().withMessage("Release year must be a number"),
    body("director").notEmpty().withMessage("Director is required"),
    body("phase").isNumeric().withMessage("Phase must be a number"),
    body("duration").isNumeric().withMessage("Duration must be a number"),
    body("rating").isNumeric().withMessage("Rating must be a number"),
    body("boxOffice").notEmpty().withMessage("Box Office is required")
  ];
};

const checkValidation = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  next();
};

module.exports = {
  movieRules,
  checkValidation
};