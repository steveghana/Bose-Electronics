import React from "react";
const Button: React.FC<{ color?: string }> = ({ color }) => {
  let dynamicColor = color === "white" ? "black" : "white";
  return (
    <button className="btn button button--anthe">
      <span style={{ color: "white" }}>Ipsum</span>{" "}
    </button>
  );
};

export default Button;
