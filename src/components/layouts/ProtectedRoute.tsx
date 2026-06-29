import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Router, useNavigate } from "react-router";
import type { RootState } from "../../redux/store";

function ProtectedRoute() {
    const user = useSelector((state: RootState) => state.user.value);
    //   const navigate = useNavigate();

    if (user) {
        return <Outlet />;
    } else {

        // navigate("/login"); // not working
        return <Navigate to={"/login"} replace />; // feels like glitch
    }

}

export default ProtectedRoute;