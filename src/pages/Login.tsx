// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import BreadCrumb from "../components/BreadCrumb";
// type propsType = {
//     setIsLoggedIn: (status: boolean) => void;
// };

// export default function LoginForm({ setIsLoggedIn }: propsType) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         axios
//             .post("https://ecom-zb9o.vercel.app/api/login", {
//                 email: email,
//                 password: password,
//             })
//             .then((res) => {
//                 console.log(res.data);

//                 // save token
//                 // localStorage.setItem("token", res.data.token);

//                 // save user object
//                 // localStorage.setItem("user", JSON.stringify(res.data.user));

//                 setIsLoggedIn(true);
//                 console.log("login successfull");
//             })
//             .catch((err) => {
//                 console.log(err.response.data.msg);
//                 alert(err.response.data.msg)
//             });
//     };

//     return (
//         <>
//             <BreadCrumb />
//             <div className="py-12 bg-gray-100 flex items-center justify-center px-4">
//                 <div className="bg-white rounded-2xl shadow-sm p-10 w-full max-w-md">
//                     {/* Header */}
//                     <div className="text-center mb-8">
//                         <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
//                         <p className="text-gray-400 text-sm">
//                             Please login using account detail bellow
//                         </p>
//                     </div>

//                     {/* field */}
//                     <form onSubmit={handleSubmit} className="space-y-4">
//                         <input
//                             type="email"
//                             placeholder="Email Address"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
//                         />

//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
//                         />

//                         {/* Forgot Password  */}
//                         <div className="text-left">
//                             <a
//                                 href="/forgot-password"
//                                 className="text-sm text-secondary hover:underline"
//                             >
//                                 Forgot your password?
//                             </a>
//                         </div>

//                         {/* Submit */}
//                         <button
//                             type="submit"
//                             className="w-full bg-secondary hover:bg-pink-600 text-white font-semibold py-3.5 rounded-lg transition-colors duration-200">
//                             Sign In
//                         </button>
//                     </form>

//                     {/* Register link */}
//                     <p className="text-center text-sm text-gray-400 mt-6">
//                         Don't have an Account?{" "}
//                         <a
//                             href="/register"
//                             className="text-secondary hover:underline font-medium"
//                         >
//                             Create account
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </>
//     );

// };


import React, { useState } from "react";
import Header from "../components/layouts/Header";
import BreadCrumb from "../components/BreadCrumb";
import axios from "axios";
import { useNavigate } from "react-router";
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
                // navigate("/");
                localStorage.setItem("token", res.data.token);
                dispatch(setUser(res.data.user));

                // setUser()
                // setIsLoggedIn(true);
                console.log("logoin sucucessfulll");
            })
            .catch((err) => {
                console.log(err.response.data.msg);
                alert(err.response.data.msg);
            });
    };

    return (
        <>
            <BreadCrumb />
            <div className="py-12 bg-gray-100 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-sm p-10 w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
                        <p className="text-gray-400 text-sm">
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
                            className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg py-3.5 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400"
                        />

                        {/* Forgot password */}
                        <div className="text-left">
                            <a
                                href="/forgot-password"
                                className="text-sm text-secondary hover:underline"
                            >
                                Forgot your password?
                            </a>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-secondary hover:bg-pink-600 text-white font-semibold py-3.5 rounded-lg transition-colors duration-200"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Register link */}
                    <p className="text-center text-sm text-gray-400 mt-6">
                        Don't have an Account?{" "}
                        <a
                            href="/register"
                            className="text-secondary hover:underline font-medium"
                        >
                            Create account
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}