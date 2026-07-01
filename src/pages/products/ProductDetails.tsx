import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BreadCrumb from "../../components/BreadCrumb";
import axios from "axios";
import { useSearchParams, useParams } from "react-router";

interface Product {
    id: number;
    title: string;
    categoryId: number;
    price: string;
}

function ProductDetail() {
    const [product, setProduct] = useState<Product | null>(null);

    const params = useParams();

    useEffect(() => {
        axios
            .get("https://ecom-zb9o.vercel.app/api/products/" + params.slug)
            .then((res) => {
                console.log("added to cart");
                setProduct(res.data.data);
            });
    }, []);

    return (
        <div>
            <BreadCrumb
                title="Product Detail"
                urls={[
                    {
                        title: "products",
                        link: "/products",
                    },

                ]}
            />
            <div className="container">
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
                <p>product detail</p>
            </div>
        </div>
    );
}

export default ProductDetail;