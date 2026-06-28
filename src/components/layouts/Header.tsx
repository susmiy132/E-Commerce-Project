import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <header>
            {/* TOP BAR */}
            <div className="bg-primary-light">
                <div className="container flex justify-between py-4 text-white">

                    <div>
                        <span className="mr-3">mer@gmail.com</span>
                        <span>+977 9840234234</span>
                    </div>

                    <div className="flex items-center gap-4">

                        {/* LOGIN / USER */}
                        {user ? (
                            <div className="flex items-center gap-3">
                                <span className="font-semibold">
                                    Hello, {user.firstName}
                                </span>

                                <button
                                    onClick={logout}
                                    className="text-red-200"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/login">
                                Login
                            </Link>
                        )}

                        <ShoppingCart />
                    </div>
                </div>
            </div>

            {/* MAIN NAV */}
            <div className="container flex items-center justify-between my-5">

                {/* LOGO */}
                <Link
                    to="/"
                    className="text-[34px] font-semibold text-primary-dark font-josefin"
                >
                    Hekto
                </Link>

                {/* MENU */}
                <ul className="flex gap-9 capitalize">
                    <li className="text-secondary">
                        Home <ChevronDown size={16} className="inline-block" />
                    </li>

                    <li>
                        <Link to="/products">Products</Link>
                    </li>

                    {user && (
                        <>
                            <li>Orders</li>
                            <li>Cart</li>
                        </>
                    )}
                </ul>

                {/* SEARCH */}
                <form className="flex items-center">
                    <input className="border border-[#E7E6EF] px-2 py-1" />
                    <button className="text-white bg-secondary py-2 px-3">
                        <Search />
                    </button>
                </form>

            </div>
        </header>
    );
}

export default Header;