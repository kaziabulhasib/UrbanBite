const mongoose = require("mongoose");

function connectDb() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => console.log(err));
}

module.exports = connectDb;
