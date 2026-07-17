import { Box, Typography, Grid, Chip } from "@mui/material";
import {
  WbSunny,
  AccessTime,
  Agriculture,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import AppButton from "../ui/Button";

const MotionBox = motion(Box);

export default function WelcomeBanner({
  weather,
  onAddFarm,
}) {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <MotionBox
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      sx={{
        mb: 4,
        p: 4,
        borderRadius: "24px",
        background:
          "linear-gradient(135deg,#2E7D32,#43A047,#66BB6A)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Grid
        container
        spacing={3}
        alignItems="center"
      >
        {/* Left */}

        <Grid
          item
          xs={12}
          md={8}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
          >
            👋 {greeting},
            {" "}
            {user.full_name || "Farmer"}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              opacity: 0.95,
              fontSize: 18,
            }}
          >
            Welcome back to NutriTrack AI
          </Typography>

          <Typography
            sx={{
              mt: 1,
              opacity: 0.85,
            }}
          >
            Monitor your smart agriculture system
            in real time with live sensor data,
            weather updates and AI-powered
            recommendations.
          </Typography>

          <Box
            mt={3}
            display="flex"
            gap={2}
            flexWrap="wrap"
          >
            <Chip
              icon={<AccessTime />}
              label={today}
              sx={{
                bgcolor: "rgba(255,255,255,.18)",
                color: "white",
              }}
            />

            <Chip
              icon={<Agriculture />}
              label="System Online"
              sx={{
                bgcolor: "rgba(255,255,255,.18)",
                color: "white",
              }}
            />
          </Box>
        </Grid>

        {/* Right */}

        <Grid
          item
          xs={12}
          md={4}
        >
          <Box
            sx={{
              p: 3,
              borderRadius: "20px",
              bgcolor: "rgba(255,255,255,.15)",
              backdropFilter: "blur(15px)",
              textAlign: "center",
            }}
          >
            <WbSunny
              sx={{
                fontSize: 60,
                mb: 1,
              }}
            />

            <Typography
              variant="h3"
              fontWeight="bold"
            >
              {weather?.temp_c ?? "--"}°
            </Typography>

            <Typography>
              {weather?.condition?.text ||
                "Weather Loading"}
            </Typography>

            <Box mt={3}>
              <AppButton
                onClick={onAddFarm}
                sx={{
                  bgcolor: "#ffffff",
                  color: "#2E7D32",

                  "&:hover": {
                    bgcolor: "#F5F5F5",
                  },
                }}
              >
                + Add Farm
              </AppButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </MotionBox>
  );
}