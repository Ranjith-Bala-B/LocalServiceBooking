function ProfessionalBookings(){
    const bookings=[
        {id:1,customer:"Arun Kumar",service:"Electrical Repair",date:"26 Nov 2026",time:"10:00 AM",status:"Confirmed"},
        {id:2,customer:"Ravi Kumar",service:"Plumbing",date:"27 Nov 2026",time:"02:00 PM",status:"Confirmed"},
        {id:3,customer:"Karthik",service:"Home Cleaning",date:"28 Nov 2026",time:"11:00 AM",status:"Completed"}
    ];

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">My Bookings</h1>
            <p className="text-gray-600 mt-2">View your confirmed service bookings</p>

            {bookings.map((booking)=>(
                <div key={booking.id} className="border p-4 mt-4">
                    <h2 className="font-bold">{booking.service}</h2>
                    <p>Customer: {booking.customer}</p>
                    <p>Date: {booking.date}</p>
                    <p>Time: {booking.time}</p>
                    <p>Status: {booking.status}</p>
                </div>
            ))}
        </div>
    );
}

export default ProfessionalBookings;