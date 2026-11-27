import { useState } from "react";

function CustomerReviews() {
    const [reviews, setReviews] = useState([
        { id: 1, name: "Arun Kumar", service: "Electrical Repair", rating: 5, comment: "Good service" },
        { id: 2, name: "Ravi Kumar", service: "Plumbing", rating: 4, comment: "Completed on time" }
    ]);

    return (
        <div className="min-h-screen bg-gray-50 p-5 md:p-8">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">My Reviews</h1>
                    <p className="mt-2 text-gray-500">Your feedback about professionals</p>
                </div>

                <div className="space-y-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{review.name}</h2>
                                    <p className="mt-1 text-sm text-gray-500">{review.service}</p>
                                </div>

                                <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                                    {review.rating}/5 Rating
                                </span>
                            </div>

                            <div className="mt-5 border-t border-gray-100 pt-4">
                                <p className="text-gray-600">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CustomerReviews;