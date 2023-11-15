import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const getQuote = async () => {
    try {
      let apiURL = "https://api.quotable.io/search/quotes?";

      apiURL += "query=" + search;

      const response = await fetch(apiURL);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  return (
    <div>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={getQuote}>Click</button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {data?.results?.map((quote, index) => {
          return (
            <div key={index} className="box">
              <p>{quote.author}</p>
              <p>{quote.content}</p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "200px",
        }}
      >
        <button>{"<"}</button>
        <button style={{ background: data?.page === 1 ? "blue" : "white" }}>
          1
        </button>
        <button>2</button>
        <button>3</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default Search;
