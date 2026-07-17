import {
  Paper,
  InputBase,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  Search,
  Clear,
} from "@mui/icons-material";

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Search...",
  width = "100%",
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        alignItems: "center",
        width,
        px: 2,
        py: 0.5,
        borderRadius: "14px",
        border: "1px solid #E5E7EB",
        background: "#FFFFFF",
        transition: "0.3s",

        "&:hover": {
          boxShadow: "0 8px 25px rgba(0,0,0,.08)",
        },

        "&:focus-within": {
          border: "1px solid #2E7D32",
          boxShadow: "0 0 0 3px rgba(46,125,50,.15)",
        },
      }}
    >
      <Search
        sx={{
          color: "#2E7D32",
          mr: 1,
        }}
      />

      <InputBase
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{
          flex: 1,
          fontSize: 15,
        }}
      />

      {value && (
        <Tooltip title="Clear">
          <IconButton
            size="small"
            onClick={onClear}
          >
            <Clear fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Paper>
  );
}