import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
type propsType = {
    isLoggedIn: boolean
}

function Header({ isLoggedIn }: propsType) {
    return (
        <>
            <header>
                <div className="bg-primary-light">
                    <div className="container flex justify-between py-4  text-white ">
                        <div>
                            <span className="mr-3">mer@gamil.com</span>
                            <span>+977 9840234234</span>
                        </div>
                        <div className="flex">
                            <Link to="/login">login</Link>
                            {/* <a href="/login">login</a> */}
                            <span>User</span>
                            <ShoppingCart />
                        </div>
                    </div>
                </div>
                <div className="container flex items-center justify-between my-5">
                    <Link
                        to="/"
                        className="text-[34px] font-semibold text-primary-dark font-josefin"
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
                        {isLoggedIn && (
                            <>
                                <li>Orders</li>
                                <li>carts</li>
                            </>
                        )}
                    </ul>
                    <form className="flex items-center">
                        <input className=" border-[#E7E6EF] border-2 " />
                        <button className="text-white bg-secondary py-2 px-3">
                            <Search className="" />
                        </button>
                    </form>
                </div>
            </header>
        </>
    );
}

export default Header;