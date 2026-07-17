import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function AppCard({
  title,
  subtitle,
  icon,
  children,
  footer,
  sx = {},
}) {
  return (
    <MotionCard
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      elevation={0}
      sx={{
        borderRadius: "20px",
        border: "1px solid #E5E7EB",
        background: "#FFFFFF",
        boxShadow: "0 12px 35px rgba(0,0,0,.08)",
        overflow: "hidden",
        ...sx,
      }}
    >
      {(title || subtitle || icon) && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 3,
            borderBottom: "1px solid #F1F5F9",
          }}
        >
          <Box>
            {title && (
              <Typography
                variant="h6"
                fontWeight="700"
              >
                {title}
              </Typography>
            )}

            {subtitle && (
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {subtitle}
              </Typography>
            )}
          </Box>

          {icon}
        </Box>
      )}

      <CardContent
        sx={{
          p: 3,
        }}
      >
        {children}
      </CardContent>

      {footer && (
        <Box
          sx={{
            p: 2,
            borderTop: "1px solid #F1F5F9",
            background: "#FAFAFA",
          }}
        >
          {footer}
        </Box>
      )}
    </MotionCard>
  );
}