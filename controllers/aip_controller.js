var express = require("express");
var router = express.Router();
var edamam = require("./edamam.js")
var db = require("../models");
let attrs = [
        "FOOD",
        "QUANTITY",
        "MEASURE"
]

//Adding from edamam.js
const axios = require("axios");

var htmlHeader = '<!-- This is for the user account page. This is unique to each user --><!-- Link to jQueryUI css --><link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"><!-- Linking to foundation.css --><link rel="stylesheet" href="/assets/css/foundation.min.css"><!-- Linking to our custom css --><link rel="stylesheet" href="/assets/css/app.css"><!-- Latest compiled and minified CSS --><style type="text/css">body{background-image: url("../assets/image/fruit-min.jpg");background-repeat: no-repeat;background-size: 100%;}</style><!-- Nav Bar --><nav class="top-bar" id="nav"><div class="top-bar-left"><h3 id="navButtons">  <img src="/assets/image/logo.png" width="80" alt="logo"></h3></div><div class="top-bar-right"><ul class="dropdown menu" data-dropdown-menu><!-- Drop down menu --><li  id="navButtons"><a href="#">My Account</a><ul class="menu vertical align-center"><li class="hvr-underline-from-center dropDownList"><a href="/user_account">Profile</a></li> <li class="hvr-underline-from-center dropDownList"><a href="/logout">Logout</a></li></ul></li><li class="hvr-underline-from-center" id="navButtons"><a href="/food">Food</a></li><li class="hvr-underline-from-center" id="navButtons"><a href="/">Home</a></li></ul></div></nav><h3 class="text-center">Search for Food</h3><section class="grid-x"><div class="medium-3 cell"></div><div class="medium-4 cell"><input type="search" name="food" id="foodSearch" onkeypress="return" placeholder="Search.." class="animated-search-form"></div></section><!-- This section needs to be dynamicly changing the height based on screen size --><section class="grid-container"><div class="grid-x grid-padding-x mainContent"><!-- Main Section --><div class="medium-11 large-11 cell" id="noteBox">'

var footer = '</div></div></section><!-- Footer --><footer class="footer"><section class="wrapper"><p> &#169; Data Driven AIP Group 2017 </p></section></footer><!-- jQuery --><script src="https://code.jquery.com/jquery-1.12.4.js"></script><script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script><!-- Linking to foundation js files --><script src="/assets/js/vendor/what-input.js"></script><script src="/assets/js/vendor/foundation.min.js"></script><!-- Linking to our custom js --><script src="/assets/js/app.js"></script>'

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
    res.send(htmlHeader + footer)
  });

  // POST route for saving a new post
  router.get("/food/:food", function(req, res) {
    var appId = "&app_id=70222cca"
    var appKey = "&app_key=611d05090fd131a9426b4014c000b338"
    var query = 'https://api.edamam.com/api/food-database/parser?ingr=' + req.params.food
    var fullRequest = query + appId + appKey

    //Adding from Edamam.js
    function getFood(url) {
      var foodlist = ""
      var count = 1;
      axios
        .get(url)
        .then(function(response) {
          console.log("======================================\nResponse Data: \n=========================")
          console.log(response.data.hints[0].food)
          response.data.hints.forEach(hint => {
            console.log(hint.food.uri)
            console.log(hint.food.label)


              if (count <= 5){
                foodlist += '<section class="note divResize card-info primary ' + count +'" id="foodCards" ><div class="card-info-content"</div><p>' + hint.food.label + '</p><div class="card-footer grid-container" id="foodFooter"><button class="hollow button success small notebutton" id="openFood" data-open="foodDetail'+ count + '"><p>Details</p></button><button class="hollow button alert small notebutton" id="deleteFood" name="'+ count +'"><p>Delete</p></button></div></section><div class="reveal" id="foodDetail'+count+'" data-reveal><h3>Nutrition Data of ' + hint.food.label + '</h3><button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span></button></div>'

                count ++
              } else if (count <= 10){

                foodlist += '<section class="note divResize card-info primary ' + count +'" id="foodCards" ><div class="card-info-content"</div><p>' + hint.food.label + '</p><div class="card-footer grid-container" id="foodFooter"><button class="hollow button success small notebutton" id="openFood" data-open="foodDetail'+ count + '"><p>Details</p></button><button class="hollow button alert small notebutton" id="deleteFood" name="'+ count +'"><p>Delete</p></button></div></section><div class="reveal" id="foodDetail'+count+'" data-reveal><h3>Nutrition Data of ' + hint.food.label + '</h3><button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span></button></div>'

                count ++
              } else if (count <= 15){

                foodlist += '<section class="note divResize card-info primary ' + count +'" id="foodCards" ><div class="card-info-content"</div><p>' + hint.food.label + '</p><div class="card-footer grid-container" id="foodFooter"><button class="hollow button success small notebutton" id="openFood" data-open="foodDetail'+ count + '"><p>Details</p></button><button class="hollow button alert small notebutton" id="deleteFood" name="'+ count +'"><p>Delete</p></button></div></section><div class="reveal" id="foodDetail'+count+'" data-reveal><h3>Nutrition Data of ' + hint.food.label + '</h3><button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span></button></div>'

                count ++
              } else if (count <= 20){

                foodlist += '<section class="note divResize card-info primary ' + count +'" id="foodCards" ><div class="card-info-content"</div><p>' + hint.food.label + '</p><div class="card-footer grid-container" id="foodFooter"><button class="hollow button success small notebutton" id="openFood" data-open="foodDetail'+ count + '"><p>Details</p></button><button class="hollow button alert small notebutton" id="deleteFood" name="'+ count +'"><p>Delete</p></button></div></section><div class="reveal" id="foodDetail'+count+'" data-reveal><h3>Nutrition Data of ' + hint.food.label + '</h3><button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span></button></div>'

                count ++
              } else if (count <= 25){

                foodlist += '<section class="note divResize card-info primary ' + count +'" id="foodCards" ><div class="card-info-content"</div><p>' + hint.food.label + '</p><div class="card-footer grid-container" id="foodFooter"><button class="hollow button success small notebutton" id="openFood" data-open="foodDetail'+ count + '"><p>Details</p></button><button class="hollow button alert small notebutton" id="deleteFood" name="'+ count +'"><p>Delete</p></button></div></section><div class="reveal" id="foodDetail'+count+'" data-reveal><h3>Nutrition Data of ' + hint.food.label + '</h3><button class="close-button" data-close aria-label="Close modal" type="button"><span aria-hidden="true">&times;</span></button></div>'

                count ++
              }

          })
          res.send(htmlHeader + foodlist + footer);
      });
    }

    //copying from Edamam.js
    function foodParser(response) {
        //Meta data about the food item from the edamam database
        let values = {
            URI: response.uri,
            FOOD: response.ingredients[0].parsed[0].food,
            QUANTITY: response.ingredients[0].parsed[0].quantity,
            MEASURE: response.ingredients[0].parsed[0].measure,
            FOODID: response.ingredients[0].parsed[0].foodId,
            FOODURI: response.ingredients[0].parsed[0].foodURI,
            WEIGHT: response.ingredients[0].parsed[0].weight,
            RETAINED_WEIGHT: response.ingredients[0].parsed[0].weight,
            MEASURE_URI: response.ingredients[0].parsed[0].measureURI
        }
        //Adds nutrient info
        for (var nutrient in response.totalNutrients) {
            values[nutrient+"_QUANTITY"] = response.totalNutrients[nutrient].quantity
            values[nutrient+"_UNIT"] = response.totalNutrients[nutrient].unit
        }
        //Adds health labels
        response.healthLabels.forEach(label => {
            values[label] = true;
        })
        return insertFood(values);
    }

    function foodResults(url) {
      axios
        .post('https://api.edamam.com/api/food-database/nutrients?app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338', {
          "yield": 1,
          "ingredients": [
            {
              "quantity": 100, //keep constant
              "measureURI": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram", //keep constant
              "foodURI": url //foodId URL
            }
          ]
        })
        .then(response => {
          foodParser(response.data)
          
        })
        .catch(error => {
          console.log(error);
      });
    }

    function insertFood(values) {
        db.AIPNutrition.create({
            values
        })
        getFood(fullRequest)
    }

    function getResult(result) {
        console.log(result)
    }


    function getFoodId(fullRequest){
      axios
      .get(fullRequest)
    .then(response => {
      foodResults(response.data.parsed[0].food.uri)
    })
  }
  getFoodId(fullRequest)
  });

  router.get("/", function(req, res) {
    res.render("index");
  })

  router.get("/what_is", function(req, res) {
    res.render("partials/home/whatis");
  });


  router.get("/user_account", function(req, res) {
    res.render("partials/user/user_account");
  });

// Export routes for server.js to use.
module.exports = router;