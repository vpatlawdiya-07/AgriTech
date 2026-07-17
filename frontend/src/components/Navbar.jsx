import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav
      style={{
        backgroundColor: "#2E7D32",
        color: "white",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>🌱 NutriTrack</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Dashboard
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/history">
          History
        </Link>

        <Link style={{ color: "white", textDecoration: "none" }} to="/reports">
          Reports
        </Link>

        <span>👤 {user?.full_name}</span>

        <button
          onClick={logout}
          style={{
            padding: "8px 15px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}