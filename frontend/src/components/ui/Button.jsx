import { Button, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export default function AppButton({
  children,
  onClick,
  type = "button",
  variant = "contained",
  color = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  sx = {},
}) {
  return (
    <MotionButton
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
      type={type}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      startIcon={!loading ? startIcon : null}
      endIcon={!loading ? endIcon : null}
      sx={{
        borderRadius: "12px",
        padding: "10px 24px",
        fontWeight: 600,
        textTransform: "none",
        fontSize: "15px",
        boxShadow: "0 8px 20px rgba(46,125,50,.25)",
        transition: "all .3s ease",

        "&:hover": {
          boxShadow: "0 12px 30px rgba(46,125,50,.35)",
        },

        ...sx,
      }}
    >
      {loading ? (
        <CircularProgress
          size={22}
          color="inherit"
        />
      ) : (
        children
      )}
    </MotionButton>
  );
}