const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true
    },
    averageAgeMale: {
      type: Number,
      required: true
    },
    averageAgeFemale: {
      type: Number,
      required: true
    }
  },
  { versionKey: false }
);

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
