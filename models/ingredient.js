const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
  { name: { type: String, required: true } },
  { collection: "ingredient" }
);

module.exports = mongoose.model("Ingredient", ingredientSchema);
