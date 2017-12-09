module.exports = {
    getFood,
    foodParser,
    foodResults,
    insertFood,
    getResult,
    html
}
var html = ""
const axios = require("axios");
var mysql = require('mysql');
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

    /*Get request to edamam to get list of food items matching search queries*/
    //const url = 'https://api.edamam.com/api/food-database/parser?ingr=coconut%20yogurt&app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338'
    function getFood(url) {
      axios
        .get(url)
        .then(function(response) {
          response.data.hints.forEach(hint => {
            console.log(hint.food.uri)
            console.log(hint.food.label)
            html += "<p>"+ hint.food.label + "</p><br>"
            
          })
          return html;  
      });
    }

    /*"http://www.edamam.com/ontologies/edamam.owl#Food_12104"*/
    /*Post request to EDAMAM to get information from food item.*/
    /*const url = "https://api.edamam.com/api/food-database/nutrients?app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338";
    build this URL and store the API and App keys*/

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

          return foodParser(response.data);
        })
        .catch(error => {
          console.log(error);
      });
    }

    function insertFood(values) {
        db.AIPNutrition.create({
            values
        })
    }

    function getResult(result) {
        console.log(result)
    }

/*foodResults("http://www.edamam.com/ontologies/edamam.owl#Food_12108")
getFood('https://api.edamam.com/api/food-database/parser?ingr=coconut%20yogurt&app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338')*/







