import mongoose from "mongoose";

const ColorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Color = mongoose.model("color", ColorSchema);