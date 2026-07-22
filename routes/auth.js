const router = require("express").Router();
const passport = require("passport");


// #swagger.tags = ['Authentication']
// #swagger.summary = 'Login with Google'
// Login with Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);


// #swagger.tags = ['Authentication']
// #swagger.summary = 'Google OAuth callback'
// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/profile",
  })
);


// #swagger.tags = ['Authentication']
// #swagger.summary = 'Logout'
// Logout
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;