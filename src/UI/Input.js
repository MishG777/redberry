import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      // ref={inputRef}
      type={props.type}
      className={`${classes.input} ${props.className}`}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
