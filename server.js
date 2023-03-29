const express = require("express");
const connectdb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
connectdb();
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
