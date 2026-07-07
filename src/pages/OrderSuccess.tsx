import axios from "axios";
import { Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

function OrderSuccess() {
    const [isLoading, setIsLoading] = useState(true);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        let esewaToken = searchParams.get("data");
        axios
            .post(
                "https://ecom-zb9o.vercel.app/api/orders/order-verify",
                {
                    esewaToken,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                },
            )
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    return (
        <>
            <div className="flex items-center justify-center">
                {isLoading ? (
                    <>
                        <p>verficying your payment</p>
                    </>
                ) : (
                    <div className="inline-block">
                        <Check size="500" />
                        <span className="text-5xl">OrderSuccess</span>
                    </div>
                )}
            </div>
        </>
    );
}

export default OrderSuccess;