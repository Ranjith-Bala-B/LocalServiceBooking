function MyRequests(){
    return(
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-2xl font-bold text-blue-700">NearPro</h1>
            <h2 className="text-xl mt-5">My Service Requests</h2>
            <p className="text-gray-500 mt-2">View and manage your service requests.</p>

            <div className="bg-white p-5 mt-8">
                <div className="flex justify-between border-b p-4">
                    <div>
                        <h3 className="font-bold">Electrical Repair</h3>
                        <p className="text-gray-500 mt-2">Requested on 24 November</p>
                    </div>
                    <p className="text-yellow-700">Pending</p>
                </div>

                <div className="flex justify-between border-b p-4">
                    <div>
                        <h3 className="font-bold">Plumbing Service</h3>
                        <p className="text-gray-500 mt-2">Requested on 22 November</p>
                    </div>
                    <p className="text-blue-700">Quotation Received</p>
                </div>

                <div className="flex justify-between p-4">
                    <div>
                        <h3 className="font-bold">Home Cleaning</h3>
                        <p className="text-gray-500 mt-2">Requested on 20 November</p>
                    </div>
                    <p className="text-green-700">Confirmed</p>
                </div>
            </div>
        </div>
    );
}

export default MyRequests;
