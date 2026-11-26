function FindProfessionals(){
    return(
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-2xl font-bold text-blue-700">NearPro</h1>
            <h2 className="text-xl mt-5">Find Professionals</h2>
            <p className="text-gray-500 mt-2">Choose a professional for your service needs.</p>

            <div className="grid grid-cols-3 gap-5 mt-8">
                <div className="bg-white p-5">
                    <h3 className="font-bold">Arun Kumar</h3>
                    <p className="text-gray-500 mt-2">Electrician</p>
                    <p className="mt-2">Experience: 4 years</p>
                    <p className="mt-2">Price: ₹500 onwards.</p>
                    <button className="bg-blue-700 text-white p-2 mt-4">View Profile</button>
                </div>

                <div className="bg-white p-5">
                    <h3 className="font-bold">Suresh Raj</h3>
                    <p className="text-gray-500 mt-2">Plumber</p>
                    <p className="mt-2">Experience: 6 years</p>
                    <p className="mt-2">Price: ₹400 onwards</p>
                    <button className="bg-blue-700 text-white p-2 mt-4">View Profile</button>
                </div>

                <div className="bg-white p-5">
                    <h3 className="font-bold">Karthik M</h3>
                    <p className="text-gray-500 mt-2">Painter</p>
                    <p className="mt-2">Experience: 3 years</p>
                    <p className="mt-2">Price: ₹600 onwards</p>
                    <button className="bg-blue-700 text-white p-2 mt-4">View Profile</button>
                </div>
            </div>
        </div>
    );
}

export default FindProfessionals;
