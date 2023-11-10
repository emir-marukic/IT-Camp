import { useState } from "react";
import Button from "./Button";
import RoundButton from "./RoundButton";
import Select from "./Select";

import Text from "./Text";
import Rating from "./rating";

const ProductCard = (props) => {
  console.log(props);
  const [img, setImg] = useState(props.data.imgs.white);
  return (
    <div>
      <div>
        <img src={img} alt="" style={{ width: "400px", height: "400px" }} />
      </div>
      <div>
        <Text type="t1" text="BRAND NAME" />
        <Text type="t2" text={props.data.brandTitle} />
        <div>
          <Rating value={props.data.reviews} />
          <Text type="t3" text={`${props.data.reviewsCount} reviews`} />

          {/* <SocialIcon type="fb" />
          <SocialIcon type="twitter" />
          <SocialIcon type="intagram" /> */}
        </div>
        <Text type="t3" text={props.data.description} />

        <div>
          <Text type="t3" text="Color" />
          <RoundButton color="blue" />
          <RoundButton color="black" />
          <RoundButton color="white" />
          <Text type="t3" text="Size" />
          <Select list={props.data.sizes} />
        </div>

        <div>
          <Text type="t4" text={props.data.price} />
          <Button title="Button" />
          <Button title="Button" />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
