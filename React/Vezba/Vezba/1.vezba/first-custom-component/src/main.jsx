import React from "react";
import ReactDOM from "react-dom/client";
import ExpenseItem from "./components/ExspenseItem";
import NumberComponent from "./components/Number";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExpenseItem />
    <NumberComponent />
  </React.StrictMode>
);
