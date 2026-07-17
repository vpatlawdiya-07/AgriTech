import { useEffect, useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import SensorCards from "../components/dashboard/SensorCards";
import WeatherCard from "../components/dashboard/WeatherCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";

import { getLatestSensor } from "../api/sensorApi";
import { getWeather } from "../api/weatherApi";
import { getRecommendation } from "../api/recommendationApi";

import {
  Typography,
  Grid,
  Box,
  Paper
} from "@mui/material";

export default function Dashboard() {

  const [sensor, setSensor] = useState(null);
  const [weather, setWeather] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  async function loadData() {

    try {

      const sensorRes = await getLatestSensor();
      setSensor(sensorRes.data.data);

      const weatherRes = await getWeather();
      setWeather(weatherRes.data.data.current);

      const recommendationRes = await getRecommendation();
      setRecommendation(recommendationRes.data.recommendation);

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    loadData();

    const interval = setInterval(loadData, 5000);

    return () => clearInterval(interval);

  }, []);

  if (!sensor || !weather || !recommendation) {

    return (

      <MainLayout>

        <Typography
          variant="h5"
          sx={{
            p: 5,
            fontWeight: "bold"
          }}
        >
          🌱 Loading Dashboard...
        </Typography>

      </MainLayout>

    );

  }

  return (

    <MainLayout>

      {/* Welcome Section */}

      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: 4,
          background:
            "linear-gradient(135deg,#2E7D32,#43A047)",
          color: "white"
        }}
      >

        <Typography
          variant="h4"
          fontWeight="bold"
        >
          👋 Welcome Back
        </Typography>

        <Typography
          mt={1}
          variant="h6"
        >
          Smart Agriculture Monitoring Dashboard
        </Typography>

      </Paper>

      {/* Sensor Cards */}

      <SensorCards sensor={sensor} />

      {/* Weather + Recommendation */}

      <Grid
        container
        spacing={3}
        mt={1}
      >

        <Grid
          item
          xs={12}
          lg={6}
        >

          <WeatherCard
            weather={weather}
          />

        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
        >

          <RecommendationCard
            recommendation={recommendation}
          />

        </Grid>

      </Grid>

      {/* Recent Activity */}

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 3,
          borderRadius: 4
        }}
      >

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
        >
          📋 Latest Sensor Reading
        </Typography>

        <Grid
          container
          spacing={2}
        >

          <Grid item xs={6} md={3}>
            <Typography color="text.secondary">
              Moisture
            </Typography>

            <Typography variant="h6">
              {sensor.moisture}%
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography color="text.secondary">
              Temperature
            </Typography>

            <Typography variant="h6">
              {sensor.temperature}°C
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography color="text.secondary">
              pH
            </Typography>

            <Typography variant="h6">
              {sensor.ph}
            </Typography>
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography color="text.secondary">
              Nitrogen
            </Typography>

            <Typography variant="h6">
              {sensor.nitrogen}
            </Typography>
          </Grid>

        </Grid>

      </Paper>

    </MainLayout>

  );

}