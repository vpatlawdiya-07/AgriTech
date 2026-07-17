const db = require("../config/db");
const { getWeather } = require("../services/weatherService");
const { recommendCrop } = require("../services/cropRecommendationService");

exports.getRecommendation = async (req, res) => {

    db.query(

        "SELECT * FROM sensor_readings ORDER BY id DESC LIMIT 1",

        async (err, result) => {

            if (err)
                return res.status(500).json(err);

            const sensor = result[0];

            const weather = await getWeather();

            const recommendation =
                recommendCrop(sensor, weather);

            res.json({

                success: true,

                sensor,

                weather: weather.current,

                recommendation

            });

        }

    );

};