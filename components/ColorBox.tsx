import React, { useState } from "react";

const Toast = ({ message, visible, onClose }) => {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#333",
        color: "white",
        padding: "12px 24px",
        borderRadius: "4px",
        animation: "fadeIn 0.3s, fadeOut 0.3s 2.7s",
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export function ColorBox({ color, name }) {
  const [showToast, setShowToast] = useState(false);

  // Helper function to determine if a color is dark
  const isColorDark = (color) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 < 128;
  };

  const handleClick = () => {
    navigator.clipboard.writeText(color);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <div
        onClick={handleClick}
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
          cursor: "pointer",
        }}
      >
        <div
          style={{
            padding: "8px",
            color:
              color === "white"
                ? "#666"
                : isColorDark(color)
                  ? "white"
                  : "black",
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
      <Toast
        message="Color code copied to clipboard!"
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
