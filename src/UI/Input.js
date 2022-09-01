import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const currentValue = () => {
    return {
      value: inputRef.current,
    };
  };

  useImperativeHandle(ref, () => {
    return {
      value: currentValue,
    };
  });

  return (
    <input
      ref={inputRef}
      type={props.type}
      className={`${classes.input} ${props.className}`}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
});

export default Input;
