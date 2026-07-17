import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function Reports() {

    const [report, setReport] = useState(null);

    async function loadReport() {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/recommendation"
            );

            setReport(res.data);

        } catch (err) {

            console.log(err);

        }

    }

    useEffect(() => {

        loadReport();

    }, []);

    function downloadPDF() {

        if (!report) return;

        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text("NutriTrack Smart Agriculture Report", 15, 20);

        doc.setFontSize(12);
        doc.text(
            "Generated : " + new Date().toLocaleString(),
            15,
            30
        );

        autoTable(doc, {

            startY: 40,

            head: [["Parameter", "Value"]],

            body: [

                ["Temperature", report.sensor.temperature + " °C"],
                ["Moisture", report.sensor.moisture + " %"],
                ["Nitrogen", report.sensor.nitrogen],
                ["Phosphorus", report.sensor.phosphorus],
                ["Potassium", report.sensor.potassium],
                ["pH", report.sensor.ph],

                ["Weather", report.weather.condition.text],
                ["Weather Temp", report.weather.temp_c + " °C"],
                ["Humidity", report.weather.humidity + " %"],
                ["Wind Speed", report.weather.wind_kph + " km/h"],

                ["Recommended Crop", report.recommendation.crop],
                ["Recommended Fertilizer", report.recommendation.fertilizer],
                ["Confidence", report.recommendation.confidence + "%"]

            ]

        });

        doc.save("NutriTrack_Report.pdf");

    }

    if (!report) {

        return <h2 style={{ padding: "30px" }}>Loading Report...</h2>;

    }

    return (

        <div>

            <Navbar />

            <div
                style={{
                    display: "flex"
                }}
            >

                <Sidebar />

                <div
                    style={{
                        flex: 1,
                        padding: "30px",
                        background: "#f4f6f9",
                        minHeight: "100vh"
                    }}
                >

                    <h1>📄 Smart Agriculture Report</h1>

                    <hr />

                    <br />

                    <div
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            marginBottom: "20px"
                        }}
                    >

                        <h2>🌱 Sensor Readings</h2>

                        <p><b>Moisture :</b> {report.sensor.moisture}%</p>

                        <p><b>Temperature :</b> {report.sensor.temperature} °C</p>

                        <p><b>Nitrogen :</b> {report.sensor.nitrogen}</p>

                        <p><b>Phosphorus :</b> {report.sensor.phosphorus}</p>

                        <p><b>Potassium :</b> {report.sensor.potassium}</p>

                        <p><b>pH :</b> {report.sensor.ph}</p>

                    </div>

                    <div
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            marginBottom: "20px"
                        }}
                    >

                        <h2>🌦 Weather</h2>

                        <p><b>Condition :</b> {report.weather.condition.text}</p>

                        <p><b>Temperature :</b> {report.weather.temp_c} °C</p>

                        <p><b>Humidity :</b> {report.weather.humidity}%</p>

                        <p><b>Wind :</b> {report.weather.wind_kph} km/h</p>

                    </div>

                    <div
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            marginBottom: "20px"
                        }}
                    >

                        <h2>🌾 AI Recommendation</h2>

                        <p>

                            <b>Recommended Crop :</b>{" "}

                            <span
                                style={{
                                    color: "green",
                                    fontWeight: "bold"
                                }}
                            >
                                {report.recommendation.crop}
                            </span>

                        </p>

                        <p>

                            <b>Recommended Fertilizer :</b>{" "}

                            <span
                                style={{
                                    color: "#ff9800",
                                    fontWeight: "bold"
                                }}
                            >
                                {report.recommendation.fertilizer}
                            </span>

                        </p>

                        <p>

                            <b>Confidence :</b>{" "}

                            <span
                                style={{
                                    color: "blue",
                                    fontWeight: "bold"
                                }}
                            >
                                {report.recommendation.confidence}%
                            </span>

                        </p>

                    </div>

                    <button
                        onClick={downloadPDF}
                        style={{
                            padding: "15px 30px",
                            fontSize: "18px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            background: "#2E7D32",
                            color: "white"
                        }}
                    >
                        📥 Download PDF Report
                    </button>

                </div>

            </div>

        </div>

    );

}