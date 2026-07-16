const mongoose = require("mongoose");

const db = {};

db.mongoose = mongoose;

db.heroes = require("./heroes")(mongoose);
db.movies = require("./movies")(mongoose);

module.exports = db;