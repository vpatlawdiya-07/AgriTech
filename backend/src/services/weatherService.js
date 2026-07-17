const axios = require("axios");

async function getWeather() {
    const apiKey = process.env.WEATHER_API_KEY;

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Indore&aqi=no`;

    const response = await axios.get(url);

    return response.data;
}

module.exports = { getWeather };