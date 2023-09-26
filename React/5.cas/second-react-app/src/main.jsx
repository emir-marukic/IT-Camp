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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "80%",
        margin: "auto",
        // backgroundColor: "red",
      }}
    >
      <Avatar name="Suad Suljkovic" />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar name="Emir Marukic" />
      <Avatar />
      <Avatar />
      <Avatar />
    </div>
  </React.StrictMode>
);
