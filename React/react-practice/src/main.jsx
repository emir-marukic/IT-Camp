import React from "react";
import ReactDOM from "react-dom/client";

import Class28 from "./components/28/app";
import SimpleContextProvider from "./components/28/SempleContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SimpleContextProvider>
      <Class28 />
    </SimpleContextProvider>
  </React.StrictMode>
);
