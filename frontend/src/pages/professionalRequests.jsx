import { useState } from "react";

function ProfessionalRequests(){
    const[requests,setRequests]=useState([
        {id:1,customer:"Arun Kumar",service:"Electrical Repair",date:"26 Nov 2026",status:"Pending"},
        {id:2,customer:"Ravi Kumar",service:"Plumbing",date:"27 Nov 2026",status:"Accepted"},
        {id:3,customer:"Karthik",service:"Home Cleaning",date:"28 Nov 2026",status:"Pending"}
    ]);

    const updateStatus = (id,status)=>{
        setRequests(requests.map((request)=>request.id===id?{...request,status}:request));
    };

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">Service Requests</h1>
            <p className="text-gray-600 mt-2">View and manage customer requests</p>

            {requests.map((request)=>(
                <div key={request.id} className="border p-4 mt-4">
                    <h2 className="font-bold">{request.service}</h2>
                    <p>Customer: {request.customer}</p>
                    <p>Date: {request.date}</p>
                    <p>Status: {request.status}</p>

                    {request.status==="Pending" && (
                        <div className="mt-3">
                            <button className="border p-2 mr-2" onClick={()=>updateStatus(request.id,"Accepted")}>Accept</button>
                            <button className="border p-2" onClick={()=>updateStatus(request.id,"Rejected")}>Reject</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProfessionalRequests;