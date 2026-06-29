
// import React, { useState } from "react";
// import { ShoppingCart, Heart, ZoomIn, ChevronDown, LayoutGrid, List } from "lucide-react";
// import { Link } from "react-router-dom";

// interface Product {
//     id: number;
//     title: string;
//     image: string;
//     price: number;
//     oldPrice: number;
//     rating: number;
//     reviews: number;
//     colors: string[];
//     description: string;
// }

// const products: Product[] = [
//     {
//         id: 1,
//         title: "Accumsan tincidunt",
//         image:
//             "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
//         price: 26,
//         oldPrice: 52,
//         rating: 4,
//         reviews: 12,
//         colors: ["#f97316", "#ec4899", "#6366f1"],
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//     {
//         id: 2,
//         title: "In nulla",
//         image:
//             "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop",
//         price: 26,
//         oldPrice: 52,
//         rating: 4,
//         reviews: 8,
//         colors: ["#f97316", "#ec4899", "#6366f1"],
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
//     {
//         id: 3,
//         title: "Vel sem",
//         image:
//             "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop",
//         price: 26,
//         oldPrice: 52,
//         rating: 4,
//         reviews: 20,
//         colors: ["#f97316", "#ec4899", "#6366f1"],
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
//     },
// ];

// function StarRating({ rating }: { rating: number }) {
//     return (
//         <span className="flex items-center gap-0.5 text-amber-400 text-sm">
//             {Array.from({ length: 5 }).map((_, i) => (
//                 <span key={i} className={i < rating ? "text-amber-400" : "text-gray-300"}>
//                     ★
//                 </span>
//             ))}
//         </span>
//     );
// }

// export default function ProductListing() {
//     const [view, setView] = useState<"grid" | "list">("list");

//     return (
//         <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-5xl mx-auto">
//                 <Link to="/products/detail">
//                     <div className="border p-4 cursor-pointer">
//                         <h2>Leather Bag</h2>
//                         <p>$32</p>
//                     </div>
//                 </Link>
//                 {/* Header */}
//                 <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sm:p-6 mb-6">
//                     <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//                         <div>
//                             <h1 className="text-lg sm:text-xl font-bold text-primary">
//                                 Ecommerce Accessories &amp; Fashion item
//                             </h1>
//                             <p className="text-xs text-gray-400 mt-1">About 9,620 results (0.62 seconds)</p>
//                         </div>

//                         <div className="flex flex-wrap items-center gap-4 sm:gap-6">
//                             <div className="flex items-center gap-2">
//                                 <label className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
//                                     Per Page:
//                                 </label>
//                                 <input
//                                     type="text"
//                                     className="w-14 rounded-md border border-gray-200 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
//                                 />
//                             </div>

//                             <div className="flex items-center gap-2">
//                                 <label className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
//                                     Sort By:
//                                 </label>
//                                 <div className="relative">
//                                     <select className="appearance-none rounded-md border border-gray-200 pl-3 pr-7 py-1.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300">
//                                         <option>Best Match</option>
//                                         <option>Price: Low to High</option>
//                                         <option>Price: High to Low</option>
//                                         <option>Newest</option>
//                                     </select>
//                                     <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
//                                 </div>
//                             </div>

//                             <div className="flex items-center gap-2">
//                                 <span className="text-xs sm:text-sm text-gray-500">View:</span>
//                                 <div className="flex items-center gap-1 bg-gray-50 rounded-md p-1">
//                                     <button
//                                         onClick={() => setView("grid")}
//                                         aria-label="Grid view"
//                                         className={`p-1.5 rounded ${view === "grid" ? "bg-white shadow text-indigo-600" : "text-gray-400"
//                                             }`}
//                                     >
//                                         <LayoutGrid className="w-4 h-4" />
//                                     </button>
//                                     <button
//                                         onClick={() => setView("list")}
//                                         aria-label="List view"
//                                         className={`p-1.5 rounded ${view === "list" ? "bg-white shadow text-indigo-600" : "text-gray-400"
//                                             }`}
//                                     >
//                                         <List className="w-4 h-4" />
//                                     </button>
//                                 </div>
//                                 <input
//                                     type="text"
//                                     className="hidden sm:block w-32 rounded-md border border-gray-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
//                                     placeholder="Search..."
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Product list */}
//                 <div
//                     className={
//                         view === "grid"
//                             ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
//                             : "flex flex-col gap-5"
//                     }
//                 >
//                     {products.map((product) => (
//                         <div
//                             key={product.id}
//                             className={`bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow ${view === "list" ? "flex flex-col sm:flex-row" : "flex flex-col"
//                                 }`}
//                         >
//                             <div
//                                 className={
//                                     view === "list"
//                                         ? "w-full sm:w-44 h-48 sm:h-auto flex-shrink-0 bg-gray-100"
//                                         : "w-full h-48 bg-gray-100"
//                                 }
//                             >
//                                 <img
//                                     src={product.image}
//                                     alt={product.title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>

//                             <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center gap-2">
//                                 <div className="flex items-start justify-between gap-3">
//                                     <h2 className="text-base font-josefin font-bold text-primary">{product.title}</h2>
//                                     <div className="flex items-center gap-1 mt-1 flex-shrink-0">
//                                         {product.colors.map((c, i) => (
//                                             <span
//                                                 key={i}
//                                                 className="w-2.5 h-2.5 rounded-full"
//                                                 style={{ backgroundColor: c }}
//                                             />
//                                         ))}
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center gap-2 flex-wrap text-sm">
//                                     <span className="font-josefin font-semibold text-primary">
//                                         ${product.price.toFixed(2)}
//                                     </span>
//                                     <span className="text-secondary font-josefin line-through text-xs">
//                                         ${product.oldPrice.toFixed(2)}
//                                     </span>
//                                     <StarRating rating={product.rating} />
//                                 </div>

//                                 <p className="text-sm text-gray-500 leading-relaxed max-w-md">
//                                     {product.description}
//                                 </p>

//                                 <div className="flex items-center gap-2 pt-1">
//                                     <button
//                                         aria-label="Add to cart"
//                                         className="p-2 rounded-lg bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 transition-colors"
//                                     >
//                                         <ShoppingCart className="w-4 h-4" />
//                                     </button>
//                                     <button
//                                         aria-label="Add to wishlist"
//                                         className="p-2 rounded-lg bg-gray-50 hover:bg-pink-50 text-gray-500 hover:text-secondary transition-colors"
//                                     >
//                                         <Heart className="w-4 h-4" />
//                                     </button>
//                                     <button
//                                         aria-label="Quick view"
//                                         className="p-2 rounded-lg bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-indigo-600 transition-colors"
//                                     >
//                                         <ZoomIn className="w-4 h-4" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Link, useLocation } from "react-router";
import axios from "axios";
import { Heart, ShoppingCart } from "lucide-react";

function ProductListing() {
    const location = useLocation();
    console.log(location.pathname);

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://ecom-zb9o.vercel.app/api/categories").then((res) => {
            setCategories(res.data.data);
        });

        axios.get("https://ecom-zb9o.vercel.app/api/products").then((res) => {
            setProducts(res.data.data.products);
        });
    }, []);

    const handleAddToCart = (id: number) => {
        let token = localStorage.getItem("token");

        if (token) {
            axios
                .post(
                    "https://ecom-zb9o.vercel.app/api/carts",
                    {
                        productId: id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                )
                .then((res) => {
                    console.log("added to cart");
                });
        } else {
            console.log("login required..");
        }
    };

    return (
        <>
            <BreadCrumb />
            <div className="container mt-[32px] sm:mt-[40px] md:mt-[56px] lg:mt-[72px] xl:mt-[96px] 2xl:mt-[128px]">
                <div className="flex items-center gap-8">
                    <div>
                        <p className="font-josefin text-primary text-[22px] font-bold">
                            Ecommerce Acceories & Fashion item
                        </p>
                        <p>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="flex gap-8">
                        <select className="border">
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </select>

                        <select className="border">
                            <option>Sort By</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>price lowest </option>
                            <option>price highest</option>
                        </select>
                    </div>
                </div>
                <div className="mt-[32px] grid grid-cols-10 sm:mt-[40px] md:mt-[48px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[104px]">
                    <div className="col-span-2">
                        <p className="font-josefin text-primary text-xl font-bold">
                            Categories
                        </p>
                        {categories.map((el) => {
                            return (
                                <div>
                                    <input type="checkbox" className="mt-2 mr-2" />
                                    <label> {el.title}</label>
                                </div>
                            );
                        })}
                    </div>
                    {/* products section */}
                    <div className="col-span-8">
                        {products.map((el) => {
                            return (
                                <Link
                                    to={`/products/${el.id}`}
                                    className="mt-8 flex gap-6 rounded-2xl bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-lg sm:mt-9 sm:p-4 lg:mt-9"
                                >
                                    <div className="h-44 w-52 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                        <img
                                            src={"image"}
                                            alt={"mouse"}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                                        <div>
                                            <div className="mb-1 flex items-center gap-3">
                                                <h2 className="text-primary text-lg font-bold capitalize">
                                                    {el.title}
                                                </h2>
                                                <div className="flex gap-1.5"></div>
                                            </div>
                                            <div className="mb-2 flex items-center gap-3">
                                                <span className="text-primary text-sm font-semibold">
                                                    ${el.price}
                                                </span>
                                                <span className="text-secondary text-sm line-through">
                                                    ${100}.00
                                                </span>
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-[28px] text-gray-500">
                                                {el.description}
                                            </p>
                                        </div>
                                        <div className="mt-3 flex gap-2">
                                            <ShoppingCart
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleAddToCart(el.id);
                                                }}
                                            />
                                            <Heart />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductListing;