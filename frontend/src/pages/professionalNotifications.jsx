import { useState } from "react";

function ProfessionalNotifications(){
    const[notifications,setNotifications]=useState([
        {id:1,message:"New Electrical Repair request received",date:"26 Nov 2026",read:false},
        {id:2,message:"Your Plumbing booking has been confirmed",date:"25 Nov 2026",read:false},
        {id:3,message:"Customer completed the Home Cleaning service",date:"24 Nov 2026",read:true}
    ]);

    const markRead = (id)=>{
        setNotifications(notifications.map((notification)=>notification.id===id?{...notification,read:true}:notification));
    };

    const clearNotifications = ()=>{
        setNotifications([]);
    };

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">Notifications</h1>
            <p className="text-gray-600 mt-2">View your latest updates</p>

            <button className="border p-2 mt-4" onClick={clearNotifications}>Clear All</button>

            {notifications.map((notification)=>(
                <div key={notification.id} className="border p-4 mt-3">
                    <p>{notification.message}</p>
                    <p className="text-gray-600">{notification.date}</p>
                    <p>Status: {notification.read?"Read":"Unread"}</p>

                    {!notification.read && (
                        <button className="border p-2 mt-2" onClick={()=>markRead(notification.id)}>Mark as Read</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProfessionalNotifications;