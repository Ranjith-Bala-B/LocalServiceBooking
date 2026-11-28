import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CustomerLogin() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const registerdata = location.state;

    const print = (e) => {
    e.preventDefault();

    if (registerdata && email === registerdata.email && pass === registerdata.password) {
        alert("Login successful");
        navigate("/customerDashboard");
    } else {
        setError("Invalid email or password");
    }
};


return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-blue-700">NearPro</h1>
                <h2 className="mt-3 text-xl font-semibold text-gray-800">Customer Login</h2>
                <p className="mt-2 text-sm text-gray-500">Login to find trusted local professionals</p>
            </div>

            <form onSubmit={print} className="space-y-5">
                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-600" placeholder="Enter your email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                    <input id="password" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-600" placeholder="Enter your password" required type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                </div>

                <p className="text-sm text-red-600">{error}</p>

                <button type="submit" className="w-full rounded-xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800">Login</button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <button type="button" className="font-semibold text-blue-700 hover:underline" onClick={() => navigate("/customerRegister")}>Register</button>
            </p>
        </div>
    </div>
);
}

export default CustomerLogin;