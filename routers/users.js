const express = require("express");
const router = express.Router();
const { getUsers, getUserFoods } = require("../controllers/users.js");

router.get("/", getUsers);
router.get("/:userId", getUserFoods);

module.exports = router;
