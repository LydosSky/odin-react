import { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];
export default function Colors() {
  const [bgColor, setBgColor] = useState(COLORS[0]);
  const [count, setCount] = useState(1);

  const onbuttonclick = (color) => () => {
    setBgColor(color);
    setCount(count + 1);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Background Color Changed {count} Times</h1>
      {COLORS.map((color) => (
        <button
          className={bgColor === color ? "selected" : ""}
          type="button"
          key={color}
          onClick={onbuttonclick(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
