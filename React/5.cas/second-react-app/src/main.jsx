import React from "react";
import ReactDOM from "react-dom/client";
import Avatar from "./components/Avatar";
// import BlogPost from "./components/BlogPost";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BlogPost />
    <BlogPost />
    <BlogPost />
    <BlogPost /> */}
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      <Avatar name="Suad Suljovic" />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </div>
  </React.StrictMode>
);
