import React from "react";
import ReactDOM from "react-dom/client";
import Input from "./components/input";
// import Button from "./components/button";
// import SimpleForm from "./components/simpleForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <SimpleForm defaultInput="input" buttonTitle="submit" /> */}
    {/* <Button title="submit" onPress={() => console.log("it works")} />
    <Button /> */}
    <Input />
  </React.StrictMode>
);
