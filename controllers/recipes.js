const User = require("../models/user.js");
const Recipe = require("../models/recipe.js");
const Ingredient = require("../models/ingredient.js");

const postRecipe = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    await Recipe.create({
      name: req.body.name,
      instructions: req.body.instructions,
      owner: user._id,
    });
    res.json({ status: "ok", msg: "recipe created to your account" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to create recipe" });
  }
};

const getRecipes = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    const recipes = await Recipe.find({ owner: user._id }).select("name");
    res.json(recipes);
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to read recipes" });
  }
};

const getRecipe = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    const recipe = await Recipe.findOne({
      _id: req.params.recipeId,
      owner: user._id,
    });
    res.json(recipe);
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to read recipe" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    const recipe = await Recipe.findOne({
      _id: req.params.recipeId,
      owner: user._id,
    });
    await recipe.deleteOne();
    res.json({ status: "ok", msg: "recipe deleted from your account" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to delete recipe" });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    const recipe = await Recipe.findOne({
      _id: req.params.recipeId,
      owner: user._id,
    });
    recipe.set({ name: req.body.name, instructions: req.body.instructions });
    await recipe.save();
    res.json({ status: "ok", msg: "recipe updated to your account" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to update recipe" });
  }
};

const addIngredientToRecipe = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    const recipe = await Recipe.findOne({
      _id: req.params.recipeId,
      owner: user._id,
    });
    const ingredient = await Ingredient.findOne({ name: req.body.name });
    if (recipe.ingredients.includes(ingredient._id))
      return res
        .status(400)
        .json({ status: "error", msg: "ingredient already in your recipe" });
    recipe.ingredients.push(ingredient._id);
    await recipe.save();
    res.json({ status: "ok", msg: "ingredient added to your recipe" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to add ingredient" });
  }
};

module.exports = {
  postRecipe,
  getRecipes,
  getRecipe,
  deleteRecipe,
  updateRecipe,
  addIngredientToRecipe,
};
