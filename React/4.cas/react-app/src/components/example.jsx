const Example = () => {
  return (
    <div
      className="box"
      style={{ background: "red", width: "100%", minHeight: 150 }}
    >
      <p
        className="para"
        style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.5 }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem hic fuga
        nam unde pariatur, omnis eius inventore id velit alias reprehenderit,
        tenetur voluptates tempora officiis quaerat dignissimos, asperiores quo
        sit eum explicabo. Id eum quis hic cupiditate ea consectetur rem maiores
        totam, omnis eius corrupti corporis nostrum possimus ipsa praesentium!
      </p>
      <h1 className="header" style={{ fontSize: 42, fontWeight: 700 }}>
        Text
      </h1>
      <img
        className="img"
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        alt=""
        style={{ height: 150, width: 150 }}
      />
    </div>
  );
};

export default Example;
