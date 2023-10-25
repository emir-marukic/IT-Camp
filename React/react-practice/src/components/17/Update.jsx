import { useState } from "react";

const Update = () => {
  const [test, setTest] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setTest(test + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Update;
