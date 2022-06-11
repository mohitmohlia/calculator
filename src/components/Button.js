import React from "react";

const buttonStyle = {
  width: "50px",
  height: "50px",
  cursor: "pointer",
  fontSize: "x-large",
};
function Button({ value, className, handleClick }) {
  return (
    <button
      className={className}
      style={buttonStyle}
      onClick={() => handleClick(value)}
    >
      {value}
    </button>
  );
}

export default Button;
