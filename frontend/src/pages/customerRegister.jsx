import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/registerschema";

function CustomerRegister() {
    const navigate = useNavigate();

    const {register,handleSubmit,formState: { errors }}=useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit(data) {
        console.log(data);
        alert("Registration successful");
        navigate("/");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4 border bg-white p-6">
                <h1 className="text-2xl font-bold text-center">NearPro Registration</h1>

                <div>
                    <label>Name</label>
                    <input className="w-full border p-2" type="text" placeholder="Enter your name" {...register("name")} />
                    <p className="text-red-600">{errors.name?.message}</p>
                </div>

                <div>
                    <label>Email</label>
                    <input className="w-full border p-2" type="email" placeholder="Enter your email" {...register("email")} />
                    <p className="text-red-600">{errors.email?.message}</p>
                </div>

                <div>
                    <label>Password</label>
                    <input className="w-full border p-2" type="password" placeholder="Enter password" {...register("password")} />
                    <p className="text-red-600">{errors.password?.message}</p>
                </div>

                <div>
                    <label>Age</label>
                    <input className="w-full border p-2" type="number" placeholder="Enter your age" {...register("age")} />
                    <p className="text-red-600">{errors.age?.message}</p>
                </div>

                <button className="w-full bg-blue-600 p-2 text-white" type="submit">
                    Register
                </button>

                <p className="text-center">
                    Already have an account?{" "}
                    <button type="button" className="text-blue-600" onClick={() => navigate("/")}>Login</button>
                </p>
            </form>
        </div>
    );
}

export default CustomerRegister;