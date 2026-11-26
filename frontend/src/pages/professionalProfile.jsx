import { useState } from "react";

function ProfessionalProfile(){
    const[formdata,setFormdata]=useState({name:"",email:"",phone:"",service:"",experience:"",price:""});

    const handlechange = (e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    };

    const updateProfile = (e)=>{
        e.preventDefault();
        console.log(formdata);
    };

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">Professional Profile</h1>
            <p className="text-gray-600 mt-2">Manage your personal and service details</p>

            <form className="mt-5" onSubmit={updateProfile}>
                <label>Name</label>
                <input className="border p-2 m-2 block" name="name" value={formdata.name} onChange={handlechange} placeholder="Enter name" required />

                <label>Email</label>
                <input className="border p-2 m-2 block" name="email" type="email" value={formdata.email} onChange={handlechange} placeholder="Enter email" required />

                <label>Phone</label>
                <input className="border p-2 m-2 block" name="phone" value={formdata.phone} onChange={handlechange} placeholder="Enter phone number" required />

                <label>Service</label>
                <input className="border p-2 m-2 block" name="service" value={formdata.service} onChange={handlechange} placeholder="Enter service type" required />

                <label>Experience</label>
                <input className="border p-2 m-2 block" name="experience" value={formdata.experience} onChange={handlechange} placeholder="Years of experience" required />

                <label>Price</label>
                <input className="border p-2 m-2 block" name="price" value={formdata.price} onChange={handlechange} placeholder="Service price" required />

                <button className="border p-2 mt-3" type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default ProfessionalProfile;