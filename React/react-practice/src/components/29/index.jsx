import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <p>this is home</p> },
  { path: "/home", element: <p>this is home route</p> },
  { path: "/home/visit", element: <p>this is nested home route</p> },
]);

const App = (props) => {
  return (
    <div>
      <RouterProvider router={router} color={props.color} />
    </div>
  );
};
export default App;
