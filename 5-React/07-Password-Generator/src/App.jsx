import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "@#$%&*=+";

    for (let i = 0; i < length; i++) {
      let strCharIdx = Math.floor(Math.random() * str.length);
      pass += str.charAt(strCharIdx);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 10);
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 1500); // Reset after 1.5 seconds
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  }, [password]);

  return (
    <div className="container">
      <div className="app_container">
        <h1>Random Password Generator</h1>
        <div className="input_box">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button className={`copy`} onClick={copyPasswordToClipboard}>
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="input_box-2">
          <div>
            <input
              type="range"
              min={8}
              max={20}
              id="rangeInput"
              value={length}
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
            <label htmlFor="rangeInput">Length: {length}</label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Include Characters</label>
          </div>
        </div>

        <div className="btn">
          <button className="generate" onClick={passwordGenerator}>
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
