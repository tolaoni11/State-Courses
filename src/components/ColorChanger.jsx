import React, { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("lightgreen");
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
      >
        Click Me!
      </div>
    </div>
  );
}
