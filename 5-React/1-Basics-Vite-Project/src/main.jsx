import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

/* ======= Different Approach to render the components in react ======= */

// The component naming convention always starts with Capital letter in Vite Bundeler.
function MyApp() {
  return (
    <h3>Learning react on Day-2</h3>
  )
}

// This is our custom object, which is not recognized by react library, This will not work while rendering

// const element = {
//   type: "a",
//   props: {
//     href: "https://facebook.com",
//     target: "_blank",
//   },
//   children: "Click to visit Facebook",
// };

const anotherEle = (
  <a href="https://netflix.com" target='_blank'>Visit to Netflix website</a>
)

const name = "Tahir Khan"

// This is actually, how the element is converted into an Object, Then it render into the main HTML Page of this project.
const reactEle = React.createElement(
  'h1',
  {title: "I am heading"},
  "Testing with react element ",
  name
)

createRoot(document.getElementById('root')).render(
    // <App/>
    // MyApp()
    // element 
    // <MyApp />
    // anotherEle
    reactEle
)
