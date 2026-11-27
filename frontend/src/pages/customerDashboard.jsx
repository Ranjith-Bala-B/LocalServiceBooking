
import { useNavigate } from "react-router-dom";

function CustomerDashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <h1 className="text-2xl font-bold text-blue-700">NearPro</h1>
            <p className="text-gray-500">Local Services</p>

            <div className="mt-5 flex flex-wrap gap-3">
                <button className="rounded bg-blue-700 px-4 py-2 text-white">Dashboard</button>
                <button onClick={() => navigate("/findProfessionals")} className="rounded bg-white px-4 py-2">Find Professionals</button>
                <button onClick={() => navigate("/myRequests")} className="rounded bg-white px-4 py-2">My Requests</button>
                <button onClick={() => navigate("/myBookings")} className="rounded bg-white px-4 py-2">My Bookings</button>
                <button onClick={() => navigate("/customerProfile")} className="rounded bg-white px-4 py-2">My Profile</button>
            </div>

            <h2 className="mt-8 text-2xl font-semibold">Customer Dashboard</h2>
            <p className="mt-2 text-gray-500">Welcome to NearPro</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded bg-white p-5">
                    <p>Total Requests</p>
                    <h3 className="mt-2 text-2xl font-bold">05</h3>
                </div>

                <div className="rounded bg-white p-5">
                    <p>Active Bookings</p>
                    <h3 className="mt-2 text-2xl font-bold text-blue-700">02</h3>
                </div>

                <div className="rounded bg-white p-5">
                    <p>Completed Services</p>
                    <h3 className="mt-2 text-2xl font-bold text-green-700">03</h3>
                </div>
            </div>

            <h3 className="mt-8 text-xl font-semibold">Browse Services</h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded bg-white p-4">Electrical</div>
                <div className="rounded bg-white p-4">Plumbing</div>
                <div className="rounded bg-white p-4">Cleaning</div>
                <div className="rounded bg-white p-4">Painting</div>
            </div>

            <h3 className="mt-8 text-xl font-semibold">Recent Service Requests</h3>

            <div className="mt-4 rounded bg-white p-5">
                <div className="flex justify-between border-b py-3">
                    <div>
                        <p className="font-medium">Electrical Repair</p>
                        <p className="text-sm text-gray-500">24 November</p>
                    </div>
                    <p className="text-yellow-700">Pending</p>
                </div>

                <div className="flex justify-between py-3">
                    <div>
                        <p className="font-medium">Plumbing Service</p>
                        <p className="text-sm text-gray-500">22 November</p>
                    </div>
                    <p className="text-green-700">Confirmed</p>
                </div>
            </div>
        </div>
    );
}

export default CustomerDashboard;
