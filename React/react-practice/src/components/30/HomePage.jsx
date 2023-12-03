import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "200px",
        fontSize: "30px",
        color: "#fff",
      }}
    >
      <h2>Home Page</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "80px",
        }}
      >
        <Link
          to={"/login"}
          style={{ textDecoration: "none", color: "white", fontSize: "30px" }}
        >
          Login
        </Link>
        <Link
          to={"/register"}
          style={{ textDecoration: "none", color: "white", fontSize: "30px" }}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
