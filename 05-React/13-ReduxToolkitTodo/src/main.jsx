import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { todoStore } from "./App/store.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={todoStore}>
    <App />
  </Provider>
);
