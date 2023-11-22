import { useContext } from "react";

const Item = (props) => {
  const { title, tabKey } = props;
  const { active, setActive } = useContext(TabsContext);
  return (
    <div style={{ border: tabKey === 0 ? "1px solid black" : "0" }}>
      {title}
    </div>
  );
};

export default Item;
