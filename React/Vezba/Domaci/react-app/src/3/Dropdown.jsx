import { useState } from "react";
import "./dropdown.css";

const Dropdown = () => {
  const [active, setActive] = useState(1);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
      }}
    >
      <div className="dropdown-button">
        <button className="button">Click Me</button>
        <div
          className="dropdown-icon"
          onClick={() => {
            setActive(active === 1 ? 2 : 1);
          }}
        >
          ▼
        </div>
      </div>
      {active === 1 && (
        <div className="toggler">
          <div className="toggler-par">
            <p>User 1</p>
            <p>User 2</p>
            <p>User 3</p>
            <p>User 4</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
