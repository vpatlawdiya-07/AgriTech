function recommendCrop(sensor, weather) {

    const N = Number(sensor.nitrogen);
    const P = Number(sensor.phosphorus);
    const K = Number(sensor.potassium);
    const moisture = Number(sensor.moisture);
    const temp = Number(sensor.temperature);
    const ph = Number(sensor.ph);

    let crop = "";
    let fertilizer = "";
    let confidence = 70;
    let reasons = [];

    if (
        N > 140 &&
        P > 300 &&
        K > 300 &&
        moisture > 60 &&
        temp >= 24 &&
        temp <= 34
    ) {

        crop = "Rice";
        fertilizer = "DAP";
        confidence = 96;

        reasons.push("High Nitrogen");
        reasons.push("High Phosphorus");
        reasons.push("High Potassium");
        reasons.push("Good Moisture");
    }

    else if (
        moisture < 50 &&
        temp > 25
    ) {

        crop = "Cotton";
        fertilizer = "Urea";
        confidence = 90;

        reasons.push("Low Moisture");
    }

    else {

        crop = "Wheat";
        fertilizer = "NPK 20:20:20";
        confidence = 82;

        reasons.push("Balanced Soil");
    }

    return {

        crop,
        fertilizer,
        confidence,
        reasons,
        weather: weather.current.condition.text

    };

}

module.exports = {
    recommendCrop
};