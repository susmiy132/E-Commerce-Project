import React, { useState } from "react";
import { Link } from "react-router-dom";

type LoginFormType = {
    email: string;
    password: string;
};

export default function LoginForm() {

    const [formData, setFormData] = useState<LoginFormType>({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(" ");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!formData.email || !formData.password) {
            setError("All fields are required");
            return;
        }

        setLoading(true);

        // fake API call
        setTimeout(() => {
            console.log("Login Data:", formData);
            setLoading(false);

            // after login redirect (example dashboard)
            alert("Login successful");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-xl shadow-md">

                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Welcome Back
                </h2>

                <p className="text-center text-sm text-gray-500 mt-1">
                    Login to your account
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    {/* Password */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        className="text-red-600 hover:underline"
                    >
                        <Link to="/register">SignUp</Link>
                    </button>
                </p>

            </div>
        </div>
    );
}