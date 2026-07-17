const express = require("express");
const router = express.Router();

const farmController = require("../controllers/farmController");

// ===============================
// Get All Farms
// ===============================
router.get("/", farmController.getAllFarms);

// ===============================
// Add New Farm
// ===============================
router.post("/", farmController.addFarm);

// ===============================
// Update Farm
// ===============================
router.put("/:id", farmController.updateFarm);

// ===============================
// Delete Farm
// ===============================
router.delete("/:id", farmController.deleteFarm);

module.exports = router;