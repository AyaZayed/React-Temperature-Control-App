import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [temp, setTemp] = useState(0);
  const [tempColor, setTempColor] = useState("cold");

  function handleIncrease() {
    if (temp >= 0 && temp < 30) {
      setTemp(temp + 1);
    }
  }
  function handleDecrease() {
    if (temp > 0 && temp <= 30) {
      setTemp(temp - 1);
    }
  }

  useEffect(() => {
    if (temp <= 16) {
      setTempColor("cold");
    } else {
      setTempColor("hot");
    }
  }, [temp]);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{temp}°C</div>
      </div>
      <div className="button-container">
        <button onClick={handleIncrease}>+</button>
        <button onClick={handleDecrease}>-</button>
      </div>
    </div>
  );
}

export default App;
