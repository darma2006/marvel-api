const { body, validationResult } = require("express-validator");

const teamValidationRules = () => {
  return [

    body("teamName")
      .notEmpty()
      .withMessage("Team name is required"),

    body("leader")
      .notEmpty()
      .withMessage("Leader is required"),

    body("headquarters")
      .notEmpty()
      .withMessage("Headquarters is required"),

    body("members")
      .isInt({ min: 1 })
      .withMessage("Members must be a positive number")

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
  teamValidationRules,
  validate
};
