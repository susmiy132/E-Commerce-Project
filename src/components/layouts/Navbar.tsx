import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-3 border-b">

            <h1 className="text-2xl font-bold ml-10">Hekto</h1>

            <div className="flex gap-6 text-sm">
                <button>
                    <Link className="hover:underline" to="/home">Home</Link>
                </button>
                <button>Pages</button>
                <button>Products</button>
                <button>Blog</button>
                <button>Shop</button>
                <button>Contact</button>
            </div>

            <div className="flex items-center border px-2 py-1 rounded">
                <input
                    className="outline-none"
                    placeholder="Search..."
                />
                <span></span>
            </div>

        </nav>
    );
}

export default Navbar;