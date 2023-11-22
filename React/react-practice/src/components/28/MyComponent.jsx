import { useContext } from "react";
import { MyContext } from "./SempleContext";

function MyComponent() {
  const { test, count, setCount, ime } = useContext(MyContext);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>{test}</p>
      {ime}
    </div>
  );
}

export default MyComponent;
