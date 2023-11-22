import { createContext, useState } from "react";

export const MyContext = createContext({});

const SimpleContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [ime, setIme] = useState("Emir");
  return (
    <MyContext.Provider value={{ test: "test", count, setCount, ime, setIme }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default SimpleContextProvider;
