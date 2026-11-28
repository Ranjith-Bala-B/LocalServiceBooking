import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/registerschema";

function CustomerRegister() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit(data) {
        console.log(data);
        alert("Registration successful");
        navigate("/", { state: data });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-blue-700">NearPro</h1>
                    <h2 className="mt-2 text-xl font-semibold text-gray-800">Create Customer Account</h2>
                    <p className="mt-2 text-sm text-gray-500">Register to find trusted local professionals</p>
                </div>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
                    <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" type="text" placeholder="Enter your name" {...register("name")} />
                    <p className="mt-1 text-sm text-red-600">{errors.name?.message}</p>
                </div>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                    <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" type="email" placeholder="Enter your email" {...register("email")} />
                    <p className="mt-1 text-sm text-red-600">{errors.email?.message}</p>
                </div>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                    <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" type="password" placeholder="Create a password" {...register("password")} />
                    <p className="mt-1 text-sm text-red-600">{errors.password?.message}</p>
                </div>

                <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Age</label>
                    <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100" type="number" placeholder="Enter your age" {...register("age")} />
                    <p className="mt-1 text-sm text-red-600">{errors.age?.message}</p>
                </div>

                <button className="w-full rounded-xl bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300" type="submit">
                    Create Account
                </button>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <button type="button" className="font-semibold text-blue-700 hover:underline" onClick={() => navigate("/")}>Login</button>
                </p>
            </form>
        </div>
    );
}

export default CustomerRegister;