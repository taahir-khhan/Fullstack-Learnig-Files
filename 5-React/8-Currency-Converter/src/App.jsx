import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="px-4 py-2 bg-orange-500 text-center">
        Currency Convertor
      </h1>
    </>
  );
}

export default App;
