import React from "react";
import TopHeader from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

type propsType = {
    isLoggedIn: boolean;
};
// export default function RootLayout(props) {
// export default function RootLayout({ isLoggedIn }: { isLoggedIn: boolean }) {
export default function RootLayout() {
    return (
        <>
            <div className="font-lato">
                <TopHeader />
                {/* <Navbar /> */}
                <Outlet />
                <Footer />
            </div>
        </>
    );
}