import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

export const Product = mongoose.model("product", ProductSchema);
