const db = require("../config/db");

// ===============================
// Get Latest Sensor Reading
// ===============================
exports.getLatestSensorData = (req, res) => {

    const sql = `
        SELECT *
        FROM sensor_readings
        ORDER BY id DESC
        LIMIT 1
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                error: err.message
            });
        }

        res.json({
            success: true,
            data: result[0]
        });

    });

};

// ===============================
// Get Sensor History
// ===============================
exports.getSensorHistory = (req, res) => {

    const sql = `
        SELECT *
        FROM sensor_readings
        ORDER BY created_at DESC
        LIMIT 100
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                error: err.message
            });
        }

        res.json({
            success: true,
            data: result
        });

    });

};