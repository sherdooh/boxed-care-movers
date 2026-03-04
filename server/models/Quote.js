const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    plan: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);