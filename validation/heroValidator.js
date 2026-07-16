const { body, validationResult } = require("express-validator");

const heroRules = () => [
    body("name").notEmpty().withMessage("Name is required"),
    body("realName").notEmpty().withMessage("Real name is required"),
    body("team").notEmpty().withMessage("Team is required"),
    body("power").notEmpty().withMessage("Power is required"),
    body("firstAppearance").notEmpty().withMessage("First appearance is required"),
    body("universe").notEmpty().withMessage("Universe is required"),
    body("actor").notEmpty().withMessage("Actor is required"),
    body("isAlive").isBoolean().withMessage("isAlive must be true or false")
];

const checkValidation = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    next();
};

module.exports = {
    heroRules,
    checkValidation
};