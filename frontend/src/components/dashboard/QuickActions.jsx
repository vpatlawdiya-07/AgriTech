import { Grid, Typography, Box } from "@mui/material";
import {
  Agriculture,
  Assessment,
  History,
  Person,
  Settings,
  Add,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import AppCard from "../ui/Card";

const MotionBox = motion(Box);

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Farm",
      icon: <Add />,
      color: "#2E7D32",
      route: "/farms",
    },
    {
      title: "Reports",
      icon: <Assessment />,
      color: "#1E88E5",
      route: "/reports",
    },
    {
      title: "History",
      icon: <History />,
      color: "#FB8C00",
      route: "/history",
    },
    {
      title: "My Farms",
      icon: <Agriculture />,
      color: "#43A047",
      route: "/farms",
    },
    {
      title: "Profile",
      icon: <Person />,
      color: "#8E24AA",
      route: "/profile",
    },
    {
      title: "Settings",
      icon: <Settings />,
      color: "#546E7A",
      route: "/settings",
    },
  ];

  return (
    <AppCard
      title="⚡ Quick Actions"
      subtitle="Frequently used shortcuts"
    >
      <Grid container spacing={2}>
        {actions.map((action, index) => (
          <Grid
            item
            xs={6}
            md={4}
            lg={2}
            key={index}
          >
            <MotionBox
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() => navigate(action.route)}
              sx={{
                cursor: "pointer",
                borderRadius: "16px",
                p: 3,
                textAlign: "center",
                border: "1px solid #E5E7EB",
                background: "#FAFAFA",

                "&:hover": {
                  background: "#F5F7FA",
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "16px",
                  mx: "auto",
                  mb: 2,
                  bgcolor: `${action.color}15`,
                  color: action.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {action.icon}
              </Box>

              <Typography
                fontWeight="600"
              >
                {action.title}
              </Typography>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </AppCard>
  );
}