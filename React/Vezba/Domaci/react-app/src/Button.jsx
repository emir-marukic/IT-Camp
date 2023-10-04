import "./style.css";

const Button = (prop) => {
  <button className={`${prop.variant} ${prop.color}`}>Button</button>;
};

export default Button;
