import "./App.css";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app1">
          <Decrement counter={counter} setCounter={setCounter} />
          <p className="counterstyle">{counter}</p>
          <Increment counter={counter} setCounter={setCounter} />
        </div>
        <Reset counter={counter} setCounter={setCounter} />
        <footer>
          <p>
            Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
            <span>Lucas</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
