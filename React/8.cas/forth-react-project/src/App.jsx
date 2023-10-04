import Text from "./1/Text";
function App() {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Text type="h1" text="Ovo je h1 text" color="blue" bold />
      <Text
        type="h2"
        text="Ovo je h2 text"
        color="rgb(149,33,33)"
        bold={false}
      />
      <Text type="h3" text="Ovo je h3 text" color="#41D8D3" bold={true} />
      <Text type="h4" text="Ovo je h4 text" color="gray" />
      <Text type="h5" text="Ovo je h5 text" color="yellow" />
    </div>
  );
}

export default App;
