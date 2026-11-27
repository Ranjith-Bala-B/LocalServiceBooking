function MyBookings() {
    return (
        <div className="min-h-screen bg-gray-50 p-5 md:p-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-blue-700">NearPro</h1>
                    <h2 className="mt-5 text-2xl font-semibold text-gray-800">My Bookings</h2>
                    <p className="mt-2 text-gray-500">View your confirmed and completed services.</p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Electrical Repair</h3>
                            <p className="mt-2 text-sm text-gray-500">Professional: Arun Kumar</p>
                            <p className="mt-1 text-sm text-gray-500">Date: 28 November 2026</p>
                        </div>
                        <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">Confirmed</span>
                    </div>

                    <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Plumbing Service</h3>
                            <p className="mt-2 text-sm text-gray-500">Professional: Suresh Raj</p>
                            <p className="mt-1 text-sm text-gray-500">Date: 26 November 2026</p>
                        </div>
                        <span className="w-fit rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">In Progress</span>
                    </div>

                    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Home Cleaning</h3>
                            <p className="mt-2 text-sm text-gray-500">Professional: Karthik M</p>
                            <p className="mt-1 text-sm text-gray-500">Date: 20 November 2026</p>
                        </div>
                        <span className="w-fit rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">Completed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyBookings;