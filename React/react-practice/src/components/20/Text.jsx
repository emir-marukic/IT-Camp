const Text = ({ text, type }) => {
  const getType = () => {
    switch (type) {
      case "t1":
        return { fontSize: 44 };
      case "t2":
        return { fontSize: 34 };
      case "t3":
        return { fontSize: 24 };
      case "t4":
        return { fontSize: 20 };
      case "title":
        return { fontSize: 18 };
      case "normal":
        return { fontSize: 16 };
    }
  };

  return <p style={{ ...getType() }}>{text}</p>;
};

export default Text;
