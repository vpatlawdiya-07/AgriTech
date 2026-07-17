import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
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
                "http://localhost:5000/api/auth/login",
                form
            );

            localStorage.setItem("token", res.data.token);
            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            setMessage("Login Successful");

            setTimeout(() => {
                navigate("/");
            }, 1000);

        } catch (err) {

            setMessage(
                err.response?.data?.message ||
                "Login Failed"
            );

        }

    }

    return (

        <div
            style={{
                maxWidth: "450px",
                margin: "50px auto",
                padding: "30px"
            }}
        >

            <h1>🔐 Farmer Login</h1>

            <form onSubmit={handleSubmit}>

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
                        marginBottom: "15px"
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
                        fontSize: "16px",
                        cursor: "pointer"
                    }}
                >
                    Login
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