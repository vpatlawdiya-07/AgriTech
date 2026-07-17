import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Badge,
  InputBase,
  Paper
} from "@mui/material";

import {
  Notifications,
  Search,
  LightMode
} from "@mui/icons-material";

import { FaLeaf } from "react-icons/fa";

export default function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "#ffffff",
        color: "#263238",
        borderBottom: "1px solid #E5E7EB"
      }}
    >

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >

        {/* Logo */}

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >

          <FaLeaf
            size={28}
            color="#2E7D32"
          />

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            NutriTrack
          </Typography>

        </Box>

        {/* Search */}

        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            px: 2,
            py: .5,
            width: 320,
            borderRadius: 10,
            background: "#F5F7FA"
          }}
        >

          <Search />

          <InputBase
            placeholder="Search..."
            sx={{
              ml: 1,
              flex: 1
            }}
          />

        </Paper>

        {/* Right Side */}

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >

          <IconButton>

            <LightMode />

          </IconButton>

          <IconButton>

            <Badge
              badgeContent={3}
              color="error"
            >

              <Notifications />

            </Badge>

          </IconButton>

          <Avatar
            sx={{
              bgcolor: "#2E7D32"
            }}
          >
            {user?.full_name
              ? user.full_name.charAt(0).toUpperCase()
              : "F"}
          </Avatar>

          <Box>

            <Typography
              fontWeight="bold"
            >
              {user?.full_name || "Farmer"}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Smart Agriculture
            </Typography>

          </Box>

        </Box>

      </Toolbar>

    </AppBar>

  );

}