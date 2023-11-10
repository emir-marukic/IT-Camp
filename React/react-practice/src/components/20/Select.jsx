const Select = (props) => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (props.onChange) {
      props.onChange(selectedValue);
    }
  };

  return (
    <select onChange={handleSelectChange}>
      {props?.list &&
        props.list.length &&
        props.list.map((element, index) => (
          <option key={index} value={element}>
            {element}
          </option>
        ))}
    </select>
  );
};

export default Select;
