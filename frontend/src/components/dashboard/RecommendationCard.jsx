import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
  LinearProgress
} from "@mui/material";

import {
  Agriculture,
  LocalFlorist,
  AutoAwesome,
  CheckCircle
} from "@mui/icons-material";

import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function RecommendationCard({ recommendation }) {

  return (

    <MotionCard
      whileHover={{
        scale: 1.02,
        y: -5
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

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            🤖 AI Recommendation
          </Typography>

          <Chip
            label={`${recommendation.confidence}% Match`}
            color="success"
          />

        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          display="flex"
          alignItems="center"
          gap={2}
          mb={3}
        >

          <Agriculture
            sx={{
              fontSize: 45,
              color: "#2E7D32"
            }}
          />

          <Box>

            <Typography
              color="text.secondary"
            >
              Recommended Crop
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
            >
              {recommendation.crop}
            </Typography>

          </Box>

        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={2}
          mb={3}
        >

          <LocalFlorist color="success" />

          <Typography>
            Fertilizer :
            <strong> {recommendation.fertilizer}</strong>
          </Typography>

        </Box>

        <Typography
          fontWeight="bold"
          mb={1}
        >
          Confidence
        </Typography>

        <LinearProgress
          variant="determinate"
          value={recommendation.confidence}
          sx={{
            height: 10,
            borderRadius: 10,
            mb: 3
          }}
        />

        <Typography
          fontWeight="bold"
          mb={2}
        >
          Reasons
        </Typography>

        {recommendation.reasons.map((reason, index) => (

          <Box
            key={index}
            display="flex"
            alignItems="center"
            gap={1}
            mb={1}
          >

            <CheckCircle
              sx={{
                color: "#43A047",
                fontSize: 18
              }}
            />

            <Typography>
              {reason}
            </Typography>

          </Box>

        ))}

      </CardContent>

    </MotionCard>

  );

}