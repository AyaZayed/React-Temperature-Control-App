import "./App.css";
import { useState } from "react";

function App() {
  const [temp, setTemp] = useState(0);

  function handleIncrease() {}
  function handleDecrease() {}
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temp}`}>{temp}</div>
      </div>
      <div className="button-container">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
}

export default App;
