import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Different Approach to render the components in react

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
