import { useState } from "react";

function CustomerLogin(){
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");

    const print = (e)=>{
        e.preventDefault();
        console.log(email,pass);
    };

    return(
        <div className="bg-gray-100 min-h-screen flex">
            <div className="bg-white p-8">
                <h1 className="text-2xl font-bold text-blue-700">NearPro</h1>
                <h2 className="text-xl mt-5">Customer Login</h2>
                <p className="text-gray-500 mt-2">Login to find local professionals</p>

                <form onSubmit={print} className="mt-5">
                    <label>Email</label>
                    <input className="border p-2 w-full mt-2" placeholder="Enter email" required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

                    <label className="block mt-4">Password</label>
                    <input className="border p-2 w-full mt-2" placeholder="Enter password" required type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

                    <button type="submit" className="bg-blue-700 text-white p-2 w-full mt-5">Login</button>
                </form>
            </div>
        </div>
    );
}

export default CustomerLogin;
