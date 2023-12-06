import { createContext, useEffect, useState, useNavigate } from "react";

export const UserContext = createContext({});

const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("https://dummyjson.com/auth/users/1", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.message === "Invalid/Expired Token!") {
          navigate("/login");
          throw new Error();
        }

        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      fetchUser();
    }
  }, []);

  if (!user) {
    return <div>not authorized</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
