const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Marvel API",
    description: "CRUD API for Marvel Heroes and Movies",
    version: "1.0.0"
  },
  host: "marvel-api-13cc.onrender.com",
  schemes: ["https"]
};

const outputFile = "./swagger.json";

const endpointsFiles = [
  "./routes/index.js",
  "./routes/heroes.js",
  "./routes/movies.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);