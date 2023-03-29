const mongoose = require("mongoose");

const userScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      required: [true, "Please add the user email"],
    },
    image: {
      type: String,
      required: [true, "Please add the phone image"],
    },
    gender: {
      type: String,
      required: [true, "Please add the phone gender"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userScheme);
