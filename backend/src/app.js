const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();

// ======================
// Import Routes
// ======================
const sensorRoutes = require("./routes/sensorRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const authRoutes = require("./routes/authRoutes");
const farmRoutes = require("./routes/farmRoutes"); // NEW

const app = express();

// ======================
// Middleware
// ======================
app.use(helmet());

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ======================
// Home Route
// ======================
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        project: "NutriTrack",
        message: "NutriTrack Backend API Running",
        version: "1.0.0",
    });
});

// ======================
// API Routes
// ======================
app.use("/api/sensor", sensorRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/recommendation", recommendationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/farms", farmRoutes); // NEW

// ======================
// Health Check
// ======================
app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        status: "Server Running",
        database: "Connected",
        sensor: "Connected",
        weather: "Connected",
        authentication: "Enabled",
        farms: "Enabled"
    });
});

// ======================
// 404 Route
// ======================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API Route Not Found",
    });
});

// ======================
// Global Error Handler
// ======================
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error:
            process.env.NODE_ENV === "development"
                ? err.message
                : undefined,
    });
});

module.exports = app;