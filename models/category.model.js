import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model("category", CategorySchema);
