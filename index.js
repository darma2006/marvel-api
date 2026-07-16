require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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



app.use("/", require("./routes"));
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Marvel API!"
  });
});



const PORT = process.env.PORT || 8080;

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
