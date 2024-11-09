const User = require("../models/user.js");

const getUsers = async (req, res) => {
  try {
    const user = await User.find({}, "username");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to read users" });
  }
};

const getUserFoods = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const food = user.pantry;
    res.json(food);
  } catch (error) {
    console.error(error.message);
    return res
      .status(400)
      .json({ status: "error", msg: "failed to read user's foods" });
  }
};

module.exports = { getUsers, getUserFoods };
