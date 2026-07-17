import { Box, Typography } from "@mui/material";
import SentimentDissatisfiedRoundedIcon from "@mui/icons-material/SentimentDissatisfiedRounded";
import AppButton from "./Button";

export default function EmptyState({
  title = "No Data Found",
  description = "There is nothing to display here.",
  buttonText,
  onButtonClick,
}) {
  return (
    <Box
      sx={{
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 4,
        borderRadius: 4,
        background: "#fff",
        border: "1px solid #E5E7EB",
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
      }}
    >
      <SentimentDissatisfiedRoundedIcon
        sx={{
          fontSize: 80,
          color: "#BDBDBD",
          mb: 2,
        }}
      />

      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          maxWidth: 450,
          mb: 3,
        }}
      >
        {description}
      </Typography>

      {buttonText && (
        <AppButton onClick={onButtonClick}>
          {buttonText}
        </AppButton>
      )}
    </Box>
  );
}