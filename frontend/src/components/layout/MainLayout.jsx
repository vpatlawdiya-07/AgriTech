import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background: "#F5F7FA"
      }}
    >
      {/* Sidebar */}

      <Sidebar />

      {/* Right Section */}

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        {/* Navbar */}

        <Navbar />

        {/* Page */}

        <Box
          sx={{
            flex: 1,
            p: 4,
            overflow: "auto"
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}