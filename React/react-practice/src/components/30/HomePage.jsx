import { useContext } from "react";
import { UserContext } from "./UserContextProvider";

function HomePage() {
  const [user] = useContext(UserContext);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "200px",
        fontSize: "30px",
        color: "#fff",
      }}
    >
      <p>
        {user && (
          <div>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
          </div>
        )}
      </p>
      {user.firstAge}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "80px",
        }}
      ></div>
    </div>
  );
}

export default HomePage;
