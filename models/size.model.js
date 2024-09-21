import mongoose from "mongoose";

const SizeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Size = mongoose.model("size", SizeSchema);