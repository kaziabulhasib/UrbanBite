const express = require("express");
const { createFood, getFoodItems } = require("../controllers/food.controller");
const {
  AuthFoodPartnerMiddleware,
  AuthUserMiddleware,
} = require("../middlewares/auth.middleware");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", AuthFoodPartnerMiddleware, upload.single("video"), createFood);

// get foods

router.get("/", AuthUserMiddleware, getFoodItems);

module.exports = router;
