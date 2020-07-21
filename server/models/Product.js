const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: 50,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    view: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    continent: {
      type: String,
    },
  },
  { timestapms: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };
