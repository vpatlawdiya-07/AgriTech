import {
  FaHome,
  FaHistory,
  FaChartBar,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
    <div
      style={{
        width: "220px",
        background: "#2E7D32",
        color: "white",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>
        🌱 NutriTrack
      </h2>

      <Link
        to="/"
        style={linkStyle}
      >
        <FaHome />
        Dashboard
      </Link>

      <Link
        to="/history"
        style={linkStyle}
      >
        <FaHistory />
        History
      </Link>

      <Link
        to="/reports"
        style={linkStyle}
      >
        <FaChartBar />
        Reports
      </Link>

      <Link
        to="/profile"
        style={linkStyle}
      >
        <FaUser />
        Profile
      </Link>

      <button
        onClick={logout}
        style={buttonStyle}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}

const linkStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "15px",
  marginBottom: "10px",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.08)"
};

const buttonStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "15px",
  marginTop: "30px",
  background: "#C62828",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px"
};