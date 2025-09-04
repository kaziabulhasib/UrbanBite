const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/foods", foodRoute);

app.get("/", (req, res) => {
  res.send("Food app server is running ");
});

module.exports = app;
