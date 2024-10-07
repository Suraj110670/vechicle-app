const Vehicle = require('../models/Vehicle');

// Display all vehicles
exports.getVehicles = async (req, res) => {
    const vehicles = await Vehicle.find({});
    res.render('index', { vehicles });
};

// Render add vehicle form
exports.getAddVehicleForm = (req, res) => {
    res.render('add');
};

// Add a new vehicle
exports.addVehicle = async (req, res) => {
    const { make, model, fuelEconomy, bodyType } = req.body;
    await Vehicle.create({ make, model, fuelEconomy, bodyType });
    res.redirect('/');
};

// Render edit vehicle form
exports.getEditVehicleForm = async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    res.render('edit', { vehicle });
};

// Edit a vehicle
exports.editVehicle = async (req, res) => {
    const { make, model, fuelEconomy, bodyType } = req.body;
    await Vehicle.findByIdAndUpdate(req.params.id, { make, model, fuelEconomy, bodyType });
    res.redirect('/');
};

// Delete a vehicle
exports.deleteVehicle = async (req, res) => {
    await Vehicle.findByIdAndRemove(req.params.id);
    res.redirect('/');
};
