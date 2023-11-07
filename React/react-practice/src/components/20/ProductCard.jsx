import { useState } from "react";
import Button from "./Button";
import RoundButton from "./RoundButton";
import Select from "./Select";

import Text from "./Text";
import Rating from "./rating";

const ProductCard = (props) => {
  // console.log(props);

  // State variables to store the last selected color and size
  const [lastSelectedColor, setLastSelectedColor] = useState("white");
  const [lastSelectedSize, setLastSelectedSize] = useState("");

  // Callback function to update the last selected color
  const handleColorChange = (color) => {
    setLastSelectedColor(color);
  };

  // Callback function to update the last selected size
  const handleSizeChange = (size) => {
    setLastSelectedSize(size);
  };

  return (
    <div>
      <div>
        <img
          src={props.data.imgs[lastSelectedColor]}
          alt=""
          style={{ width: "400px", height: "400px" }}
        />
      </div>
      <div>
        {/* ... (other components and elements) */}

        <div>
          <Text type="t3" text="Color" />
          <RoundButton color="blue" onClick={() => handleColorChange("blue")} />
          <RoundButton
            color="black"
            onClick={() => handleColorChange("black")}
          />
          <RoundButton
            color="white"
            onClick={() => handleColorChange("white")}
          />

          <Text type="t3" text="Size" />
          <Select
            list={props.data.sizes}
            onChange={(size) => {
              handleSizeChange(size); // Update the last selected size
              console.log("Selected Size:", size); // Log the selected size
            }}
          />
        </div>

        <div>
          <Text type="t4" text={props.data.price} />
          <Button
            title="Button"
            onClick={() => {
              // Log the last selected color and size
              console.log("Last Selected Color:", lastSelectedColor);
              console.log("Last Selected Size:", lastSelectedSize);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
