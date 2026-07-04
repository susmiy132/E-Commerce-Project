import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { Link, useLocation, useSearchParams } from "react-router";
import axios from "axios";
import { Heart, ShoppingCart } from "lucide-react";

interface Category {
    id: number;
    title: string;
}

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    categoryId: number;
    stock: number;
    isFeatured: boolean;
    userId: number;
    status: string;
}

function ProductListing() {
    const location = useLocation();
    console.log(location.pathname);

    const [searchTerm, setSearchTerm] = useState("");

    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [isProductsLoading, setIsProductsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    console.log("product listing", searchParams.get("q"));

    const [filter, setFilter] = useState({
        perPage: searchParams.get("perPage") || 2,
        sortBy: "",
        categoryIds: [1, 2, 3],
    });

    useEffect(() => {
        axios.get("https://ecom-zb9o.vercel.app/api/categories").then((res) => {
            setCategories(res.data.data);
        });
    }, []);

    useEffect(() => {
        setIsProductsLoading(true);

        let searchTerm = searchParams.get("q") || "";
        axios
            .get(
                `https://ecom-zb9o.vercel.app/api/products?q=${searchTerm}&limit=${filter.perPage}&s=${filter.sortBy}&categoryIds=${filter.categoryIds}`,
            )
            .then((res) => {
                setProducts(res.data.data.products);
                setIsProductsLoading(false);
            });
    }, [filter, searchParams]);

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

    const handlePerPageChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFilter({ ...filter, perPage: Number(e.target.value) });

        setSearchParams((prev) => {
            const urlParams = new URLSearchParams(prev);
            urlParams.set("perPage", e.target.value);
            return urlParams;
        });
    };

    return (
        <>
            <BreadCrumb
                title="Products"
                urls={[
                    {
                        title: "products",
                        link: "/products",
                    },
                ]}
            />
            <div className="container mt-[32px] sm:mt-[40px] md:mt-[56px] lg:mt-[72px] xl:mt-[96px] 2xl:mt-[128px]">
                <div className="flex items-center gap-8">
                    <div>
                        <p className="font-josefin text-primary text-[22px] font-bold">
                            Ecommerce Acceories & Fashion item
                        </p>
                        <p>About 9,620 results (0.62 seconds)</p>
                    </div>
                    <div className="flex gap-8">
                        <span>Per page</span>
                        <select
                            value={filter.perPage}
                            className="border"
                            onChange={handlePerPageChange}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                        </select>
                        <select
                            className="border"
                            value={filter.sortBy}
                            onChange={(e) => {
                                // setSortBy(e.target.value);
                                setFilter({ ...filter, sortBy: e.target.value });
                            }}
                        >
                            <option value="">Sort By</option>
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                            <option value="priceAsc">price low to high </option>
                            <option value="priceDesc">price hight to low</option>
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
                                    <input
                                        id={`category-${el.id}`}
                                        type="checkbox"
                                        className="mt-2 mr-2"
                                    />
                                    <label htmlFor={`category-${el.id}`}> {el.title}</label>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-span-8">
                        {isProductsLoading ? (
                            <>
                                <p>loading......</p>
                            </>
                        ) : (
                            <>
                                {products.length == 0 ? (
                                    <>products not found</>
                                ) : (
                                    products.map((el) => {
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
                                    })
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductListing;