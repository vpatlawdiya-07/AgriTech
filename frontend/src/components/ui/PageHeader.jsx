import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AppButton from "./Button";

const MotionBox = motion(Box);

export default function PageHeader({
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onButtonClick,
  children,
}) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      sx={{
        mb: 4,
        p: 3,
        borderRadius: "20px",
        background:
          "linear-gradient(135deg,#ffffff,#f8fafc)",
        border: "1px solid #E5E7EB",
        boxShadow: "0 12px 30px rgba(0,0,0,.06)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="700"
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            mt={1}
          >
            {subtitle}
          </Typography>
        </Box>

        {buttonText && (
          <AppButton
            startIcon={buttonIcon}
            onClick={onButtonClick}
          >
            {buttonText}
          </AppButton>
        )}
      </Box>

      {children && (
        <Box mt={3}>
          {children}
        </Box>
      )}
    </MotionBox>
  );
}