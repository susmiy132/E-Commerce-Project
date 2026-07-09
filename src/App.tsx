
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/products/ProductDetails";
import ProductListing from "./pages/products/ProductListing";
import RootLayout from "./components/layouts/RootLayout";
import Signup from "./pages/SignUp";
import { useEffect, useState } from "react";
import axios from "axios";
import { setUser } from "./redux/features/userSlice";
import { useDispatch } from "react-redux";
import Carts from "./pages/Cart";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import Orders from "./pages/Orders";
import AddProduct from "./pages/seller/AddProduct";
import SellerProducts from "./pages/seller/SellerProduct";
import OrderSuccess from "./pages/OrderSuccess";
import Categories from "./pages/admin/Catagories";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminProducts from "./pages/admin/AdminProducts";

function App() {
  let token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(token ? true : false);

  useEffect(() => {
    if (token) {
      axios
        .get("https://ecom-zb9o.vercel.app/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(setUser(res.data));
        })
        .finally(() => {
          setIsLoading(false);
        });

      axios
        .get("https://ecom-zb9o.vercel.app/api/carts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
        .then((res) => {

        });
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "admin",
      element: <ProtectedRoute forAdmin={true} />,
      children: [
        {
          path: "",
          element: <AdminLayout />,
          children: [
            {
              path: "dashboard",
              Component: Dashboard,
            },
            {
              path: "products",
              Component: AdminProducts,
            },
            {
              path: "categories",
              Component: Categories,
            }
          ]
        }
      ]
    },
    {
      path: "",
      // Component: RootLayout,
      element: <RootLayout />,
      children: [
        { path: "/", Component: Home },
        {
          path: "/login",
          element: <Login />,
        },
        { path: "/register", Component: Signup },
        {
          path: "/products",
          children: [
            {
              path: "",
              Component: ProductListing,
            },
            {
              path: ":slug",
              Component: ProductDetail,
            },
          ],
        },
        {
          path: "",
          Component: ProtectedRoute,
          children: [
            {
              path: "/carts",
              Component: Carts,
            },
            {
              path: "/orders",
              Component: Orders,
            },
            {
              path: "/order-success",
              Component: OrderSuccess,
            }
          ],
        },
        {
          path: "seller",
          Component: SellerProducts,
        },
        {
          path: "add-product",
          Component: AddProduct
        }

      ],
    },
  ]);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <p className="text-5xl font-bold">is loading.......</p>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;