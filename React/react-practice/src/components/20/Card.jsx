import Button from "./Button";
import Color from "./Color";
import Heart from "./Heart";
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
        <div>
          <Text text="BRAND NAME" />
          <Text text="The Ryan" type="t2" />
        </div>
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
            <Social
              instaLink={"https://github.com/"}
              fbLink={"//"}
              twitterLink={"//"}
            />
          </div>
        </div>
        <div style={{ width: "500px" }}>
          <Text text="Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan." />
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
          <Text text="$58" type="h2" />
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
