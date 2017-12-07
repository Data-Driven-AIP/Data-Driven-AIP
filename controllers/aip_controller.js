var express = require("express");
var router = express.Router();
var edamam = require("./edamam.js")
var db = require("../models");

/*  // GET route for getting all of the posts
  router.get("/aipsearch", function(req, res) {
    db.AIPNutrition.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

    // Find All Records based on nutritional filters
  router.get("/aip_topnutrients", function(req, res) {
    let nutrient = req.param.nutrient
    db.AIPNutrition.findAll({
          where: nutrient,
          limit: 25
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });*/

  // Find All Records based on nutritional filters
  router.get("/aip_filtered", function(req, res) {
    let filters = {
/*      DAIRY_FREE: true, 
        FISH_FREE: true*/
      }
    db.AIPNutrition.findAll({
          where: filters,
          limit: 25
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  router.get("/food", function(req, res) {
    
    edamam.getFood('https://api.edamam.com/api/food-database/parser?ingr=coconut%20yogurt&app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338')
    res.render("partials/home/food");
  });

  // POST route for saving a new post
  router.get("/newfood", function(req, res) {
    edamam.foodResults("http://www.edamam.com/ontologies/edamam.owl#Food_28309")
  });

  router.get("/home", function(req, res) {
    res.render("index");
  });

  // router.get("/test", function(req, res) {
  //   res.render("partials/home/food");
  // });

  router.get("/what_is", function(req, res) {
    res.render("partials/home/whatis");
  });


  router.get("/user_account", function(req, res) {
    res.render("partials/user/user_account");
  });

// Export routes for server.js to use.
module.exports = router;