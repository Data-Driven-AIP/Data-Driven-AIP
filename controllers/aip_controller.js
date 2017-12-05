var express = require("express");
var router = express.Router();
var db = ("../models");


  // GET route for getting all of the posts
  router.get("/", function(req, res) {
    db.AIPNutrition.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get rotue for retrieving a single post
  router.get("/aip", function(req, res) {
    db.AIPNutrition.findOne({}).then(function(dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  router.post("/food", function(req, res) {
    edamam.getFood('https://api.edamam.com/api/food-database/parser?ingr=coconut%20yogurt&app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338')
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });


// Export routes for server.js to use.
module.exports = router;