import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  color = "#2E7D32"
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        y: -5
      }}
      transition={{
        duration: 0.25
      }}
    >
      <Card
        elevation={0}
        sx={{
          borderRadius: 4,
          background: "#fff",
          border: "1px solid #E5E7EB",
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
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
                variant="body2"
                color="text.secondary"
              >
                {title}
              </Typography>

              <Typography
                variant="h4"
                fontWeight="bold"
                mt={1}
              >
                {value}
              </Typography>

              <Typography
                color={color}
                mt={1}
              >
                {subtitle}
              </Typography>

            </Box>

            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: `${color}15`,
                color: color,
                fontSize: 32
              }}
            >
              {icon}
            </Box>

          </Box>

        </CardContent>
      </Card>
    </motion.div>
  );
}