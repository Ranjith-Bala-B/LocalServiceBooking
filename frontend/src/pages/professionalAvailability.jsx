import { useState } from "react";

function ProfessionalAvailability(){
    const[formdata,setFormdata]=useState({days:[],start:"",end:""});

    const handleDays = (e)=>{
        if(e.target.checked){
            setFormdata({...formdata,days:[...formdata.days,e.target.value]});
        }
        else{
            setFormdata({...formdata,days:formdata.days.filter((day)=>day!==e.target.value)});
        }
    };

    const handlechange = (e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    };

    const saveAvailability = (e)=>{
        e.preventDefault();
        console.log(formdata);
    };

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">My Availability</h1>
            <p className="text-gray-600 mt-2">Set your working days and timings</p>

            <form className="mt-5" onSubmit={saveAvailability}>
                <h2 className="font-bold mb-2">Available Days</h2>

                {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day)=>(
                    <label key={day} className="block">
                        <input type="checkbox" value={day} onChange={handleDays} />
                        {day}
                    </label>
                ))}

                <label className="block mt-4">Start Time</label>
                <input className="border p-2 mt-2" type="time" name="start" value={formdata.start} onChange={handlechange} required />

                <label className="block mt-4">End Time</label>
                <input className="border p-2 mt-2" type="time" name="end" value={formdata.end} onChange={handlechange} required />

                <button className="border p-2 mt-4" type="submit">Save Availability</button>
            </form>
        </div>
    );
}

export default ProfessionalAvailability;