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
        <Baner />
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
          <Avatar />
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
            text="     Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
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
          <Button button="Learn more" />
        </div>
      </div>
    </div>
  );
};
export default Page;
