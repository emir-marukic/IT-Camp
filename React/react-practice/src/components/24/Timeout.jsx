import { useEffect, useState } from "react";

const Timeout = () => {
  const [text, setText] = useState(new Date().toTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return <div>{text}</div>;
};

export default Timeout;
