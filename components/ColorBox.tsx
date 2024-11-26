import React from "react";

export function ColorBox({ color, name }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
        display: "inline-block",
        margin: "10px",
        borderRadius: "4px",
        position: "relative",
        border: "1px solid #ccc",
        boxShadow: "0 0 0 1px #fff, 0 0 0 2px #ccc",
      }}
    >
      <div
        style={{
          padding: "8px",
          color: color === "white" || color === "black" ? "#666" : "black",
          fontSize: "12px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name}
        <br />
        {color}
      </div>
    </div>
  );
}
