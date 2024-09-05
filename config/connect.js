import mongoose from "mongoose"

mongoose.connect(MONGODB_URL).then(() => {
  console.log("Database connection establised")
}).catch((error) => (
  console.error(error)
))