var express = require("express");
var router = express.Router();
var edamam = require("./edamam.js")

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
  router.get("/food", function(req, res) {
    edamam.getFood('https://api.edamam.com/api/food-database/parser?ingr=coconut%20yogurt&app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338')
  });

  // POST route for saving a new post
  router.get("/newfood", function(req, res) {
    edamam.foodResults("http://www.edamam.com/ontologies/edamam.owl#Food_28309")
  });

  router.get("/home", function(req, res) {
    res.render("index");
  });

  router.get("/what_is", function(req, res) {
    res.render("partials/home/whatis");
  });


  router.get("/user_account", function(req, res) {
    res.render("partials/user/user_account");
  });

// Export routes for server.js to use.
module.exports = router;