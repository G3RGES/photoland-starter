import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Products from "./pages/Home";
import ProductDetails from "./pages/Home";
import Search from "./pages/Home";

//components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

//layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      // { index: true, element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
