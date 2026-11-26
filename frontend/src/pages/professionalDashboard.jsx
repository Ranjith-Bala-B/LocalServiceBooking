import { useState } from "react";

function ProfessionalDashboard(){
    const[requests,setRequests]=useState([
        {id:1,customer:"Arun Kumar",service:"Electrical Repair",date:"26 Nov 2026",status:"Pending"},
        {id:2,customer:"Ravi Kumar",service:"Plumbing",date:"27 Nov 2026",status:"Accepted"},
        {id:3,customer:"Karthik",service:"Home Cleaning",date:"28 Nov 2026",status:"Pending"}
    ]);

    const acceptRequest = (id)=>{
        setRequests(requests.map((request)=>request.id===id?{...request,status:"Accepted"}:request));
    };

    const rejectRequest = (id)=>{
        setRequests(requests.filter((request)=>request.id!==id));
    };

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">Professional Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your service requests and bookings</p>

            <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="border p-4">
                    <h2 className="text-gray-600">Total Requests</h2>
                    <p className="text-2xl font-bold">{requests.length}</p>
                </div>

                <div className="border p-4">
                    <h2 className="text-gray-600">Accepted Requests</h2>
                    <p className="text-2xl font-bold">{requests.filter((request)=>request.status==="Accepted").length}</p>
                </div>

                <div className="border p-4">
                    <h2 className="text-gray-600">Completed Jobs</h2>
                    <p className="text-2xl font-bold">12</p>
                </div>

                <div className="border p-4">
                    <h2 className="text-gray-600">Total Earnings</h2>
                    <p className="text-2xl font-bold">₹8,500</p>
                </div>
            </div>

            <h2 className="text-xl font-bold mt-6 mb-3">Service Requests</h2>

            {requests.map((request)=>(
                <div key={request.id} className="border p-4 mb-3">
                    <h3 className="font-bold">{request.service}</h3>
                    <p>Customer: {request.customer}</p>
                    <p>Date: {request.date}</p>
                    <p>Status: {request.status}</p>

                    {request.status==="Pending" && (
                        <div className="mt-3">
                            <button className="border p-2 mr-2" onClick={()=>acceptRequest(request.id)}>Accept</button>
                            <button className="border p-2" onClick={()=>rejectRequest(request.id)}>Reject</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProfessionalDashboard;