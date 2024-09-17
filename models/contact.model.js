import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export const Contact = mongoose.model("contact", ContactSchema);
