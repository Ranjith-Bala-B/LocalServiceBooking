function ProfessionalCompletedJobs(){
    const jobs=[
        {id:1,customer:"Arun Kumar",service:"Electrical Repair",date:"20 Nov 2026",amount:1500},
        {id:2,customer:"Ravi Kumar",service:"Plumbing",date:"22 Nov 2026",amount:2000},
        {id:3,customer:"Karthik",service:"Home Cleaning",date:"24 Nov 2026",amount:1200}
    ];

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">Completed Jobs</h1>
            <p className="text-gray-600 mt-2">View your successfully completed services</p>

            <div className="border p-4 mt-5">
                <h2 className="text-gray-600">Total Completed Jobs</h2>
                <p className="text-2xl font-bold">{jobs.length}</p>
            </div>

            {jobs.map((job)=>(
                <div key={job.id} className="border p-4 mt-3">
                    <h2 className="font-bold">{job.service}</h2>
                    <p>Customer: {job.customer}</p>
                    <p>Date: {job.date}</p>
                    <p>Amount: ₹{job.amount}</p>
                    <p>Status: Completed</p>
                </div>
            ))}
        </div>
    );
}

export default ProfessionalCompletedJobs;