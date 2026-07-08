import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, Router, useNavigate } from "react-router";
import type { RootState } from "../../redux/store";


function ProtectedRoute({
    forSeller,
    forAdmin,
}: {
    forSeller?: boolean;
    forAdmin?: boolean;
}) {
    const user = useSelector((state: RootState) => state.user.value);
    if (user) {
        if (forSeller) {
            if (user.isSeller) {
                return <Outlet />;
            } else {
                return <Navigate to={"/forbidden"} replace />;

            }
        }

        if (forAdmin) {
            if (user.isAdmin) {
                return <Outlet />;
            } else {
                return <Navigate to={"/forbidden"} />;
            }
        }
        return <Outlet />;
    } else {
        return <Navigate to={"/login"} replace />;
    }
}

export default ProtectedRoute;