import { useEffect, useState } from "react";
import axios from "axios";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function History() {

    const [history, setHistory] = useState([]);

    async function loadHistory() {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/sensor/history"
            );

            setHistory(res.data.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        loadHistory();

        const interval = setInterval(loadHistory, 5000);

        return () => clearInterval(interval);

    }, []);

    const labels = history
        .slice()
        .reverse()
        .map(item => item.id);

    const moisture = history
        .slice()
        .reverse()
        .map(item => Number(item.moisture));

    const temperature = history
        .slice()
        .reverse()
        .map(item => Number(item.temperature));

    const nitrogen = history
        .slice()
        .reverse()
        .map(item => item.nitrogen);

    const phosphorus = history
        .slice()
        .reverse()
        .map(item => item.phosphorus);

    const potassium = history
        .slice()
        .reverse()
        .map(item => item.potassium);

    return (

        <div style={{ padding: 30 }}>

            <h1>📊 Sensor History</h1>

            <br />

            <Line
                data={{
                    labels,
                    datasets: [
                        {
                            label: "Moisture %",
                            data: moisture,
                            borderColor: "green"
                        },
                        {
                            label: "Temperature",
                            data: temperature,
                            borderColor: "red"
                        }
                    ]
                }}
            />

            <br />

            <Line
                data={{
                    labels,
                    datasets: [
                        {
                            label: "Nitrogen",
                            data: nitrogen,
                            borderColor: "blue"
                        },
                        {
                            label: "Phosphorus",
                            data: phosphorus,
                            borderColor: "orange"
                        },
                        {
                            label: "Potassium",
                            data: potassium,
                            borderColor: "purple"
                        }
                    ]
                }}
            />

        </div>

    );
}