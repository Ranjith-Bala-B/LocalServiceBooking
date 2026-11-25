import { useState } from "react";

function CustomerReviews(){
    const[reviews,setReviews]=useState([
        {id:1,name:"Arun Kumar",service:"Electrical Repair",rating:5,comment:"Good service"},
        {id:2,name:"Ravi Kumar",service:"Plumbing",rating:4,comment:"Completed on time"}
    ]);

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">My Reviews</h1>
            <p className="mt-2 text-gray-600">Your feedback about professionals</p>

            <div className="mt-5">
                {reviews.map((review)=>(
                    <div key={review.id} className="border p-4 mb-3">
                        <h2 className="font-bold">{review.name}</h2>
                        <p>{review.service}</p>
                        <p>Rating: {review.rating}/5</p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomerReviews;