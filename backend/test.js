const { SerialPort } = require("serialport");

SerialPort.list()
  .then((ports) => {
    console.log("Available COM Ports:");
    console.table(ports);
  })
  .catch((err) => {
    console.error("Error:", err);
  });