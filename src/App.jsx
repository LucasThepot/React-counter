import "./App.css";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <p className="counterstyle">{counter}</p>
      <Increment counter={counter} setCounter={setCounter} />
      <Decrement counter={counter} setCounter={setCounter} />
      <Reset className="resetstyle" counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
