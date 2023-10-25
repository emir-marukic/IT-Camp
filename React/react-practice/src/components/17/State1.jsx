import { useState } from "react";
import State2 from "./State2";

const State1 = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <p style={color: state % 5 === 0 ? "blue" : "green"}>parent</p>
      {state}
      <State2 updateChild={state} childState={setState} />
      <button
        onClick={() => {
          setState(state);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default State1;
