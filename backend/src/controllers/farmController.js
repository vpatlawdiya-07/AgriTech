const db = require("../config/db");

// ===============================
// Get All Farms
// ===============================
exports.getAllFarms = (req, res) => {

    const sql = "SELECT * FROM farms ORDER BY id DESC";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            data: result
        });

    });

};

// ===============================
// Add Farm
// ===============================
exports.addFarm = (req, res) => {

    const {
        user_id,
        farm_name,
        location,
        latitude,
        longitude,
        soil_type,
        area
    } = req.body;

    const sql = `
        INSERT INTO farms
        (
            user_id,
            farm_name,
            location,
            latitude,
            longitude,
            soil_type,
            area
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            user_id,
            farm_name,
            location,
            latitude,
            longitude,
            soil_type,
            area
        ],
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Farm Added Successfully"
            });

        }
    );

};

// ===============================
// Update Farm
// ===============================
exports.updateFarm = (req, res) => {

    const {
        farm_name,
        location,
        latitude,
        longitude,
        soil_type,
        area
    } = req.body;

    const sql = `
        UPDATE farms
        SET
            farm_name = ?,
            location = ?,
            latitude = ?,
            longitude = ?,
            soil_type = ?,
            area = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [
            farm_name,
            location,
            latitude,
            longitude,
            soil_type,
            area,
            req.params.id
        ],
        (err) => {

            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            }

            res.json({
                success: true,
                message: "Farm Updated Successfully"
            });

        }
    );

};

// ===============================
// Delete Farm
// ===============================
exports.deleteFarm = (req, res) => {

    const sql = "DELETE FROM farms WHERE id = ?";

    db.query(sql, [req.params.id], (err) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: "Farm Deleted Successfully"
        });

    });

};