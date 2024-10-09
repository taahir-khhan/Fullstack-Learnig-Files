import { useState } from "react";
import "./App.css";

function App() {
  // React Hook
  let [counter, setCounter] = useState(0);

  const increaseCnt = () => {
    if (counter >= 10) return;
    setCounter(counter + 1);
  };

  const decreaseCnt = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter App {counter}</h1>
      <button onClick={increaseCnt}>Add {counter}</button>
      <button onClick={decreaseCnt}>Remove {counter}</button>
    </>
  );
}

export default App;
