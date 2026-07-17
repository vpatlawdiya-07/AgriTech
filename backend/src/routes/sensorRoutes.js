const express = require("express");
const router = express.Router();

const sensorController = require("../controllers/sensorController");

// ===============================
// Sensor Status
// ===============================
router.get("/status", (req, res) => {
    res.json({
        success: true,
        sensor: "NPK Sensor",
        port: process.env.SERIAL_PORT,
        status: "Connected"
    });
});

// ===============================
// Latest Sensor Reading
// ===============================
router.get("/latest", sensorController.getLatestSensorData);

// ===============================
// Sensor History (Last 100 Readings)
// ===============================
router.get("/history", sensorController.getSensorHistory);

module.exports = router;