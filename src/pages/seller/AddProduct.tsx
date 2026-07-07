import React, { useEffect, useState } from "react";
import axios from "axios";

interface SubCategory {
    id: number;
    title: string;
    parentId: number;
}

interface Category {
    id: number;
    title: string;
    parentId: null;
    subCategories: SubCategory[];
}

const BASE_URL = "https://ecom-zb9o.vercel.app";

function AddProduct() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        stock: "",
        categoryId: "",
        subCategoryId: "",
    });


    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState<File[]>([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/categories`)
            .then((res) => setCategories(res.data.data))
            .catch(() => setError("Failed to load categories"));
    }, []);

    const selectedCategory = categories.find(
        (c) => String(c.id) === form.categoryId,
    );

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
            // reset subcategory whenever the parent category changes
            ...(name === "categoryId" ? { subCategoryId: "" } : {}),
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {


        console.log(e.target.files);
        const files = e.target.files ? Array.from(e.target.files) : [];
        setImages(files);
        imagePreviews.forEach((url) => URL.revokeObjectURL(url));
        setImagePreviews(files.map((file) => URL.createObjectURL(file)));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!form.title || !form.price || !form.categoryId) {
            setError("Title, price and category are required");
            return;
        }

        const token = localStorage.getItem("token");

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("description", form.description);
        formData.append("price", form.price);
        formData.append("stock", form.stock);
        // subCategoryId takes priority if selected, otherwise fall back to the parent category
        formData.append("categoryId", form.subCategoryId || form.categoryId);
        images.forEach((file) => formData.append("images", file));

        setLoading(true);
        try {
            await axios.post(`${BASE_URL}/api/products`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    // "Content-Type": "multipart/form-data",
                    // "Content-Type": "application/json",
                },
            });
            setSuccess("Product created successfully");
            setForm({
                title: "",
                description: "",
                price: "",
                stock: "",
                categoryId: "",
                subCategoryId: "",
            });
            setImages([]);
            imagePreviews.forEach((url) => URL.revokeObjectURL(url));
            setImagePreviews([]);
        } catch (err) {
            setError("Failed to create product. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto max-w-xl p-6">
            <pre>{JSON.stringify(form, null, 2)}</pre>
            <br />
            <br />
            <pre>{JSON.stringify(categories, null, 2)}</pre>
            <h1 className="mb-6 text-2xl font-semibold">Add Product</h1>

            {error && (
                <div className="mb-4 rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {error}
                </div>
            )}
            {success && (
                <div className="mb-4 rounded border border-green-300 bg-green-50 px-3 py-2 text-sm text-green-700">
                    {success}
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <label className="mb-1 block text-sm font-medium">Title</label>
                    <input
                        className="w-full rounded border border-gray-300 px-3 py-2"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">Description</label>
                    <textarea
                        className="w-full rounded border border-gray-300 px-3 py-2"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows={3}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">Price</label>
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2"
                            name="price"
                            type="number"
                            value={form.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium">Stock</label>
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2"
                            name="stock"
                            type="number"
                            value={form.stock}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">Category</label>
                        <select
                            className="w-full rounded border border-gray-300 bg-white px-3 py-2"
                            name="categoryId"
                            value={form.categoryId}
                            onChange={handleChange}
                        >
                            <option value="">Select category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Subcategory
                        </label>
                        <select
                            className="w-full rounded border border-gray-300 bg-white px-3 py-2 disabled:bg-gray-100"
                            name="subCategoryId"
                            value={form.subCategoryId}
                            onChange={handleChange}
                            disabled={!selectedCategory?.subCategories.length}
                        >
                            <option value="">
                                {selectedCategory?.subCategories.length
                                    ? "Select subcategory"
                                    : "No subcategories"}
                            </option>
                            {selectedCategory?.subCategories.map((sub) => (
                                <option key={sub.id} value={sub.id}>
                                    {sub.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">Images</label>
                    <input
                        className="w-full rounded border border-gray-300 bg-white px-3 py-2"
                        name="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {imagePreviews.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                            {imagePreviews.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`preview-${i}`}
                                    className="h-20 w-20 rounded border border-gray-200 object-cover"
                                />
                            ))}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-secondary mt-2 rounded px-4 py-2 text-white disabled:opacity-50"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default AddProduct;