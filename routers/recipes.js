const express = require("express");
const router = express.Router();
const {
  postRecipe,
  getRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
  addIngredientToRecipe,
} = require("../controllers/recipes.js");

router.post("/", postRecipe);
router.get("/", getRecipes);
router.get("/:recipeId", getRecipe);
router.delete("/:recipeId", deleteRecipe);
router.post("/:recipeId", updateRecipe);
router.post("/:recipeId/ingredient", addIngredientToRecipe);

module.exports = router;
