const mongoose = require("mongoose")

const connectDB  = async() => {
    await mongoose.connect(process.env.MONGODB)
    console.log("base de datos conectada")
}

module.exports = connectDB