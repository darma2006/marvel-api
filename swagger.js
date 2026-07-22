const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Marvel API",
    description: "CRUD API for Marvel Heroes and Movies",
    version: "1.0.0"
  },
  host: "marvel-api-13cc.onrender.com",
  schemes: ["https"],

  securityDefinitions: {
    googleAuth: {
      type: "oauth2",
      authorizationUrl: "/auth/google",
      flow: "implicit"
    }
  }
};

const outputFile = "./swagger.json";

const endpointsFiles = [
  "./routes/index.js",
  "./routes/heroes.js",
  "./routes/movies.js",
  "./routes/auth.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);