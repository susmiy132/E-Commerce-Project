import React, { useState } from 'react';
import { Link } from 'react-router-dom';
type FormDataType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignUpForm() {
    const [formData, setFormData] = useState<FormDataType>({
        firstName: " ",
        lastName: " ",
        email: " ",
        password: " ",
        confirmPassword: " ",

    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Form Data", formData);
    };

    return (
        <div className=' min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <p>Please create an account using the details below.</p>

                <input
                    type="text"
                    name='firstName'
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    name='lastName'
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className='w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />


                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />


                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type='submit'
                    className='w-full bg-red-600 font-bold text-white py-2 rounded-lg hover:bg-red-800'>
                    Create Account
                </button>
                <p>
                    Already have an Account?
                    <button
                        type='button'

                        className='text-red-600 hover:underline'
                    >
                        <Link to="/login">login</Link>
                    </button>
                </p>
            </form>
        </div>
    )
}