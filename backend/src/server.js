const app = require("./app");
require("dotenv").config();

const connectDb = require("./db/db");

connectDb();

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
