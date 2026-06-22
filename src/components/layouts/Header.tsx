import React from "react";
import { Link } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();

function Header() {
    return (
        <header className="bg-[#7E33E0] text-white flex items-center justify-between px-6 py-2 text-sm">

            {/* Email + Phone */}
            <div className="flex gap-6">
                <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=4pM4OmHKW2G4&format=png&color=FFFFFF" />
                    <p>mhhasanul@gmail.com</p>
                </div>

                <div className="flex items-center gap-2">
                    <img className="w-5 h-5" src="https://img.icons8.com/?size=100&id=BBf95mK0q8NH&format=png&color=FFFFFF" />
                    <p>(12345)67890</p>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
                <select className="bg-transparent border-none outline-none">
                    <option>English</option>
                    <option>Nepali</option>
                    <option>Hindi</option>
                </select>

                <select className="bg-transparent border-none outline-none">
                    <option>USD</option>
                    <option>NPR</option>
                    <option>INR</option>
                </select>

                <button
                    className='hover:underline'>
                    {/* Login */}
                    <Link to="/login">login</Link>

                </button>


                <button>Wishlist</button>

                <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=85080&format=png&color=FFFFFF" />
            </div>
        </header>
    );
}

export default Header;