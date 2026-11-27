function FindProfessionals() {
    return (
        <div className="min-h-screen bg-gray-50 p-5 md:p-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-blue-700">NearPro</h1>
                    <h2 className="mt-5 text-2xl font-semibold text-gray-800">Find Professionals</h2>
                    <p className="mt-2 text-gray-500">Choose a professional for your service needs.</p>
                </div>
        
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800">Arun Kumar</h3>
                        <p className="mt-2 text-sm font-medium text-blue-700">Electrician</p>
                        <div className="mt-5 space-y-3 text-sm text-gray-600">
                            <p>Experience: 4 years</p>
                            <p>Price: ₹500 onwards</p>
                        </div>
                        <button className="mt-6 w-full rounded-xl bg-blue-700 px-4 py-3 font-medium text-white">View Profile</button>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800">Suresh Raj</h3>
                        <p className="mt-2 text-sm font-medium text-blue-700">Plumber</p>
                        <div className="mt-5 space-y-3 text-sm text-gray-600">
                            <p>Experience: 6 years</p>
                            <p>Price: ₹400 onwards</p>
                        </div>
                        <button className="mt-6 w-full rounded-xl bg-blue-700 px-4 py-3 font-medium text-white">View Profile</button>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800">Karthik M</h3>
                        <p className="mt-2 text-sm font-medium text-blue-700">Painter</p>
                        <div className="mt-5 space-y-3 text-sm text-gray-600">
                            <p>Experience: 3 years</p>
                            <p>Price: ₹600 onwards</p>
                        </div>
                        <button className="mt-6 w-full rounded-xl bg-blue-700 px-4 py-3 font-medium text-white ">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindProfessionals;