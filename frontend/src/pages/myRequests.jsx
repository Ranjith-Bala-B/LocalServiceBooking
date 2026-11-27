function MyRequests() {
    return (
        <div className="bg-gray-50 min-h-screen p-6 md:p-8">
        <div className="mx-auto max-w-5xl">
            <h1 className="text-2xl font-bold text-blue-700">NearPro</h1>

            <h2 className="text-xl font-semibold text-gray-800 mt-6">My Service Requests</h2>
            <p className="text-gray-500 mt-2">View and manage your service requests.</p>

            <div className="bg-white border border-gray-200 rounded-2xl mt-8 p-4 md:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-gray-100 p-4">
                    <div>
                        <h3 className="font-semibold text-gray-800">Electrical Repair</h3>
                        <p className="text-gray-500 text-sm mt-2">Requested on 24 November</p>
                    </div>
                    <span className="bg-yellow-50 text-yellow-700 text-sm font-medium px-3 py-1.5 rounded-full w-fit">Pending</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-gray-100 p-4">
                    <div>
                        <h3 className="font-semibold text-gray-800">Plumbing Service</h3>
                        <p className="text-gray-500 text-sm mt-2">Requested on 22 November</p>
                    </div>
                    <span className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full w-fit">Quotation Received</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-4">
                    <div>
                        <h3 className="font-semibold text-gray-800">Home Cleaning</h3>
                        <p className="text-gray-500 text-sm mt-2">Requested on 20 November</p>
                    </div>
                    <span className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full w-fit">Confirmed</span>
                </div>
            </div>
        </div>
        </div>
    );
}

export default MyRequests;