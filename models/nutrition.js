'use strict'

module.exports = (sequelize, DataTypes) => {  
  const AIPNutrition = sequelize.define('AIPNutrition', {
  ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  URI: {
      type: DataTypes.STRING,
      required: true
    },
  FOOD: {
      type: DataTypes.STRING,
      required: true
    },
  QUANTITY: {
      type: DataTypes.INTEGER,
    },
  MEASURE: {
      type: DataTypes.STRING,
      required: true
    },
  FOODID: {
      type: DataTypes.STRING,
      required: true
    },
  FOODURI: {
      type: DataTypes.STRING,
      required: true
    },
  WEIGHT: {
      type: DataTypes.DECIMAL(10,3),
    },
  RETAINED_WEIGHT: {
      type: DataTypes.DECIMAL(10,3),
    },
  MEASURE_URI: {
      type: DataTypes.STRING,
      required: true
    },
  ENERC_KCAL_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  ENERC_KCAL_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  FAT_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  FAT_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  FASAT_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  FASAT_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  FAMS_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  FAMS_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  FAPU_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  FAPU_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  CHOCDF_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  CHOCDF_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  FIBTG_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  FIBTG_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  SUGAR_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  SUGAR_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  PROCNT_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  PROCNT_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  NA_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  NA_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  CA_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  CA_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  MG_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  MG_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  K_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  K_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  FE_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  FE_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  ZN_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  ZN_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  P_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  P_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  VITA_RAE_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  VITA_RAE_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  VITC_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  VITC_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  THIA_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  THIA_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  RIBF_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  RIBF_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  NIA_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  NIA_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  VITB6A_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  VITB6A_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  FOLDFE_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  FOLDFE_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  FOLFD_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  FOLFD_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  TOCPHA_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  TOCPHA_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  VITK1_QUANTITY: {
      type: DataTypes.DECIMAL(10,3),
      defaultValue: 0
    },
  VITK1_UNIT: {
      type: DataTypes.STRING,
      required: true
    },
  ALCOHOL_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  CELERY_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  CRUSTACEAN_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  DAIRY_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  EGG_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  FISH_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  GLUTEN_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  KIDNEY_FRIENDLY: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  KOSHER: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  LOW_POTASSIUM: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  LUPINE_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  MUSTARD_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  LOW_FAT_ABS: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  NO_OIL_ADDED: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  LOW_SUGAR: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  PALEO: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  PEANUT_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  PESCATARIAN: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  PORK_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  RED_MEAT_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  SESAME_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  SHELLFISH_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  SOY_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  SUGAR_CONCIOUS: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  TREE_NUT_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  VEGAN: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  VEGETARIAN: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  WHEAT_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  NIGHTSHADE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  SPECIFIC_CARBS: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  MILK_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  MOLLUSK_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  NO_SUGAR_ADDED: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  PLANTRICIOUS: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  FAT_FREE: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  BALANCED: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  HIGH_FIBER: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  HIGH_PROTEIN: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  LOW_CARB: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  LOW_FAT: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
 LOW_SODIUM: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
};