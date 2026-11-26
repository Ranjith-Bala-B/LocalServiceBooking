import { useState } from "react";

function ProfessionalServices(){
    const[services,setServices]=useState([
        {id:1,name:"Electrical Repair",price:"500"},
        {id:2,name:"Plumbing",price:"700"}
    ]);

    const[formdata,setFormdata]=useState({name:"",price:""});

    const handlechange = (e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    };

    const addService = (e)=>{
        e.preventDefault();
        setServices([...services,{id:Date.now(),name:formdata.name,price:formdata.price}]);
        setFormdata({name:"",price:""});
    };

    const removeService = (id)=>{
        setServices(services.filter((service)=>service.id!==id));
    };

    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold">My Services</h1>
            <p className="text-gray-600 mt-2">Manage the services you provide</p>

            <form className="mt-5" onSubmit={addService}>
                <input className="border p-2 m-2" name="name" value={formdata.name} onChange={handlechange} placeholder="Service name" required />

                <input className="border p-2 m-2" name="price" type="number" value={formdata.price} onChange={handlechange} placeholder="Price in ₹" required />

                <button className="border p-2 m-2" type="submit">Add Service</button>
            </form>

            <h2 className="text-xl font-bold mt-6">Available Services</h2>

            {services.map((service)=>(
                <div key={service.id} className="border p-4 mt-3">
                    <h3 className="font-bold">{service.name}</h3>
                    <p>Price: ₹{service.price}</p>
                    <button className="border p-2 mt-2" onClick={()=>removeService(service.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ProfessionalServices;