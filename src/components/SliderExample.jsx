import React, { useState } from "react";

export default function SliderExample() {
  const [age, setAge] = useState(40);
  return (
    <div>
      <h1>Slider Example</h1>
      <input type="range" min="0" max="100" value={age} />
      <p>Age Value: {age}</p>
    </div>
  );
}
