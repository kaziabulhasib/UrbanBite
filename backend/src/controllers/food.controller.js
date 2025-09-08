const { v4: uuid } = require("uuid");

const foodModel = require("../models/food.model");
const { uploadFile } = require("../services/storage.service");

async function createFood(req, res) {
  console.log(req.foodPartner);
  console.log(req.body);
  console.log(req.file);

  const fileUploadResult = await uploadFile(req.file.buffer, uuid());

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodPartner._id,
  });

  res.status(201).json({
    message: "food created successfully",
    food: foodItem,
  });

  res.send("food created successfully");
}

module.exports = {
  createFood,
};
