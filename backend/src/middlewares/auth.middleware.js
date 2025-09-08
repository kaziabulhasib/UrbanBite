const jwt = require("jsonwebtoken");
const foodpartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.model");

async function AuthFoodPartnerMiddleware(req, res, next) {
  const token = req.cookies["food-token"];

  if (!token) {
    return res.status(401).json({
      message: "please login first",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodpartnerModel.findById(decoded.id);
    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "please login first",
    });
  }
}

async function AuthUserMiddleware(req, res, next) {
  const token = req.cookies["food-token"];

  if (!token) {
    return res.status(401).json({
      message: "please login first",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "please login first",
    });
  }
}

module.exports = {
  AuthFoodPartnerMiddleware,
};
