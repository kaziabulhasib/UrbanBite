const express = require("express");
const { createFood } = require("../controllers/food.controller");
const { AuthFoodPartnerMiddleware } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", AuthFoodPartnerMiddleware, createFood);

module.exports = router;
