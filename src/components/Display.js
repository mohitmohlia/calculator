import React from "react";
const displayStyle = {
  width: "100%",
  height: "70px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
};
function Display({ value }) {
  return <div style={displayStyle}>{value}</div>;
}

export default Display;
