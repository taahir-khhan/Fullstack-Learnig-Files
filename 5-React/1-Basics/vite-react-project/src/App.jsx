import Learn from "./Learning"
import Test from "./Test"

function App() {
  let value = "Khan"
  // Inserting variables inside an HTML tag.
  return (
    <>
      <h1>Started Learning React from chai aur code | Tahir {value} </h1>
      <Learn />
      <Test />
    </>
  )
}

export default App