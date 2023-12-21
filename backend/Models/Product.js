const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    "sub-category": {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
