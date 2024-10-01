// Function to render the element into main page

function elementRender(ele, container) {
  //   First Approach

  //   const newEle = document.createElement(ele.type);
  //   newEle.innerHTML = ele.children;
  //   newEle.setAttribute("href", ele.props.href);
  //   newEle.setAttribute("target", ele.props.target);
  //   container.appendChild(newEle);

  // Optimized Approach

  const newEle = document.createElement(ele.type);
  newEle.innerText = ele.children;

  for (const prop in ele.props) {
    newEle.setAttribute(prop, ele.props[prop]);
  }
  container.appendChild(newEle);
}

/*
   - Behind the scene of react all the all the element is parsed into an object,
   then rendered into main Html page.
*/
const element = {
  type: "a",
  props: {
    href: "https://facebook.com",
    target: "_blank",
  },
  children: "Click to visit Facebook",
};

const mainContainer = document.getElementById("root");
elementRender(element, mainContainer);
