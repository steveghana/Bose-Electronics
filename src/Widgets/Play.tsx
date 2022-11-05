import React from "react";
import { PlayArrow } from "@material-ui/icons";
function Play() {
  return (
    <div className="music__play-btn">
      <PlayArrow style={{ zIndex: "8" }} fontSize="large" />
    </div>
  );
}

export default Play;
