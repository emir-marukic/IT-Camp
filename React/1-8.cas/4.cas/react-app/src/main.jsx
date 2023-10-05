import React from "react";
import ReactDOM from "react-dom/client";
import Example from "./components/example";
import "./components/example.css";
import Module from "./components/modules";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Example />
    <Module />
  </React.StrictMode>
);
