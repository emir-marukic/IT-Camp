import Avatar from "./Avatar";
import Baner from "./Baner";
import Button from "./Button";
import Devider from "./Devider";
import Name from "./Name";
import ProfileText from "./ProfileText";
import Text from "./Text";

const Page = () => {
  return (
    <div>
      <div>
        <Baner img="https://cdn.cookielaw.org/logos/889c435d-64b4-46d8-ad05-06332fe1d097/4353a07c-5b48-453a-b5ab-e8498c172697/IMG-ReBrand-Blue.png" />
      </div>

      <div
        style={{
          display: "flex",
          gap: "100px",
          alignItems: "center",
          width: "60%",
          marginLeft: "300px",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRight: "1px solid gray",
            paddingRight: "100px",
            gap: "20px",
          }}
        >
          <Avatar img="https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593111703/img_logo?e=2147483647&v=beta&t=GXoH1LXt9jy32BZy9mCLWxerKUmdGB6xCQStyv7hi34" />
          <Name name="Emir Marukic" />
          <Devider color={"blue"} />
          <ProfileText
            profileText="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos
      possimus suscipit fugiat, voluptate eveniet sit amet delectus doloribus
      corporis quibusdam at fugit distinctio hic, sapiente nesciunt mollitia!
      Laborum, illo."
          />
        </div>
        <div>
          <Text
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
      inventore vero fuga, delectus nulla quidem numquam alias in dolorum
      doloribus error saepe aut iste asperiores molestiae dicta corrupti qui et
      quisquam rerum itaque at. Laudantium quas placeat doloribus minus
      doloremque voluptatem vero, nulla officiis blanditiis, dolorem id
      explicabo commodi, eos repellendus minima consectetur illum. Officiis
      adipisci maxime vitae fuga nostrum eaque sequi labore libero incidunt
      assumenda facere provident quas placeat, ipsum, similique mollitia vero
      quod molestias eum? Cumque reiciendis tenetur natus excepturi commodi
      voluptatibus facere repellat quas necessitatibus? Voluptatibus illum
      voluptates obcaecati iure, itaque possimus quam hic nesciunt excepturi."
          />
          <Button button="Learn more →" />
        </div>
      </div>
    </div>
  );
};
export default Page;
