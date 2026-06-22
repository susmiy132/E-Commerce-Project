
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUpForm from "./pages/SignUp";
// import LoginForm from "./pages/Login";
// import Home from "./pages/Home";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/" element={<SignUpForm />} />
//         <Route path="/login" element={<LoginForm />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import SignUpForm from './pages/SignUp'
import LoginForm from './pages/Login'
import RootLayout from './components/layouts/Hero'

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      Component: RootLayout,
      children: [
        { path: "/", Component: Home },
        { path: "/login", Component: LoginForm },

        { path: "/register", Component: SignUpForm }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App