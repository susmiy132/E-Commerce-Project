import React, { useState } from "react";
// import Header from "../components/layouts/Header";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";

type propsType = {
    setIsLoggedIn: (status: boolean) => void;
};

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("buyer@gmail.com");
    const [password, setPassword] = useState("password");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle login
        axios
            .post("https://ecom-zb9o.vercel.app/api/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                // react toasting..
                navigate("/");
                localStorage.setItem("token", res.data.token);
                dispatch(setUser(res.data.user));
                console.log("Login Response:", res.data);

                // setUser()
                // setIsLoggedIn(true);
                console.log("login sucucessfulll");
            })
            .catch((err) => {
                console.log(err.response.data.msg);
                alert(err.response.data.msg);
            });
    };

    return (
        <>
            <BreadCrumb />
            <div className="flex items-center justify-center bg-gray-100 px-4 py-12">
                <div className="w-full max-w-md rounded-2xl bg-white p-10 shadow-sm">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <h1 className="mb-2 text-3xl font-bold text-gray-900">Login</h1>
                        <p className="text-sm text-gray-400">
                            Please login using account detail bellow.
                        </p>
                    </div>

                    {/* Fields */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            required
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-lg border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 focus:outline-none"
                        />

                        {/* Forgot password */}
                        <div className="text-left">
                            <a
                                href="/forgot-password"
                                className="text-secondary text-sm hover:underline"
                            >
                                Forgot your password?
                            </a>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="bg-secondary w-full rounded-lg py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-pink-600"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Register link */}
                    <p className="mt-6 text-center text-sm text-gray-400">
                        Don't have an Account?{" "}
                        <a
                            href="/register"
                            className="text-secondary font-medium hover:underline"
                        >
                            Create account
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}