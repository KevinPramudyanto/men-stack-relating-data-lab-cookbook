const express = require("express");
const router = express.Router();
const {
  postIngredient,
  getIngredients,
} = require("../controllers/ingredients.js");

router.post("/", postIngredient);
router.get("/", getIngredients);

module.exports = router;
