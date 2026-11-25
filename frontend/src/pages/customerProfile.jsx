import { useState } from "react";

function CustomerProfile(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");

    const updateProfile = (e)=>{
        e.preventDefault();
        console.log(name,email,phone);
    };

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">My Profile</h1>

            <form onSubmit={updateProfile}>
                <input className="border p-2 m-2" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />

                <input className="border p-2 m-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

                <input className="border p-2 m-2" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />

                <button className="border p-2 m-2" type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default CustomerProfile;