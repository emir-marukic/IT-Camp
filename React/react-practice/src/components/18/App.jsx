import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Product from "./Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Class18 = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/",
      element: <Product />,
    },
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/",
      element: <Contact />,
    },
  ]);
  return (
    <div>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
};

export default Class18;
