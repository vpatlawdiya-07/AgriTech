import { Grid, Typography, Box, Chip } from "@mui/material";
import {
  Thermostat,
  Opacity,
  Science,
  WaterDrop,
  Eco,
  TrendingUp,
} from "@mui/icons-material";

import { motion } from "framer-motion";
import AppCard from "../ui/Card";

const MotionGrid = motion(Grid);

export default function DashboardStats({ sensor }) {
  const stats = [
    {
      title: "Temperature",
      value: `${sensor?.temperature ?? "--"} °C`,
      icon: <Thermostat sx={{ fontSize: 40 }} />,
      color: "#E53935",
      status: "Normal",
    },
    {
      title: "Moisture",
      value: `${sensor?.moisture ?? "--"} %`,
      icon: <Opacity sx={{ fontSize: 40 }} />,
      color: "#00ACC1",
      status: "Good",
    },
    {
      title: "Soil pH",
      value: sensor?.ph ?? "--",
      icon: <WaterDrop sx={{ fontSize: 40 }} />,
      color: "#8E24AA",
      status: "Balanced",
    },
    {
      title: "Nitrogen",
      value: sensor?.nitrogen ?? "--",
      icon: <Science sx={{ fontSize: 40 }} />,
      color: "#43A047",
      status: "Medium",
    },
    {
      title: "Phosphorus",
      value: sensor?.phosphorus ?? "--",
      icon: <Eco sx={{ fontSize: 40 }} />,
      color: "#1E88E5",
      status: "Healthy",
    },
    {
      title: "Potassium",
      value: sensor?.potassium ?? "--",
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: "#FB8C00",
      status: "Excellent",
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((item, index) => (
        <Grid item xs={12} sm={6} lg={4} xl={2} key={index}>
          <MotionGrid
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
          >
            <AppCard>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    mt={1}
                  >
                    {item.value}
                  </Typography>

                  <Chip
                    size="small"
                    label={item.status}
                    color="success"
                    sx={{ mt: 2 }}
                  />
                </Box>

                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "18px",
                    bgcolor: `${item.color}15`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: item.color,
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
            </AppCard>
          </MotionGrid>
        </Grid>
      ))}
    </Grid>
  );
}