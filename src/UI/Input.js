import React, { useRef } from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const inputRef = useRef("cacsa");
  return (
    <input
      type={props.type}
      className={`${classes.input} ${props.className}`}
      onChange={props.onChange}
      placeholder={props.placeholder}
      ref={inputRef}
    />
  );
};

export default Input;
