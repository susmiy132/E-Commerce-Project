import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate, useNavigate } from "react-router";

function Orders() {
    // const user = useSelector((state: RootState) => state.user.value);
    // console.log({user});
    // const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("https://ecom-zb9o.vercel.app/api/orders", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => { });
    }, []);

    // if (!user) {
    //   return <Navigate to="/login"/>

    //   //  navigate("/login");
    // }

    // useEffect()
    // {{base_url}}/api/carts
    //  attach token as well
    return (
        <div className="carts">
            <>
                <p>CARTS 1</p>
                <p>CARTS 1</p>
                <p>CARTS 1</p>
                <p>CARTS 1</p>
                <p>CARTS 1</p>
                <p>CARTS 1</p>
            </>
        </div>
    );
}

export default Orders;