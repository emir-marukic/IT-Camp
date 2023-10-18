import { useState } from "react";

const Tabs = () => {
  const [active, setActive] = useState(1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => {
            setActive(1);
          }}
        >
          Tab 1
        </button>
        <button
          onClick={() => {
            setActive(2);
          }}
        >
          Tab 2
        </button>
        <button
          onClick={() => {
            setActive(3);
          }}
        >
          Tab 3
        </button>
      </div>
      {active === 1 && <p>Tab 1 is active</p>}
      {active === 2 && <p>Tab 2 is active</p>}
      {active === 3 && <p>Tab 3 is active</p>}
    </div>
  );
};

export default Tabs;
