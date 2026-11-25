function MyBookings(){
    return(
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-2xl font-bold text-blue-700">NearPro</h1>
            <h2 className="text-xl mt-5">My Bookings</h2>
            <p className="text-gray-500 mt-2">View your confirmed and completed services.</p>

            <div className="bg-white p-5 mt-8">
                <div className="flex justify-between border-b p-4">
                    <div>
                        <h3 className="font-bold">Electrical Repair</h3>
                        <p className="text-gray-500 mt-2">Professional: Arun Kumar</p>
                        <p className="text-gray-500 mt-2">Date: 28 November 2026</p>
                    </div>
                    <p className="text-blue-700">Confirmed</p>
                </div>

                <div className="flex justify-between border-b p-4">
                    <div>
                        <h3 className="font-bold">Plumbing Service</h3>
                        <p className="text-gray-500 mt-2">Professional: Suresh Raj</p>
                        <p className="text-gray-500 mt-2">Date: 26 November 2026</p>
                    </div>
                    <p className="text-yellow-700">In Progress</p>
                </div>

                <div className="flex justify-between p-4">
                    <div>
                        <h3 className="font-bold">Home Cleaning</h3>
                        <p className="text-gray-500 mt-2">Professional: Karthik M</p>
                        <p className="text-gray-500 mt-2">Date: 20 November 2026</p>
                    </div>
                    <p className="text-green-700">Completed</p>
                </div>
            </div>
        </div>
    );
}

export default MyBookings;