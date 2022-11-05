import React from "react";
const Button: React.FC<{ color?: string }> = ({ color }) => {
  let dynamicColor = color === "white" ? "black" : "white";
  return (
    <button
      className="btn"
      style={{
        background: color,
        color: dynamicColor,
        border: ` ${color === "white" ? "1px solid #d4d4d4" : "none"}`,
      }}
    >
      <span
        style={{
          background: dynamicColor,
        }}
      ></span>{" "}
      Ipsum
    </button>
  );
};

export default Button;
