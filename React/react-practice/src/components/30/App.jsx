import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Register from "./Register";
import Login from "./Login";
import UserContextProvider from "./UserContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <HomePage />
      </UserContextProvider>
    ),
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

const Class30 = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default Class30;
