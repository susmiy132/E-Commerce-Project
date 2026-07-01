import React from "react";
import Banner from "../assets/banner.png";


export default function Home() {
    console.log("render HOOOOOOOME")
    return (
        <>
            <div className=""></div>
            <div className="relative">
                <img src={Banner} className="w-full" alt="" />
                <div className="absolute top-1/2 left-0 w-full" style={{ transform: "translateY(-50%)" }}>
                    <div className="container pl-15">
                        <p className="font-josefin font-bold text-[24px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
                            New Furniture Collection
                        </p>

                        <p className="font-josefin font-bold text-[24px] md:text[32px] sm:text[24px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px]">
                            Trends in 2020
                        </p>

                    </div>

                </div>
            </div>

            <div>
                <div className="grid grid-cols-4 container">
                    {[1, 2, 3, 4].map((el) => (
                        <div key={el} className="border p-5">
                            <p>Products</p>

                            <button>ADD TO CART</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
