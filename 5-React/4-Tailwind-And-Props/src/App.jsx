import { useState } from "react";
import "./App.css";
import Card from "./Component/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    name: "Tahir",
    Age: 23,
  };

  return (
    <>
      <h1 className="bg-gray-600 text-white p-4 rounded-lg mb-4">
        Main Heading
      </h1>
      <Card
        url="https://images.unsplash.com/photo-1727915325711-5fdfb5a0a55c?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Butterfly on the leaf"
        btnText="Explore"
        obj={myObj}
      />
      <Card
        url="https://images.unsplash.com/photo-1726809448984-2e7f60cc6e97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
        heading="Japanese girl wearing Glasses"
      />
    </>
  );
}

export default App;
