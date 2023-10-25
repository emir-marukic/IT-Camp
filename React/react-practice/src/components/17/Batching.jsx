import { useState } from "react";

const Batching = () => {
  const [count, setCount] = useState(1);
  const updateCount = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={updateCount}>Click</button>
    </div>
  );
};

export default Batching;
