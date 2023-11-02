import Button from "./Button";
import Color from "./Color";
import Header from "./Header";
import Heart from "./Heart";
import Price from "./Price";
import Size from "./Size";
import Social from "./Social";
import Star from "./Star";
import Text from "./Text";

const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "auto",
        marginTop: "200px",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <img
          src="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593111703/img_logo?e=2147483647&v=beta&t=GXoH1LXt9jy32BZy9mCLWxerKUmdGB6xCQStyv7hi34"
          alt=""
          style={{ width: "400px", height: "400px" }}
        />
      </div>
      <div>
        <Header />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
              width: "200px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Star />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100px",
            }}
          >
            <Social />
          </div>
        </div>
        <div style={{ width: "500px" }}>
          <Text />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Color />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "200px",
            }}
          >
            <Size />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
            borderTop: "1px solid gray",
            paddingTop: "20px",
          }}
        >
          <Price />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "200px",
            }}
          >
            <Button />
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
