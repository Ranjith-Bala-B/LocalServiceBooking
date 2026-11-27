import { useState } from "react";

function CustomerProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const updateProfile = (e) => {
        e.preventDefault();
        console.log(name, email, phone);
        alert("Profile updated successfully");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-5 md:p-8">
            <div className="mx-auto max-w-3xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                    <p className="mt-2 text-gray-500">Manage your personal information</p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                    <div className="mb-6 border-b border-gray-200 pb-5">
                        <h2 className="text-xl font-semibold text-gray-800">Personal Details</h2>
                        <p className="mt-1 text-sm text-gray-500">Update your account information</p>
                    </div>

                    <form onSubmit={updateProfile} className="space-y-5">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                            <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                            <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                            <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>

                        <div className="flex justify-end border-t border-gray-200 pt-5">
                            <button className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800" type="submit">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CustomerProfile;