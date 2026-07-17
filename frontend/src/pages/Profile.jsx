import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

export default function Profile() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div>

            <Navbar />

            <div
                style={{
                    display: "flex"
                }}
            >

                <Sidebar />

                <div
                    style={{
                        flex: 1,
                        padding: "30px",
                        background: "#F5F5F5",
                        minHeight: "100vh"
                    }}
                >

                    <h1>👤 Farmer Profile</h1>

                    <div
                        style={{
                            background: "white",
                            padding: "25px",
                            borderRadius: "10px",
                            marginTop: "20px",
                            maxWidth: "500px"
                        }}
                    >

                        <h3>Full Name</h3>
                        <p>{user?.full_name}</p>

                        <h3>Email</h3>
                        <p>{user?.email}</p>

                        <h3>Role</h3>
                        <p>{user?.role}</p>

                    </div>

                </div>

            </div>

        </div>
    );
}