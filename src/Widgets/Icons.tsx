import React from "react";
import { ArrowDropDown } from "@material-ui/icons";
import { Details } from "@material-ui/icons";
export function Circle() {
  return <div className="Circle"></div>;
}

export const Number: React.FC<{ numb?: string; flip?: boolean }> = ({
  numb,
  flip,
}) => {
  return (
    <div
      style={{ scale: flip ? "-1 1" : "unset", left: flip ? "5%" : "90%" }}
      className="number"
    >
      <span>
        <ArrowDropDown style={{ fontSize: "11px" }} />
      </span>{" "}
      {numb}
    </div>
  );
};
export function Traingle() {
  return <Details style={{ fontSize: "3.5rem" }} />;
}
export function Square() {
  return <div className="Square"></div>;
}
