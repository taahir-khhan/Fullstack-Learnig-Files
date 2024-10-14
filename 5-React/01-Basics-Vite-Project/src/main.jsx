import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/* ======= Different Approach to render the components in react ======= */

/* 
  - Component naming convention is always starts with capital letter. 
  - This component returns jsx (HTML like code). 
  - It will transform into a React element (an Object) before rendering it.
*/
function MyApp() {
  return <h3>Learning react on Day-2</h3>;
}

// Custom Object representation of an element (2-CustomReact)
const element = {
  type: "a",
  props: {
    href: "https://facebook.com",
    target: "_blank",
  },
  children: "Click to visit Facebook",
};

/*
  - This is the JSX version of the anchor (<a>) tag pointing to Netflix.

  - It will be converted into a React element (JavaScript object) internally, just like element was manually created above. 
  
  - JSX is essentially syntactic sugar for React.createElement.
*/
const anotherEle = (
  <a href="https://netflix.com" target="_blank">
    Visit to Netflix website
  </a>
);

/*
  - This is how React internally creates an element without using JSX.

  - This is how JSX like <h1 title="I am heading">Testing with react element Tahir Khan</h1> would be created internally using React.createElement.
*/
const name = "Tahir Khan";
const reactEle = React.createElement(
  "h1",
  { title: "I am heading" },
  "Testing with react element ",
  name
);

createRoot(document.getElementById("root")).render(
  // This will render the component in the page, But this is not the way how we render the component in react
  // MyApp()

  // This is the way we render the react components
  // <MyApp />

  // This will not render anything, beacuse it is a custom React Object
  // element

  // anotherEle

  // reactEle

  <App />
);
