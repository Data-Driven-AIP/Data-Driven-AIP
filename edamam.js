const axios = require("axios");
var mysql = require('mysql');

/*Get request to edamam to get list of food items matching search queries*/
//const url = 'https://api.edamam.com/api/food-database/parser?ingr=coconut%20yogurt&app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338'
function getFood(url) {
  axios
    .get(url)
    .then(function(response) {
      response.data.hints.forEach(hint => {
        console.log(hint.food.uri)
        console.log(hint.food.label)
      })
  });
}

"http://www.edamam.com/ontologies/edamam.owl#Food_12104"
/*Post request to EDAMAM to get information from food item.*/
/*const url = "https://api.edamam.com/api/food-database/nutrients?app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338";
build this URL and store the API and App keys*/
function foodResults(url) {
  axios
    .post("https://api.edamam.com/api/food-database/nutrients?app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338", {
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

function insertFood(values) {

    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sqlString = "INSERT INTO fooddb SET ?"
        var replacementVariables = values
        function finishedCallback (err, res) {
            connection.end()
        }
/*        connection.query('SELECT * from fooddb', function(error, response) {
            console.log(response)
        })*/
        connection.query(sqlString, replacementVariables, function(error, result, fields) {
        if (error) throw error;
        connection.end()  
        })
    // logs the actual query being run

    });
}

function getResult(result) {
    console.log(result)
}
foodResults("http://www.edamam.com/ontologies/edamam.owl#Food_12108")
getFood('https://api.edamam.com/api/food-database/parser?ingr=coconut%20yogurt&app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338')
//------------------------------------
/*var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("fooddb", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});*/
//------------------------------------

/*connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});*/




