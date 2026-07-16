const { body, validationResult } = require("express-validator");

const heroValidationRules = () => {
  return [

    body("name")
      .notEmpty()
      .withMessage("Hero name is required"),

    body("realName")
      .notEmpty()
      .withMessage("Real name is required"),

    body("team")
      .notEmpty()
      .withMessage("Team is required"),

    body("power")
      .notEmpty()
      .withMessage("Power is required"),

    body("firstAppearance")
      .notEmpty()
      .withMessage("First appearance is required"),

    body("isAlive")
      .isBoolean()
      .withMessage("isAlive must be true or false"),

    body("universe")
      .notEmpty()
      .withMessage("Universe is required"),

    body("actor")
      .notEmpty()
      .withMessage("Actor is required")

  ];
};

const validate = (req, res, next) => {

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({
    errors: errors.array()
  });

};

module.exports = {
  heroValidationRules,
  validate
};