const Ingredient = require("../models/ingredient.js");

const postIngredient = async (req, res) => {
  try {
    await Ingredient.create(req.body);
    res.json({ status: "ok", msg: "ingredient created" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to create ingredient" });
  }
};

const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to read ingredients" });
  }
};

module.exports = { postIngredient, getIngredients };
