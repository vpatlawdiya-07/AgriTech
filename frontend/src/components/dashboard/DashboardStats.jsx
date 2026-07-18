import { Grid, Typography, Box, Chip } from "@mui/material";
import {
  Thermostat,
  Opacity,
  Science,
  WaterDrop,
  Spa,
  TrendingUp,
} from "@mui/icons-material";

import { motion } from "framer-motion";
import AppCard from "../ui/Card";

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
      icon: <Spa sx={{ fontSize: 40 }} />,
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
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          xl={2}
          key={item.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
          >
            <AppCard>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.title}
                  </Typography>

                  <motion.div
                    key={item.value}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      mt={1}
                    >
                      {item.value}
                    </Typography>
                  </motion.div>

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
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
            </AppCard>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}