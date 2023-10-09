const List = () => {
  const list = [
    {
      number: "2.7k",
      text: "Users",
      id: 0,
    },
    {
      number: "1.8k",
      text: "Subscribers",
      id: 1,
    },
    {
      number: "35",
      text: "Downloads",
      id: 2,
    },
    {
      number: "4",
      text: "Products",
      id: 3,
    },
  ];

  return (
    <div>
      {list.map((item) => {
        return <Card key={item.id} number={item.number} text={item.text} />;
      })}
    </div>
  );
};

export default List;
