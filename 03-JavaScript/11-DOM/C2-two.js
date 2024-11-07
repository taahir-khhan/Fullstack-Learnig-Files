const uoList = document.querySelector("#months");

// ========= Access Childrens of the Parent element=========
console.log(uoList.children);

/*    
      - In the below way of accessing child nodes, gives NodeList.

      - Here every line break is count as one i.e text node.

      - And then each element.
*/
console.log(uoList.childNodes);

// Modifying styles of the children
for (let i = 0; i < uoList.children.length; i++) {
  uoList.children[i].style.backgroundColor = "yellow";
  uoList.children[i].style.marginBottom = "5px";
  uoList.children[i].style.padding = "8px";
  uoList.children[i].style.color = "black";
}

console.log(uoList.firstElementChild);
console.log(uoList.lastElementChild);

// ========= Accessing Parent and Sibling using Child Element =========
const monthOne = document.querySelector(".name1");

console.log(monthOne);
console.log(monthOne.parentElement);
console.log(monthOne.nextElementSibling);
