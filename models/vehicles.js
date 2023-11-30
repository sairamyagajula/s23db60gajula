const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        // Custom validator using RegExp
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]+$/.test(v); // Ensure length of vehicle between 3 and 30
            },
            message: props => `${props.value} is not a valid username! Use only letters, numbers, and underscores.`,
        },
    },
    mileage: {
        type: Number,
        validate: {
            validator: function(v) {
                return v >= 0; 
            },
            message: props => `${props.value} is not a valid mileage! Mileage must be a non-negative number.`,
        },
    },
    color: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9_]+$/.test(v);
            },
            message: props => `${props.value} is not a valid color! Use only letters, numbers, and underscores.`,
        },
    },
})
module.exports = mongoose.model("vehicles", vehicleSchema)