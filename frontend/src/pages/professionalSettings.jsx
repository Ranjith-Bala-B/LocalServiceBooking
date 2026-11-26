import { useState } from "react";

function ProfessionalSettings(){
    const[formdata,setFormdata]=useState({password:"",confirmPassword:""});
    const[notifications,setNotifications]=useState(true);

    const handlechange = (e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    };

    const updateSettings = (e)=>{
        e.preventDefault();

        if(formdata.password!==formdata.confirmPassword){
            alert("Passwords do not match");
            return;
        }

        console.log(formdata);
        console.log("Notifications:",notifications);
    };

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-gray-600 mt-2">Manage your account preferences</p>

            <form className="mt-5" onSubmit={updateSettings}>
                <label className="block">New Password</label>
                <input className="border p-2 mt-2" type="password" name="password" value={formdata.password} onChange={handlechange} placeholder="Enter new password" required />

                <label className="block mt-4">Confirm Password</label>
                <input className="border p-2 mt-2" type="password" name="confirmPassword" value={formdata.confirmPassword} onChange={handlechange} placeholder="Confirm password" required />

                <label className="block mt-4">
                    <input type="checkbox" checked={notifications} onChange={(e)=>setNotifications(e.target.checked)} />
                    Enable Notifications
                </label>

                <button className="border p-2 mt-4" type="submit">Save Settings</button>
            </form>
        </div>
    );
}

export default ProfessionalSettings;