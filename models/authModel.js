const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    username: { type: String, required: [true, "Please add the user name"] },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "Email address is already teken"],
    },
    password: {
      type: String,
      required: [true, "Please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Auth", authSchema);
