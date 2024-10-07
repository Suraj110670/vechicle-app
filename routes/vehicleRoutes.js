const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

// Get all vehicles
router.get('/', vehicleController.getVehicles);

// Add new vehicle
router.get('/add', vehicleController.getAddVehicleForm);
router.post('/add', vehicleController.addVehicle);

// Edit vehicle
router.get('/edit/:id', vehicleController.getEditVehicleForm);
router.put('/edit/:id', vehicleController.editVehicle);

// Delete vehicle
router.delete('/delete/:id', vehicleController.deleteVehicle);

module.exports = router;
