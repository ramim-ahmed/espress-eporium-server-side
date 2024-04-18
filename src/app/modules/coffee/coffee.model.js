const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const coffeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      requiredd: true,
    },
    taste: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ingrediants: {
      type: Array,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Coffee = mongoose.model("Coffee", coffeeSchema);

module.exports = Coffee;
