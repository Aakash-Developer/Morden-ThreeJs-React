import React from "react";
import { SketchPicker } from "react-color";
import { snapshot, useSnapshot } from "valtio";
import state from "../store";

function ColorPicker() {
  const snap = useSnapshot(state);
  return (
    <div className=" absolute left-full ml-3 ">
      <SketchPicker
        color={snap.color}
        presetColors={[
          "#FF5733", // Reddish Orange
          "#66CC99", // Greenish Cyan
          "#E68A00", // Dark Orange
          "#3399FF", // Bright Blue
          "#CC3366", // Magenta
          "#66CCFF", // Light Blue
          "#FFCC66", // Pale Yellow
          "#9933CC", // Purple
          "#99CC33", // Lime Green
          "#FF66B2", // Pink
        ]}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
}

export default ColorPicker;
