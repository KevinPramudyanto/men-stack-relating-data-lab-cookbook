const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  { name: { type: String, required: true } },
  { collection: "food" }
);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    pantry: [foodSchema],
  },
  { collection: "user" }
);

module.exports = mongoose.model("User", userSchema);
