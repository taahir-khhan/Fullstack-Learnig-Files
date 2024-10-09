import React, { useRef } from "react";
import "./App.css";

function FocusInput() {
  // Create a ref using useRef and initialize it with null
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Access the DOM node directly and call the focus() method
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
