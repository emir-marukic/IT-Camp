import { useState } from "react";

const Active = () => {
  const [active, setActive] = useState(1, 0);

  return (
    <div>
      <p
        style={{ background: active === 1 ? "blue" : "white" }}
        onClick={() => {
          if (active === 1) {
            setActive(0);
          } else {
            setActive(1);
          }
        }}
      >
        Text1
      </p>
      <p
        style={{ background: active === 2 ? "blue" : "white" }}
        onClick={() => {
          if (active === 2) {
            setActive(0);
          } else {
            setActive(2);
          }
        }}
      >
        Text2
      </p>
      <p
        style={{ background: active === 3 ? "blue" : "white" }}
        onClick={() => {
          if (active === 3) {
            setActive(0);
          } else {
            setActive(3);
          }
        }}
      >
        Text3
      </p>
      <p
        style={{ background: active === 4 ? "blue" : "white" }}
        onClick={() => {
          if (active === 4) {
            setActive(0);
          } else {
            setActive(4);
          }
        }}
      >
        Text4
      </p>
    </div>
  );
};

export default Active;
