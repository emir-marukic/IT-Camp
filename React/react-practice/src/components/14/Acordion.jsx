import { useState } from "react";

const Acordion = () => {
  const [active, setActive] = useState(1, 0);

  return (
    <div>
      <p
        onClick={() => {
          if (active === 1) {
            setActive(0);
          } else {
            setActive(1);
          }
        }}
      >
        Acordion Item#1
      </p>
      {active === 1 && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
          ipsum vitae molestias, minima nam voluptatem expedita dolore aliquam
          praesentium corporis dolor obcaecati itaque cum natus ut facilis velit
          nulla repellat?
        </p>
      )}
      <p
        onClick={() => {
          if (active === 2) {
            setActive(0);
          } else {
            setActive(2);
          }
        }}
      >
        Acordion Item#2
      </p>
    </div>
  );
};

export default Acordion;
