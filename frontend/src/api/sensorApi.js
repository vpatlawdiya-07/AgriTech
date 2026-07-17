import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const getLatestSensor = () =>
    API.get("/sensor/latest");

export const getSensorHistory = () =>
    API.get("/sensor/history");