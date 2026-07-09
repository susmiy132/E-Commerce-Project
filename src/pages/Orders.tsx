import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronDown, ChevronUp, Package } from "lucide-react";

interface Seller {
    firstName: string;
    lastName: string;
}

interface OrderItem {
    id: string;
    productTitle: string;
    quantity: number;
    price: number;
}

interface SubOrder {
    id: string;
    status: string;
    subTotal: string;
    deliveryCharge: string;
    seller: Seller;
    orderItems: OrderItem[];
}

interface Order {
    id: string;
    reference: string;
    // status: string;
    status: "pending" | "processing" | "Shipped" | "Delivered" | "Cancelled";
    paymentStatus: "paid" | "unpaid";
    createdAt: string;
    phone: string;
    address: string;
    secondaryAddress?: string;
    paymentMode: string;
    subOrders: SubOrder[];
}

const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-700",
    processing: "bg-blue-100 text-blue-700",
    shipped: "bg-indigo-100 text-indigo-700",
    delivered: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
};

const paymentStatusColors = {
    paid: "bg-green-100 text-green-700",
    unpaid: "bg-red-100 text-red-700",
};

export default function OrdersPage() {


    const [orders, setOrders] = useState<Order[]>([]);
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchOrders = () => {
        setLoading(true);
        axios
            .get("https://ecom-zb9o.vercel.app/api/orders", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setOrders(res.data.data);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const toggleExpand = (orderId: string) => {
        setExpanded((prev) => ({
            ...prev,
            [orderId]: !prev[orderId],
        }));
    };

    const orderTotal = (order: Order) =>
        order.subOrders.reduce(
            (sum: number, sub: SubOrder) =>
                sum + parseFloat(sub.subTotal) + parseFloat(sub.deliveryCharge),
            0
        );

    const orderItemCount = (order: Order) =>
        order.subOrders.reduce(
            (sum: number, sub: SubOrder) => sum + sub.orderItems.length,
            0
        );

    if (loading) {
        return (
            <div className="p-10 text-center text-gray-400">Loading orders...</div>
        );
    }

    if (error) {
        return (
            <div className="p-10 text-center text-red-500">
                Failed to load orders: "{error}"
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white p-6 md:p-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-8 text-center text-2xl font-bold text-blue-900 lg:text-left">
                    My Orders
                </h1>

                {orders.length === 0 && (
                    <div className="flex flex-col items-center gap-3 py-20 text-gray-400">
                        <Package size={40} />
                        <p>You haven't placed any orders yet.</p>
                    </div>
                )}

                <div className="space-y-6">
                    {orders.map((order) => {
                        const isOpen = !!expanded[order.id];
                        return (
                            <div
                                key={order.id}
                                className="overflow-hidden rounded-lg border border-gray-200"
                            >
                                {/* Order header */}
                                <button
                                    onClick={() => toggleExpand(order.id)}
                                    className="flex w-full flex-col gap-3 bg-indigo-50 p-5 text-left sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Order Reference
                                        </p>
                                        <p className="font-semibold text-blue-900">
                                            {order.reference}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">Placed On</p>
                                        <p className="font-semibold text-blue-900">
                                            {new Date(order.createdAt).toLocaleDateString(
                                                undefined,
                                                { year: "numeric", month: "short", day: "numeric" },
                                            )}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">Items</p>
                                        <p className="font-semibold text-blue-900">
                                            {orderItemCount(order)}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-500">Total</p>
                                        <p className="font-semibold text-blue-900">
                                            £{orderTotal(order).toFixed(2)}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusColors[order.status] ||
                                                "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${paymentStatusColors[order.paymentStatus] ||
                                                "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {order.paymentStatus}
                                        </span>
                                        {isOpen ? (
                                            <ChevronUp size={18} className="text-blue-900" />
                                        ) : (
                                            <ChevronDown size={18} className="text-blue-900" />
                                        )}
                                    </div>
                                </button>

                                {/* Order details */}
                                {isOpen && (
                                    <div className="divide-y divide-gray-200 p-5">
                                        <div className="grid grid-cols-1 gap-4 pb-4 text-sm text-gray-500 sm:grid-cols-3">
                                            <div>
                                                <p className="font-semibold text-blue-900">Phone</p>
                                                <p>{order.phone}</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-blue-900">Address</p>
                                                <p>
                                                    {order.address}
                                                    {order.secondaryAddress
                                                        ? `, ${order.secondaryAddress}`
                                                        : ""}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-blue-900">
                                                    Payment Mode
                                                </p>
                                                <p className="capitalize">{order.paymentMode}</p>
                                            </div>
                                        </div>

                                        {order.subOrders.map((sub) => (
                                            <div key={sub.id} className="py-5 first:pt-0">
                                                <div className="mb-3 flex items-center justify-between">
                                                    <p className="text-sm font-semibold text-gray-700">
                                                        Sold by:{" "}
                                                        <span className="text-blue-900">
                                                            {sub.seller.firstName} {sub.seller.lastName}
                                                        </span>
                                                    </p>
                                                    <span
                                                        className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusColors[sub.status] ||
                                                            "bg-gray-100 text-gray-700"
                                                            }`}
                                                    >
                                                        {sub.status}
                                                    </span>
                                                </div>

                                                <div className="space-y-3">
                                                    {sub.orderItems.map((item) => (
                                                        <div
                                                            key={item.id}
                                                            className="flex items-center justify-between text-sm"
                                                        >
                                                            <span className="text-gray-700">
                                                                {item.productTitle}{" "}
                                                                <span className="text-gray-400">
                                                                    x{item.quantity}
                                                                </span>
                                                            </span>
                                                            <span className="font-semibold text-blue-900">
                                                                £{(item.price * item.quantity).toFixed(2)}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-3 flex justify-between border-t border-gray-100 pt-3 text-sm">
                                                    <span className="text-gray-500">
                                                        Delivery Charge
                                                    </span>
                                                    <span className="font-semibold text-blue-900">
                                                        £{parseFloat(sub.deliveryCharge).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="flex justify-between pt-4 text-base font-bold text-blue-900">
                                            <span>Order Total</span>
                                            <span>£{orderTotal(order).toFixed(2)}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}