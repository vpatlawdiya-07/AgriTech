import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Loader({
  text = "Loading...",
  fullScreen = false,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: fullScreen ? "100vh" : "250px",
        gap: 2,
      }}
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      >
        <CircularProgress
          size={60}
          thickness={4}
          color="success"
        />
      </motion.div>

      <Typography
        variant="h6"
        fontWeight="600"
        color="text.secondary"
      >
        🌱 {text}
      </Typography>
    </Box>
  );
}