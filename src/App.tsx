
import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './components/layouts/RootLayout'
import { Component } from 'lucide-react'
import LoginForm from './pages/Login'
import SignUpForm from './pages/SignUp'
import ProductDetails from './pages/products/ProductDetails'
import ProductListing from './pages/products/ProductListing'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: "",

      element: <RootLayout isLoggedIn={isLoggedIn} />,
      children: [
        { path: "/", Component: Home },
        {
          path: "/login",
          element: <LoginForm setIsLoggedIn={setIsLoggedIn} />
        },
        { path: "/register", Component: SignUpForm },
        {
          path: "/products",
          children: [
            {
              path: "",
              Component: ProductListing,
            },
            {
              path: "detail",
              Component: ProductDetails

            }
          ]
        }
      ]
    }])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App