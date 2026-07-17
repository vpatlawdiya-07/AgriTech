import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider
} from "@mui/material";

import {
  Thermostat,
  WaterDrop,
  Air,
  Cloud
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function WeatherCard({ weather }) {

  return (

    <MotionCard
      whileHover={{
        scale: 1.02,
        y: -5
      }}
      transition={{
        duration: 0.25
      }}
      sx={{
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
      }}
    >

      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            🌦 Weather
          </Typography>

          <Chip
            label={weather.condition.text}
            color="success"
          />

        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          display="flex"
          alignItems="center"
          gap={2}
          mb={3}
        >

          <img
            src={`https:${weather.condition.icon}`}
            alt="weather"
            width="70"
          />

          <Typography
            variant="h2"
            fontWeight="bold"
          >
            {weather.temp_c}°
          </Typography>

        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >

          <Box display="flex" gap={1}>

            <WaterDrop color="primary" />

            <Typography>
              {weather.humidity}%
            </Typography>

          </Box>

          <Box display="flex" gap={1}>

            <Air color="success" />

            <Typography>
              {weather.wind_kph} km/h
            </Typography>

          </Box>

        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
        >

          <Box display="flex" gap={1}>

            <Cloud color="warning" />

            <Typography>
              Cloud {weather.cloud}%
            </Typography>

          </Box>

          <Box display="flex" gap={1}>

            <Thermostat color="error" />

            <Typography>
              Feels {weather.feelslike_c}°
            </Typography>

          </Box>

        </Box>

      </CardContent>

    </MotionCard>

  );

}