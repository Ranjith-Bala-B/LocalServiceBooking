function ProfessionalReviews(){
    const reviews=[
        {id:1,customer:"Arun Kumar",service:"Electrical Repair",rating:5,comment:"Excellent service and completed on time"},
        {id:2,customer:"Ravi Kumar",service:"Plumbing",rating:4,comment:"Good work and professional"},
        {id:3,customer:"Karthik",service:"Home Cleaning",rating:5,comment:"Very satisfied with the service"}
    ];

    const average=reviews.reduce((sum,review)=>sum+review.rating,0)/reviews.length;

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">Customer Reviews</h1>
            <p className="text-gray-600 mt-2">View feedback from your customers</p>

            <div className="border p-4 mt-5">
                <h2 className="text-gray-600">Average Rating</h2>
                <p className="text-2xl font-bold">{average.toFixed(1)} / 5</p>
                <p>Total Reviews: {reviews.length}</p>
            </div>

            <h2 className="text-xl font-bold mt-6">All Reviews</h2>

            {reviews.map((review)=>(
                <div key={review.id} className="border p-4 mt-3">
                    <h3 className="font-bold">{review.customer}</h3>
                    <p>{review.service}</p>
                    <p>Rating: {review.rating}/5</p>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
}

export default ProfessionalReviews;