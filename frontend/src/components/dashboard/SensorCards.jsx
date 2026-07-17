import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";

import {
  Science,
  WaterDrop,
  Thermostat,
  Opacity
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function SensorCards({ sensor }) {

  const cards = [
    {
      title: "Nitrogen",
      value: sensor.nitrogen,
      icon: <Science fontSize="large" />,
      color: "#43A047"
    },
    {
      title: "Phosphorus",
      value: sensor.phosphorus,
      icon: <Science fontSize="large" />,
      color: "#1E88E5"
    },
    {
      title: "Potassium",
      value: sensor.potassium,
      icon: <Science fontSize="large" />,
      color: "#FB8C00"
    },
    {
      title: "Moisture",
      value: `${sensor.moisture}%`,
      icon: <Opacity fontSize="large" />,
      color: "#00ACC1"
    },
    {
      title: "Temperature",
      value: `${sensor.temperature}°C`,
      icon: <Thermostat fontSize="large" />,
      color: "#E53935"
    },
    {
      title: "Soil pH",
      value: sensor.ph,
      icon: <WaterDrop fontSize="large" />,
      color: "#8E24AA"
    }
  ];

  return (
    <Grid container spacing={3}>

      {cards.map((card, index) => (

        <Grid item xs={12} sm={6} md={4} key={index}>

          <MotionCard
            whileHover={{
              scale: 1.04,
              y: -6
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

                <Box>

                  <Typography
                    color="text.secondary"
                    variant="body2"
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    mt={1}
                  >
                    {card.value}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    width: 65,
                    height: 65,
                    borderRadius: "50%",
                    background: `${card.color}15`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: card.color
                  }}
                >
                  {card.icon}
                </Box>

              </Box>

            </CardContent>

          </MotionCard>

        </Grid>

      ))}

    </Grid>
  );
}