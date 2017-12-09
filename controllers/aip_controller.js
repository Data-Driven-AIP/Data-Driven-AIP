var express = require("express");
var router = express.Router();
var edamam = require("./edamam.js")
var db = require("../models");
let attrs = [
        "FOOD",
        "QUANTITY",
        "MEASURE"
]

let nutrients = [
        "ENERC_KCAL_QUANTITY",
        "ENERC_KCAL_UNIT",
        "FAT_QUANTITY",
        "FAT_UNIT",
        "FASAT_QUANTITY",
        "FASAT_UNIT",
        "FAMS_QUANTITY",
        "FAMS_UNIT",
        "FAPU_QUANTITY",
        "FAPU_UNIT",
        "CHOCDF_QUANTITY",
        "CHOCDF_UNIT",
        "FIBTG_QUANTITY",
        "FIBTG_UNIT",
        "SUGAR_QUANTITY",
        "SUGAR_UNIT",
        "PROCNT_QUANTITY",
        "PROCNT_UNIT",
        "NA_QUANTITY",
        "NA_UNIT",
        "CA_QUANTITY",
        "CA_UNIT",
        "MG_QUANTITY",
        "MG_UNIT",
        "K_QUANTITY",
        "K_UNIT",
        "FE_QUANTITY",
        "FE_UNIT",
        "ZN_QUANTITY",
        "ZN_UNIT",
        "P_QUANTITY",
        "P_UNIT",
        "VITA_RAE_QUANTITY",
        "VITA_RAE_UNIT",
        "VITC_QUANTITY",
        "VITC_UNIT",
        "THIA_QUANTITY",
        "THIA_UNIT",
        "RIBF_QUANTITY",
        "RIBF_UNIT",
        "NIA_QUANTITY",
        "NIA_UNIT",
        "VITB6A_QUANTITY",
        "VITB6A_UNIT",
        "FOLDFE_QUANTITY",
        "FOLDFE_UNIT",
        "FOLFD_QUANTITY",
        "FOLFD_UNIT",
        "TOCPHA_QUANTITY",
        "TOCPHA_UNIT",
        "VITK1_QUANTITY",
        "VITK1_UNIT"]

  // GET route for getting all of the posts
/*  router.get("/aipsearch", function(req, res) {
    db.AIPNutrition.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });
*/
    // Find All Records based on nutrient of interest and
    //returns top 25 with highest values.
  router.get("/aip_topnutrients", function(req, res) {
    let nutrient = req.param.nutrient
    attrs.push(nutrient)
    db.AIPNutrition.findAll({
          where: nutrient > 0,
          order: sequelize.nutrient('max(nutrient) DESC'),
          limit: 25
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Find All Records based on nutritional filters
  router.get("/aip_filtered", function(req, res) {
    const trueProps = ["TREE_NUT_FREE"]
    let filters = {}
    trueProps.forEach(function(prop) {
      filters[prop] = true
    })
    
    db.AIPNutrition.findAll({
      attributes: attrs.concat(nutrients),
          where: filters,
          limit: 25
    }).then(function(dbPost) {
      console.log(dbPost)
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