// import React from 'react'
// import BreadCrumb from '../../components/BreadCrumb'

// export default function ProductDetails() {


//     return (

//         <>
//             <BreadCrumb />
//             <div className='bg-white flex items-center justify-center shadow-2xl'>
//                 <div className='grid grid-cols-1 row-end-3'>
//                     <img src="https://www.google.com/search?q=ladies+side+bag+design+images&oq=ladies+bag+react+&gs_lcrp=EgZjaHJvbWUqBwgBEAAY7wUyBggAEEUYOTIHCAEQABjvBTIHCAIQABjvBTIHCAMQABjvBTIHCAQQABjvBTIHCAUQABjvBdIBCTE0NDIyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#sv=CAMSZxowKg5ZbXpqSHhEeHRSZ2xtTTIOWW16akh4RHh0UmdsbU06Di1hTTQ1UTd6eG1VSTBNIAQqLwobX0NNZEFhdC1zQTkzbHNlTVAydGVfaUE0XzQ0Eg5ZbXpqSHhEeHRSZ2xtTRgAMAEYByCq14mgCEoIEAEYASABKAE" alt="" />

//                 </div>
//                 <div>
//                     <img src="" alt="" />
//                 </div>
//                 <div>
//                     <h1>Description</h1>
//                 </div>
//             </div>
//         </>
//     )
// }


import React, { useState } from "react";
import { Heart, Link2 } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductImage {
    id: number;
    src: string;
    alt: string;
}

const thumbnails: ProductImage[] = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=300&h=300&fit=crop",
        alt: "Tote bag",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=300&h=300&fit=crop",
        alt: "Floor lamp",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=300&h=300&fit=crop",
        alt: "Accessories",
    },
];

const mainImage =
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&h=700&fit=crop";

const colors = ["#1e1b2e", "#7c3aed", "#f43f5e", "#0ea5e9"];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
    return (
        <div className="flex items-center gap-1.5">
            <span className="flex items-center text-amber-400 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < rating ? "text-amber-400" : "text-gray-300"}>
                        ★
                    </span>
                ))}
            </span>
            <span className="text-xs text-gray-400">({reviews})</span>
        </div>
    );
}

export default function ProductDetails() {
    const [activeImage, setActiveImage] = useState(mainImage);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [wishlisted, setWishlisted] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">

                <div className="flex flex-col md:flex-row gap-6">

                    <div className="flex gap-3 sm:gap-4 md:flex-1">

                        <div className="flex flex-col gap-3 flex-shrink-0">
                            {thumbnails.map((thumb) => (
                                <button
                                    key={thumb.id}
                                    onClick={() => setActiveImage(thumb.src)}
                                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors ${activeImage === thumb.src
                                        ? "border-indigo-500"
                                        : "border-transparent hover:border-gray-200"
                                        }`}
                                >
                                    <img
                                        src={thumb.src}
                                        alt={thumb.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        <div className="flex-1 rounded-xl overflow-hidden bg-gray-100 aspect-square max-h-[340px] sm:max-h-[400px]">
                            <img
                                src={activeImage}
                                alt="Product"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:flex-1 flex flex-col gap-3 pt-1">
                        <StarRating rating={4} reviews={22} />

                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-primary">$32.00</span>
                            <span className="text-sm text-secondary line-through">$32.00</span>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-primary mb-1">Color</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                                tellus porttitor purus, et volutpat sit.
                            </p>
                            <div className="flex items-center gap-2 mt-3">
                                {colors.map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => setSelectedColor(c)}
                                        aria-label={`Select color ${c}`}
                                        className={`w-6 h-6 rounded-full border-2 transition-transform ${selectedColor === c
                                            ? "border-indigo-500 scale-110"
                                            : "border-transparent"
                                            }`}
                                        style={{ backgroundColor: c }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <button className="px-5 py-2.5 rounded-lg bg-indigo-950 text-white text-sm font-medium hover:bg-indigo-900 transition-colors">
                                Add To Cart
                            </button>
                            <button
                                onClick={() => setWishlisted(!wishlisted)}
                                aria-label="Add to wishlist"
                                className={`p-2.5 rounded-lg border transition-colors ${wishlisted
                                    ? "bg-pink-50 border-pink-200 text-secondary"
                                    : "border-gray-200 text-gray-400 hover:text-secondary hover:border-pink-200"
                                    }`}
                            >
                                <Heart className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} />
                            </button>
                        </div>

                        <div className="pt-3 flex flex-col gap-1.5 text-sm">
                            <p>
                                <span className="font-bold text-primary">Categories: </span>
                                <span className="text-gray-400">Bags, Accessories</span>
                            </p>
                            <p>
                                <span className="font-bold text-primary">Tags: </span>
                                <span className="text-gray-400">Leather, Tote, Daily</span>
                            </p>
                            <div className="flex items-center gap-2 pt-1">
                                <span className="font-bold text-primary">Share</span>
                                <div className="flex items-center gap-1.5">
                                    {/* <button
                                        aria-label="Share on Facebook"
                                        className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center hover:bg-indigo-100 transition-colors"
                                    >
                                        <Facebook className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                        aria-label="Share on Twitter"
                                        className="w-6 h-6 rounded-full bg-pink-50 text-secondary flex items-center justify-center hover:bg-pink-100 transition-colors"
                                    >
                                        <Twitter className="w-3.5 h-3.5" />
                                    </button> */}
                                    <button
                                        aria-label="Copy link"
                                        className="w-6 h-6 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-100 transition-colors"
                                    >
                                        <Link2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
