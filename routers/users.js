const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserFoods,
  getUserRecipes,
} = require("../controllers/users.js");

router.get("/", getUsers);
router.get("/:userId/foods", getUserFoods);
router.get("/:userId/recipes", getUserRecipes);

module.exports = router;
