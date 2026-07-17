import { useState } from "react";
import axios from "axios";

export default function Register() {

    const [form, setForm] = useState({
        full_name: "",
        email: "",
        password: "",
        phone: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/auth/register",
                form
            );

            setMessage(res.data.message);

            setForm({
                full_name: "",
                email: "",
                password: "",
                phone: ""
            });

        } catch (err) {

            setMessage(
                err.response?.data?.message ||
                "Registration failed"
            );

        }
    }

    return (

        <div
            style={{
                padding: "30px",
                maxWidth: "450px",
                margin: "auto"
            }}
        >

            <h1>📝 Farmer Registration</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="full_name"
                    placeholder="Full Name"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "12px"
                    }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "12px"
                    }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "12px"
                    }}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginBottom: "20px"
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#2E7D32",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}
                >
                    Register
                </button>

            </form>

            {message && (
                <p
                    style={{
                        marginTop: "20px",
                        fontWeight: "bold"
                    }}
                >
                    {message}
                </p>
            )}

        </div>

    );
}