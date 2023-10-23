import { useState } from "react";

const ToDoList = () => {
  const [data, setData] = useState([
    { text: "pokusaj jedan", selected: false },
  ]);

  const [input, setInput] = useState("");

  return (
    <div>
      <div style={{ backgroundColor: "red", padding: "20px 30px" }}>
        <h1 style={{ textAlign: "center" }}>My todo list</h1>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            style={{ margin: 0, padding: 0, width: "75%", height: 40 }}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            style={{ width: "35%", height: 40, margin: 0, padding: 0 }}
            onClick={() =>
              setData([...data, { text: input, selected: false, edit: false }])
            }
          >
            Add
          </button>
        </div>
      </div>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: item.selected ? "gray" : "white" }}
              onClick={() => {
                const newState = [...data];
                newState[index].selected = !newState[index].selected;
                setData(newState);
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{item.text}</p>
                <div>
                  <button
                    onClick={() => {
                      const newState = data.filter((item, i) => i !== index);
                      setData(newState);
                    }}
                  >
                    X
                  </button>
                  <button
                    onClick={() => {
                      const newData = [...data];
                      newData[index].selected = !newData[index].selected;
                      setData();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ToDoList;
