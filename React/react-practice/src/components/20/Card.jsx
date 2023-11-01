import Heart from "./Heart";
import Star from "./Star";

const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        margin: "auto",
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
          <p>BRAND NAME</p>
          <h1>The Catcher in the Rye</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
              width: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100px",
              }}
            >
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>4 Reviews</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>x</p>
            <p>x</p>
            <p>x</p>
          </div>
        </div>
        <div style={{ width: "500px" }}>
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <p>Color</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                background: "white",
                width: "30px",
                height: "30px",
                borderRadius: "20px",
                border: "1px solid gray",
              }}
            ></button>
            <button
              style={{
                background: "black",
                width: "30px",
                height: "30px",
                borderRadius: "20px",
                border: "1px solid gray",
              }}
            ></button>
            <button
              style={{
                background: "blue",
                width: "30px",
                height: "30px",
                borderRadius: "20px",
                border: "1px solid gray",
              }}
            ></button>
          </div>
          <div>
            <select name="Size" id="" style={{ padding: "10px 20px" }}>
              <option value="M">M</option>
              <option value="M">X</option>
              <option value="M">XL</option>
            </select>
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
          <b>$58.00</b>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "200px",
            }}
          >
            <button
              style={{
                background: "blue",
                padding: "10px 20px",
                color: "#fff",
                borderRadius: "10px",
                border: "none",
              }}
            >
              Button
            </button>
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
