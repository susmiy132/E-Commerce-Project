import React from "react";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
    console.log("render | re-render NAVBAR");
    const reduxUser = useSelector((store: RootState) => store.user.value);
    return (
        <div>
            <div className="container my-5 flex items-center justify-between">
                <Link
                    to="/"
                    className="text-primary-dark font-josefin text-[34px] font-semibold"
                >
                    Hekto
                </Link>
                {/* <a href="/" className="text-[34px] font-semibold text-primary-dark">
            Hekto
          </a> */}
                <ul className="flex gap-9 capitalize">
                    <li className="text-secondary">
                        Home <ChevronDown size={16} className="inline-block" />
                    </li>
                    <li>
                        {" "}
                        <Link to={"/products"}>products</Link>
                    </li>
                    <li>
                        <Link to={"/carts"}>Carts</Link>
                    </li>
                    {reduxUser && (
                        <>
                            <li>Orders</li>
                            <li>
                                <Link to={"/carts"}>Carts</Link>
                            </li>
                        </>
                    )}
                    {reduxUser && reduxUser.isSeller && (
                        <>
                            <li>My Products</li>
                        </>
                    )}
                </ul>
                <form className="flex items-center">
                    <input className="border-2 border-[#E7E6EF]" />
                    <button className="bg-secondary px-3 py-2 text-white">
                        <Search className="" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Navbar;