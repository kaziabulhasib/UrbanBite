const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userModel = require("../models/user.model");
const foodpartnerModel = require("../models/foodpartner.model");

// register user

async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    email,
  });

  if (isUserAlreadyExists) {
    return res.status(400).json({
      message: "user already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("food-token", token);

  res.status(201).json({
    message: "user register successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

// login user

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "invalid user or password",
    });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return res.status(400).json({
      message: "invalid user or password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("food-token", token);

  res.status(200).json({
    message: "user login successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

// logout user

function logoutUser(req, res) {
  res.clearCookie("food-token");
  res.status(200).json({
    message: "user logout successfully",
  });
}

// register food partner

async function registerFoodPartner(req, res) {
  const { name, email, password, phone, address, contactName } = req.body;

  const isFoodPartnerAlreadyExists = await foodpartnerModel.findOne({
    email,
  });

  if (isFoodPartnerAlreadyExists) {
    return res.status(400).json({
      message: "food partner already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const foodpartner = await foodpartnerModel.create({
    name,
    email,
    password: hashedPassword,
    phone,
    address,
    contactName,
  });

  const token = jwt.sign({ id: foodpartner._id }, process.env.JWT_SECRET);

  res.cookie("food-token", token);

  res.status(201).json({
    message: "food partner register successfully",
    foodpartner: {
      _id: foodpartner._id,
      email: foodpartner.email,
      name: foodpartner.name,
      phone: foodpartner.phone,
      address: foodpartner.address,
      contactName: foodpartner.contactName,
    },
  });
}

// login food partner

async function loginFoodPartner(req, res) {
  const { email, password } = req.body;

  const foodpartner = await foodpartnerModel.findOne({
    email,
  });

  if (!foodpartner) {
    return res.status(400).json({
      message: "invalid food partner or password",
    });
  }

  const isPasswordMatch = await bcrypt.compare(password, foodpartner.password);

  if (!isPasswordMatch) {
    return res.status(400).json({
      message: "invalid food partner or password",
    });
  }

  const token = jwt.sign({ id: foodpartner._id }, process.env.JWT_SECRET);

  res.cookie("food-token", token);

  res.status(200).json({
    message: "food partner login successfully",
    foodpartner: {
      _id: foodpartner._id,
      email: foodpartner.email,
      name: foodpartner.name,
    },
  });
}

// logout food partner

function logoutFoodPartner(req, res) {
  res.clearCookie("food-token");
  res.status(200).json({
    message: "food partner logout successfully",
  });
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
