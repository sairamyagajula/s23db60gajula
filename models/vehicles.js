const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    name :String,
    mileage : Number,
    color : String
})
module.exports = mongoose.model("vehicles", vehicleSchema)