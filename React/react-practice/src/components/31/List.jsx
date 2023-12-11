// imate prop koji se zove data koji je arraj objekata
// i morate da napravite da je svaki list item selectable
// znaci da vam treba state koji ovo snima
// na click list itema se menja chekcbox vrednost tog itema

import { useState } from "react";
import ListItem from "./ListItem";

function List(props) {
  const { data } = props;
  const [selected, setSelected] = useState({});

  const handleSelect = (index) => {
    const newSelected = { ...selected };
    if (newSelected[index]) {
      newSelected[index] = undefined;
    } else {
      newSelected[index] = true;
    }
    setSelected(newSelected);
  };
  console.log(selected);
  return (
    <div>
      <div>
        {data.map((item, index) => {
          return (
            <ListItem
              key={index}
              title={item}
              selected={selected[index]}
              onSelect={() => handleSelect(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
