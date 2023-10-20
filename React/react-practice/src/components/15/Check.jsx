import { useState } from "react";

const Check = () => {
  const [checked, setChecked] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div>
      <label htmlFor="first">
        First
        <input
          type="checkbox"
          checked={checked.first}
          onChange={() => {
            if (checked.first) {
              setChecked({ ...checked, second: false, third: false });
            }
            setChecked({ ...checked, first: !checked.first });
          }}
        />
      </label>
      <label htmlFor="second">
        Second
        <input
          type="checkbox"
          checked={checked.second}
          onChange={() => {
            setChecked({ ...checked, second: !checked.second });
          }}
        />
      </label>
      <label htmlFor="third">
        Third
        <input
          type="checkbox"
          checked={checked.third}
          onChange={() => {
            if (checked.first) {
              return;
            }
            setChecked({ ...checked, third: !checked.third });
          }}
        />
      </label>
    </div>
  );
};

export default Check;
