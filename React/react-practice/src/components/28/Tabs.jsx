import { createContext, useState } from "react";

function Tabs(props) {
  const TabsContext = createContext({});
  const [active, setActive] = useState(0);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{props.children}</div>;
    </TabsContext.Provider>
  );
}

export default Tabs;
