import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function Farms() {

  const [farms, setFarms] = useState([]);

  const [form, setForm] = useState({
    user_id: 1,
    farm_name: "",
    location: "",
    latitude: "",
    longitude: "",
    soil_type: "",
    area: ""
  });

  async function loadFarms() {
    try {
      const res = await axios.get("http://localhost:5000/api/farms");
      setFarms(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadFarms();
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function addFarm(e) {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/farms",
        form
      );

      alert("Farm Added Successfully");

      setForm({
        user_id: 1,
        farm_name: "",
        location: "",
        latitude: "",
        longitude: "",
        soil_type: "",
        area: ""
      });

      loadFarms();

    } catch (err) {

      console.log(err);
      alert("Unable to Add Farm");

    }
  }

  async function deleteFarm(id) {

    if (!window.confirm("Delete this farm?")) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/farms/${id}`
      );

      loadFarms();

    } catch (err) {

      console.log(err);

    }

  }

  return (
    <div>

      <Navbar />

      <div style={{ display: "flex" }}>

        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            background: "#f4f6f9",
            minHeight: "100vh"
          }}
        >

          <h1>🌾 Farm Management</h1>

          <form
            onSubmit={addFarm}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "30px"
            }}
          >

            <input
              name="farm_name"
              placeholder="Farm Name"
              value={form.farm_name}
              onChange={handleChange}
              required
            />

            <br /><br />

            <input
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
            />

            <br /><br />

            <input
              name="latitude"
              placeholder="Latitude"
              value={form.latitude}
              onChange={handleChange}
            />

            <br /><br />

            <input
              name="longitude"
              placeholder="Longitude"
              value={form.longitude}
              onChange={handleChange}
            />

            <br /><br />

            <input
              name="soil_type"
              placeholder="Soil Type"
              value={form.soil_type}
              onChange={handleChange}
            />

            <br /><br />

            <input
              name="area"
              placeholder="Area (Acres)"
              value={form.area}
              onChange={handleChange}
            />

            <br /><br />

            <button
              type="submit"
              style={{
                padding: "12px 25px",
                background: "#2E7D32",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Add Farm
            </button>

          </form>

          <h2>Your Farms</h2>

          <table
            border="1"
            cellPadding="10"
            style={{
              width: "100%",
              background: "white",
              borderCollapse: "collapse"
            }}
          >

            <thead>

              <tr>

                <th>ID</th>
                <th>Farm Name</th>
                <th>Location</th>
                <th>Soil</th>
                <th>Area</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {farms.map((farm) => (

                <tr key={farm.id}>

                  <td>{farm.id}</td>

                  <td>{farm.farm_name}</td>

                  <td>{farm.location}</td>

                  <td>{farm.soil_type}</td>

                  <td>{farm.area}</td>

                  <td>

                    <button
                      onClick={() => deleteFarm(farm.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}