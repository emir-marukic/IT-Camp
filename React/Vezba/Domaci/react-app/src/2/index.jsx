import Card from "./Card";

const Class2 = () => {
  return (
    <div
      style={{
        margin: "100px 100px",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <Card
        category={"Category"}
        header={"The Catalyzer"}
        img={
          "https://t4.ftcdn.net/jpg/03/85/38/95/360_F_385389558_SZGfDDRtqri0XpVW9xoPgRj4VmbWs2xA.jpg"
        }
        paragraph={
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        }
        link={"https://www.google.com/"}
        linkTxt={"Learn More"}
      />
      <Card
        category={"Category"}
        header={"The 400 Blows"}
        paragraph={
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        }
        link={"https://www.google.com/"}
        linkTxt={"Learn More"}
      />{" "}
      <Card
        category={"Category"}
        header={"Shooting Stars"}
        img={
          "data:image/jpeg;base64,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"
        }
        paragraph={
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        }
        link={"https://www.google.com/"}
        linkTxt={"Learn More"}
      />
    </div>
  );
};

export default Class2;
