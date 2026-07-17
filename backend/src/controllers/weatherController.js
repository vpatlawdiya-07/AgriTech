const { getWeather } = require("../services/weatherService");
const db = require("../config/db");

exports.currentWeather = async (req, res) => {

    try {

        const weather = await getWeather();

        const current = weather.current;
        const location = weather.location;

        const sql = `
        INSERT INTO weather_data
        (
            farm_id,
            temperature,
            humidity,
            rainfall,
            wind_speed,
            weather_condition,
            forecast_date
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            null,
            current.temp_c,
            current.humidity,
            current.precip_mm,
            current.wind_kph,
            current.condition.text,
            location.localtime.split(" ")[0]
        ];

        db.query(sql, values, (err) => {

            if (err) {
                console.error("Weather Save Error:", err);
            } else {
                console.log("✅ Weather Saved");
            }

        });

        res.json({
            success: true,
            data: weather
        });

    } catch (error) {

        console.error(error.response?.data || error.message);

        res.status(500).json({
            success: false,
            error: error.response?.data || error.message
        });

    }

};