import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  size: {
    type: Array,
    // required: true,
  },
  color: {
    type: Array,
    // required: true,
  },
  rating: {
    type: String,
    // required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  newArrival: {
    type: Boolean,
    required: true,
  },
  topSeller: {
    type: Boolean,
    required: true,
  },
});

export const Product = mongoose.model("product", ProductSchema);
