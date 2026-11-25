function CustomerDashboard(){
    return(
        <div className="flex bg-gray-100 min-h-screen">

            <div className="w-64 bg-white p-5">
                <h1 className="text-2xl font-bold text-blue-700">NearPro</h1>
                <p className="text-gray-500">Local Services</p>

                <div className="mt-8">
                    <button className="bg-blue-700 text-white p-2 w-full">Dashboard</button>
                    <button className="p-2 w-full text-left">Find Professionals</button>
                    <button className="p-2 w-full text-left">My Requests</button>
                    <button className="p-2 w-full text-left">My Bookings</button>
                    <button className="p-2 w-full text-left">My Profile</button>
                </div>
            </div>

            <div className="flex-1 p-8">
                <h2 className="text-3xl font-semibold">Customer Dashboard</h2>
                <p className="text-gray-500 mt-2">Welcome to NearPro</p>

                <div className="grid grid-cols-3 gap-5 mt-8">
                    <div className="bg-white p-5">
                        <p className="text-gray-500">Total Requests</p>
                        <h3 className="text-3xl font-bold mt-2">05</h3>
                    </div>

                    <div className="bg-white p-5">
                        <p className="text-gray-500">Active Bookings</p>
                        <h3 className="text-3xl font-bold text-blue-700 mt-2">02</h3>
                    </div>

                    <div className="bg-white p-5">
                        <p className="text-gray-500">Completed Services</p>
                        <h3 className="text-3xl font-bold text-green-700 mt-2">03</h3>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold">Browse Services</h3>

                    <div className="grid grid-cols-4 gap-5 mt-5">
                        <div className="bg-white p-5">
                            <h4 className="font-semibold">Electrical</h4>
                            <p className="text-gray-500 mt-2">Electrical repairs</p>
                        </div>

                        <div className="bg-white p-5">
                            <h4 className="font-semibold">Plumbing</h4>
                            <p className="text-gray-500 mt-2">Water and pipe repairs</p>
                        </div>

                        <div className="bg-white p-5">
                            <h4 className="font-semibold">Cleaning</h4>
                            <p className="text-gray-500 mt-2">Home cleaning</p>
                        </div>

                        <div className="bg-white p-5">
                            <h4 className="font-semibold">Painting</h4>
                            <p className="text-gray-500 mt-2">Wall painting</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 mt-8">
                    <h3 className="text-xl font-semibold">Recent Service Requests</h3>

                    <div className="flex justify-between border-b p-4">
                        <div>
                            <p className="font-semibold">Electrical Repair</p>
                            <p className="text-gray-500">24 November</p>
                        </div>
                        <p className="text-yellow-700">Pending</p>
                    </div>

                    <div className="flex justify-between p-4">
                        <div>
                            <p className="font-semibold">Plumbing Service</p>
                            <p className="text-gray-500">22 November</p>
                        </div>
                        <p className="text-green-700">Confirmed</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CustomerDashboard;
