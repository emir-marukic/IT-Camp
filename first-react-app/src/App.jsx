import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="box-1">
          <h1>Kickstarter Actually Pinterest Brunch Bitters Occupacy</h1>
        </div>
        <div className="box-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem
            earum iure, perspiciatis consequuntur porro accusamus! Corrupti in
            quasi facere molestias quia fugit officiis tempore voluptate sint
            aliquid itaque odit nisi omnis quibusdam fugiat sequi, libero non?
            Est facere, rem incidunt reiciendis distinctio beatae nostrum iure,
            esse veritatis, debitis eligendi.
          </p>
          <div className="btns">
            <button>Button</button>
            <p>Learn More</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
