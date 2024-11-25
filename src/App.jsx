import "./App.css";
import { List } from "./Props"

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"]
  return (
    <div>
      <h1>Animals</h1>
      <List animals={animals} />
    </div>
  )
}


export default App;
