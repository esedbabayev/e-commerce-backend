import mongoose from "mongoose";

const FaqSchema = mongoose.Schema({
  title: {
    type: Array,
  },
  description: {
    type: Array,
  },
});

export const Faq = mongoose.model("faq", FaqSchema);
