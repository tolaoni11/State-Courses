import React, { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("lightgreen");

  const handleClick = () => {
    setColor(color === "lightgreen" ? "lightblue" : "lightgreen");
  };

  return (
    <div>
      <h2>Color Changer</h2>
      <div
        style={{
          width: "200px",
          height: "200px",
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <button onClick={() => handleClick()}>Click Me</button>
    </div>
  );
}
