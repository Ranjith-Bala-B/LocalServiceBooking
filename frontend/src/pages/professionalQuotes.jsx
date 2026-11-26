import { useState } from "react";

function ProfessionalQuotes() {
    const [quotes, setQuotes] = useState([]);
    const [requestId, setRequestId] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const sendQuote = (e) => {
        e.preventDefault();
        const newQuote = {requestId,amount,description,status: "Sent"};
        setQuotes([...quotes, newQuote]);
        setRequestId("");
        setAmount("");
        setDescription("");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-6 text-2xl font-bold">Send Quotes</h1>

                <form onSubmit={sendQuote} className="mb-8 space-y-4 rounded-lg border bg-white p-5">
                    <input className="w-full border p-2" placeholder="Request ID" value={requestId} onChange={(e) => setRequestId(e.target.value)} required/>

                    <input className="w-full border p-2" type="number" placeholder="Estimated Price" value={amount} onChange={(e) => setAmount(e.target.value)} required/>

                    <textarea className="w-full border p-2" placeholder="Quote Description" value={description} onChange={(e) => setDescription(e.target.value)} required />

                    <button className="bg-blue-600 px-4 py-2 text-white">Send </button>
                </form>

                <h2 className="mb-4 text-xl font-semibold">Sent Quotes</h2>

                {quotes.map((quote, index) => (
                    <div key={index} className="mb-3 border bg-white p-4">
                        <p>Request ID: {quote.requestId}</p>
                        <p>Estimated Price: ₹{quote.amount}</p>
                        <p>Description: {quote.description}</p>
                        <p>Status: {quote.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfessionalQuotes;