import "./button.css";
const Input = ({
  type = "text",
  className,
  style,
  onChangeText,
  placeholder,
}) => {
  return <input type={type} className={`input ${className}`} style={style} onChangeText={input.value = onChangeText} placeholder={placeholder} />

export default Input
