const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    login: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    countryID: {
      type: mongoose.Types.ObjectId,
      required: true
    }
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
