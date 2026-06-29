import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate, useNavigate } from "react-router";

function Carts() {
    console.log("rdner ... carts.....");
    useEffect(() => {
        axios
            .get("https://ecom-zb9o.vercel.app/api/carts", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => { });
    }, []);

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

export default Carts;