import mongoose from "mongoose";

const CommonSchema = mongoose.Schema({
  title: {
    type: Array,
  },
  description: {
    type: Array,
  },
  content: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
});

export const CommonPage = mongoose.model("common", CommonSchema);
