import mongoose from "mongoose";

const FaqSchema = mongoose.Schema({
    title: {
        type: Array
    },
    description: {
        type: Array
    }
})

const FaqModel = mongoose.model("Faq", FaqSchema)

export default FaqModel