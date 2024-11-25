import "./App.css";
import { List } from "./Props"

function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  }
  return (
    <button style={buttonStyle}>{text}</button>
  )
}


function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"]
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  )
}


export default App;
