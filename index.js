require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const session = require("express-session");
const passport = require("passport");
require("./config/passport");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "marvelSecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const db = require("./models");
const dbConfig = require("./config/db");

db.mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ Cannot connect to MongoDB:", err);
    process.exit();
  });




const PORT = process.env.PORT || 8080;

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use("/", require("./routes"));
app.use("/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Marvel API!"
  });
});
app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: "You are not logged in."
    });
  }

  res.json({
    message: "Login successful!",
    user: req.user
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
