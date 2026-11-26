function ProfessionalEarnings(){
    const earnings=[
        {id:1,service:"Electrical Repair",customer:"Arun Kumar",date:"20 Nov 2026",amount:1500},
        {id:2,service:"Plumbing",customer:"Ravi Kumar",date:"22 Nov 2026",amount:2000},
        {id:3,service:"Home Cleaning",customer:"Karthik",date:"24 Nov 2026",amount:1200}
    ];

    const total=earnings.reduce((sum,job)=>sum+job.amount,0);

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">My Earnings</h1>
            <p className="text-gray-600 mt-2">Track your completed services and income</p>

            <div className="border p-4 mt-5">
                <h2 className="text-gray-600">Total Earnings</h2>
                <p className="text-2xl font-bold">₹{total}</p>
            </div>

            <h2 className="text-xl font-bold mt-6">Completed Jobs</h2>

            {earnings.map((job)=>(
                <div key={job.id} className="border p-4 mt-3">
                    <h3 className="font-bold">{job.service}</h3>
                    <p>Customer: {job.customer}</p>
                    <p>Date: {job.date}</p>
                    <p>Amount: ₹{job.amount}</p>
                </div>
            ))}
        </div>
    );
}

export default ProfessionalEarnings;