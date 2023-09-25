const BlogPost = () => {
  return (
    <div
      className="box"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // backgroundColor: "gray",
        height: 400,
        borderBottom: "1px solid gray",
        width: "90%",
        margin: "auto",
      }}
    >
      <div className="category">
        <h3>Category</h3>
        <p style={{ opacity: 0.8 }}>12 Jun 2019</p>
      </div>
      <div className="text" style={{ width: "60%" }}>
        <h1 style={{ fontWeight: 400 }}>
          Bitters hashtag waiscoat fashion axe chia unicorn
        </h1>
        <p style={{ opacity: 0.9, lineHeight: "30px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          beatae voluptas reprehenderit consequatur ducimus error magni aliquam
          fugiat. Odio aliquam cum alias adipisci animi, dolore facilis totam
          error distinctio voluptates, consequuntur vel quam odit consequatur
          similique exercitationem quis aliquid. Nobis ducimus vitae, sed sit
          deleniti culpa neque alias obcaecati illum.
        </p>
        <p style={{ color: "blue", fontWeight: 400 }}>Learn More</p>
      </div>
    </div>
  );
};

export default BlogPost;
