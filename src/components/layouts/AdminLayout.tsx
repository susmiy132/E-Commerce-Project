import React from "react";
import { NavLink, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/features/userSlice";
import type { RootState } from "../../redux/store"; // adjust path to your store type

const navItems = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/products", label: "Products" },
    { to: "/admin/categories", label: "Categories" },
];

function AdminLayout() {
    const reduxUser = useSelector((store: RootState) => store.user.value);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top bar */}
            <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3 shadow-sm">
                <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>

                {reduxUser ? (
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">
                            Hi, <span className="font-medium">{reduxUser.firstName}</span>
                        </span>
                        <button
                            onClick={handleLogout}
                            className="rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-100"
                        >
                            Logout
                        </button>
                    </div>
                ) : null}
            </header>

            {/* Body */}
            <div className="flex">
                {/* Sidebar */}
                <aside className="min-h-[calc(100vh-57px)] w-56 shrink-0 border-r border-gray-200 bg-white">
                    <nav className="flex flex-col gap-1 p-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `rounded-md px-3 py-2 text-sm font-medium transition ${isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;