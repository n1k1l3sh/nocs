import * as React from "react";

export function GradientBox({ colors, angle, name }) {
  return (
    <div
      style={{
        background: `linear-gradient(${angle}deg, ${colors[0]}, ${colors[1]})`,
        width: "200px",
        height: "100px",
        margin: "10px",
        borderRadius: "4px",
        display: "inline-block",
      }}
    >
      <div
        style={{
          padding: "8px",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          fontSize: "12px",
        }}
      >
        {name}
      </div>
    </div>
  );
}
