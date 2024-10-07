const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    fuelEconomy: {
        type: String,
        required: true
    },
    bodyType: {
        type: String,
        required: true
    }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
