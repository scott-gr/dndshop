  
import React from "react";
import "./input.css"

const Input = ({ category, placeholder, name, onChangeFunction }) => {
  return (
    <input
      styleName="input"
      type={category}
      placeholder={placeholder}
      name={name}
      onChange={onChangeFunction}
    />
  );
};

export default Input;