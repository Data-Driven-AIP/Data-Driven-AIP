module.exports = {

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

    /*"http://www.edamam.com/ontologies/edamam.owl#Food_12104"*/
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
        db.AIPNutrition.create({
        URI: values.URI,
        FOOD: values.FOOD,
        QUANTITY: values.QUANTITY,
        MEASURE: values.MEASURE,
        FOODID: values.FOODID,
        FOODURI: values.FOODURI,
        WEIGHT: values.WEIGHT,
        RETAINED_WEIGHT: values.RETAINED_WEIGHT,
        MEASURE_URI: values.MEASURE_URI,
        ENERC_KCAL_QUANTITY: values.ENERC_KCAL_QUANTITY,
        ENERC_KCAL_UNIT: values.ENERC_KCAL_UNIT,
        FAT_QUANTITY: values.FAT_QUANTITY,
        FAT_UNIT: values.FAT_UNIT,
        FASAT_QUANTITY: values.FASAT_QUANTITY,
        FASAT_UNIT: values.FASAT_UNIT,
        FAMS_QUANTITY: values.FAMS_QUANTITY,
        FAMS_UNIT: values.FAMS_UNIT,
        FAPU_QUANTITY: values.FAPU_QUANTITY,
        FAPU_UNIT: values.FAPU_UNIT,
        CHOCDF_QUANTITY: values.CHOCDF_QUANTITY,
        CHOCDF_UNIT: values.CHOCDF_UNIT,
        FIBTG_QUANTITY: values.FIBTG_QUANTITY,
        FIBTG_UNIT: values.FIBTG_UNIT,
        SUGAR_QUANTITY: values.SUGAR_QUANTITY,
        SUGAR_UNIT: values.SUGAR_UNIT,
        PROCNT_QUANTITY: values.PROCNT_QUANTITY,
        PROCNT_UNIT: values.PROCNT_UNIT,
        NA_QUANTITY: values.NA_QUANTITY,
        NA_UNIT: values.NA_UNIT,
        CA_QUANTITY: values.CA_QUANTITY,
        CA_UNIT: values.CA_UNIT,
        MG_QUANTITY: values.MG_QUANTITY,
        MG_UNIT: values.MG_UNIT,
        K_QUANTITY: values.K_QUANTITY,
        K_UNIT: values.K_UNIT,
        FE_QUANTITY: values.FE_QUANTITY,
        FE_UNIT: values.FE_UNIT,
        ZN_QUANTITY: values.ZN_QUANTITY,
        ZN_UNIT: values.ZN_UNIT,
        P_QUANTITY: values.P_QUANTITY,
        P_UNIT: values.P_UNIT,
        VITA_RAE_QUANTITY: values.VITA_RAE_QUANTITY,
        VITA_RAE_UNIT: values.VITA_RAE_UNIT,
        VITC_QUANTITY: values.VITC_QUANTITY,
        VITC_UNIT: values.VITC_UNIT,
        THIA_QUANTITY: values.THIA_QUANTITY,
        THIA_UNIT: values.THIA_UNIT,
        RIBF_QUANTITY: values.RIBF_QUANTITY,
        RIBF_UNIT: values.RIBF_UNIT,
        NIA_QUANTITY: values.NIA_QUANTITY,
        NIA_UNIT: values.NIA_UNIT,
        VITB6A_QUANTITY: values.VITB6A_QUANTITY,
        VITB6A_UNIT: values.VITB6A_UNIT,
        FOLDFE_QUANTITY: values.FOLDFE_QUANTITY,
        FOLDFE_UNIT: values.FOLDFE_UNIT,
        FOLFD_QUANTITY: values.FOLFD_QUANTITY,
        FOLFD_UNIT: values.FOLFD_UNIT,
        TOCPHA_QUANTITY: values.TOCPHA_QUANTITY,
        TOCPHA_UNIT: values.TOCPHA_UNIT,
        VITK1_QUANTITY: values.VITK1_QUANTITY,
        VITK1_UNIT: values.VITK1_UNIT,
        ALCOHOL_FREE: values.ALCOHOL_FREE,
        CELERY_FREE: values.CELERY_FREE,
        CRUSTACEAN_FREE: values.CRUSTACEAN_FREE,
        DAIRY_FREE: values.DAIRY_FREE,
        EGG_FREE: values.EGG_FREE,
        FISH_FREE: values.FISH_FREE,
        GLUTEN_FREE: values.GLUTEN_FREE,
        KIDNEY_FRIENDLY: values.KIDNEY_FRIENDLY,
        KOSHER: values.KOSHER,
        LOW_POTASSIUM: values.LOW_POTASSIUM,
        LUPINE_FREE: values.LUPINE_FREE,
        MUSTARD_FREE: values.MUSTARD_FREE,
        LOW_FAT_ABS: values.LOW_FAT_ABS,
        NO_OIL_ADDED: values.NO_OIL_ADDED,
        LOW_SUGAR: values.LOW_SUGAR,
        PALEO: values.PALEO,
        PEANUT_FREE: values.PEANUT_FREE,
        PESCATARIAN: values.PESCATARIAN,
        PORK_FREE: values.PORK_FREE,
        RED_MEAT_FREE: values.RED_MEAT_FREE,
        SESAME_FREE: values.SESAME_FREE,
        SHELLFISH_FREE: values.SHELLFISH_FREE,
        SOY_FREE: values.SOY_FREE,
        SUGAR_CONCIOUS: values.SUGAR_CONCIOUS,
        TREE_NUT_FREE: values.TREE_NUT_FREE,
        VEGAN: values.VEGAN,
        VEGETARIAN: values.VEGETARIAN,
        WHEAT_FREE: values.WHEAT_FREE,
        NIGHTSHADE: values.NIGHTSHADE,
        SPECIFIC_CARBS: values.SPECIFIC_CARBS,
        MILK_FREE: values.MILK_FREE,
        MOLLUSK_FREE: values.MOLLUSK_FREE,
        NO_SUGAR_ADDED: values.NO_SUGAR_ADDED,
        PLANTRICIOUS: values.PLANTRICIOUS,
        FAT_FREE: values.FAT_FREE,
        BALANCED: values.BALANCED,
        HIGH_FIBER: values.HIGH_FIBER,
        HIGH_PROTEIN: values.HIGH_PROTEIN,
        LOW_CARB: values.LOW_CARB,
        LOW_FAT: values.LOW_FAT,
        LOW_SODIUM: values.LOW_SODIUM
        })
    }

    function getResult(result) {
        console.log(result)
    }

}
/*foodResults("http://www.edamam.com/ontologies/edamam.owl#Food_12108")
getFood('https://api.edamam.com/api/food-database/parser?ingr=coconut%20yogurt&app_id=70222cca&app_key=611d05090fd131a9426b4014c000b338')*/







