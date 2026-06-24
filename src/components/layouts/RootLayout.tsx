import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";


type propsType = {
    isLoggedIn: boolean
}
// export default function RootLayout(props) {
// export default function RootLayout({ isLoggedIn }: { isLoggedIn: boolean }) {
export default function RootLayout({ isLoggedIn }: propsType) {
    return (
        <>
            <div className="font-lato">
                <Header isLoggedIn={isLoggedIn} />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}