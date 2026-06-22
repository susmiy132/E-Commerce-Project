// import React from "react";

// function Hero() {
//     return (
//         <main className="flex items-center justify-between bg-[#F2F0FF] px-10 py-16">

//             <img
//                 className="w-40"
//                 src="./lamp.png"
//                 alt=""
//             />

//             <div className="max-w-md">
//                 <p className="text-sm">Best Furniture For Your Castle</p>
//                 <h1 className="text-3xl font-bold my-4">
//                     New Furniture Collection Trends in 2020
//                 </h1>
//                 <p className="text-gray-600">
//                     Lorem ipsum dolor sit amet consectetur.
//                 </p>

//                 <button className="mt-4 bg-pink-500 text-white px-4 py-2">
//                     Shop Now
//                 </button>
//             </div>

//             <div className="relative">
//                 <img className="w-64" src="./chair.png" />

//                 <span className="absolute top-5 right-5 bg-pink-500 text-white text-xs px-2 py-1 rounded">
//                     50% OFF
//                 </span>
//             </div>

//         </main>
//     );
// }

// export default Hero;

import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout() {
    return (
        <>
            <div className="font-lato">
                <Header />
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}