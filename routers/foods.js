const express = require("express");
const router = express.Router();
const {
  postFood,
  getFoods,
  deleteFood,
  updateFood,
} = require("../controllers/foods.js");

router.post("/", postFood);
router.get("/", getFoods);
router.delete("/:itemId", deleteFood);
router.post("/:itemId", updateFood);

module.exports = router;
