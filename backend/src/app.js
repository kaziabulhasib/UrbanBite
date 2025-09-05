const express = require("express");
const cookieParser = require("cookie-parser");

// internal imports
const authRoutes = require("./routes/auth.route");
const foodRoute = require("./routes/food.route");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoute);

app.get("/", (req, res) => {
  res.send("Food app server is running ");
});

module.exports = app;
