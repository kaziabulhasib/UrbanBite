const express = require("express");
const { createFood } = require("../controllers/food.controller");
const { AuthFoodPartnerMiddleware } = require("../middlewares/auth.middleware");
const multer = require("multer");

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", AuthFoodPartnerMiddleware, upload.single("video"), createFood);

module.exports = router;
