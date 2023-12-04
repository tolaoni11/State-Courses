import React, { useState } from "react";

export default function SliderExample() {
  const [age, setAge] = useState(0);

  const handleChange = (e) => {
    console.log("clicked!!!");
    setAge(e.target.value);
  };

  return (
    <div>
      <h1>Slider Example</h1>
      <input
        type="range"
        min="0"
        max="100"
        value={age}
        onChange={(e) => handleChange(e)}
      />
      <p>Age Value: {age}</p>
    </div>
  );
}
