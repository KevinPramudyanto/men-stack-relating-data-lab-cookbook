const User = require("../models/user.js");

const postFood = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    user.pantry.push(req.body);
    await user.save();
    res.json({ status: "ok", msg: "food created to your pantry" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to create food" });
  }
};

const getFoods = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    const food = user.pantry;
    res.json(food);
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to read foods" });
  }
};

const deleteFood = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    user.pantry.pull({ _id: req.params.itemId });
    await user.save();
    res.json({ status: "ok", msg: "food deleted from your pantry" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to delete food" });
  }
};

const updateFood = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.decoded.username });
    const food = user.pantry.id(req.params.itemId);
    food.set("name", req.body.name);
    await user.save();
    res.json({ status: "ok", msg: "food updated to your pantry" });
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to update food" });
  }
};

module.exports = { postFood, getFoods, deleteFood, updateFood };
