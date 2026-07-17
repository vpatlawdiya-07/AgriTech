const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const db = require("../config/db");

const port = new SerialPort({
    path: process.env.SERIAL_PORT,
    baudRate: parseInt(process.env.BAUD_RATE)
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

let sensorData = {};

port.on("open", () => {
    console.log(`✅ Serial Port Open: ${process.env.SERIAL_PORT}`);
});

port.on("error", (err) => {
    console.error("❌ Serial Error:", err.message);
});

parser.on("data", (line) => {

    line = line.trim();

    console.log("Arduino:", line);

    if (line.startsWith("Moisture:")) {
        sensorData.moisture = parseFloat(line.split(":")[1]);
    }

    if (line.startsWith("Temperature:")) {
        sensorData.temperature = parseFloat(line.split(":")[1]);
    }

    if (line.startsWith("EC:")) {
        sensorData.ec = parseInt(line.split(":")[1]);
    }

    if (line.startsWith("pH:")) {
        sensorData.ph = parseFloat(line.split(":")[1]);
    }

    if (line.startsWith("Nitrogen:")) {
        sensorData.nitrogen = parseInt(line.split(":")[1]);
    }

    if (line.startsWith("Phosphorus:")) {
        sensorData.phosphorus = parseInt(line.split(":")[1]);
    }

    if (line.startsWith("Potassium:")) {

        sensorData.potassium = parseInt(line.split(":")[1]);

        console.log("Saving:", sensorData);

        db.query(
            `
            INSERT INTO sensor_readings
            (
                farm_id,
                nitrogen,
                phosphorus,
                potassium,
                temperature,
                humidity,
                moisture,
                ph
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
                1, // Current Farm ID

                sensorData.nitrogen,
                sensorData.phosphorus,
                sensorData.potassium,

                sensorData.temperature,

                0,

                sensorData.moisture,

                sensorData.ph
            ],
            (err) => {

                if (err) {

                    console.error("❌ Database Error:");
                    console.error(err);

                } else {

                    console.log("✅ Sensor Data Saved");

                }

            }
        );

        sensorData = {};

    }

});