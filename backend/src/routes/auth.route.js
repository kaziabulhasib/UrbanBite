const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
} = require("../controllers/auth.controller");

const router = express.Router();

// user routes 
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout", logoutUser);

// food partner routes 
router.post("/foodpartner/register", registerFoodPartner);
router.post("/foodpartner/login", loginFoodPartner);
router.get("/foodpartner/logout", logoutFoodPartner);


module.exports = router;
