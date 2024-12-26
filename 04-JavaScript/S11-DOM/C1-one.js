// ========= Selecting Element by using idName =========

const getEle = document.getElementById("parent1");
console.log(getEle);

// ========= Access Specific element info. =========

console.log(getEle.id);
console.log(getEle.className);

// ========= getAttribute() method =========

console.log(getEle.getAttribute("id"));
console.log(getEle.getAttribute("class"));

// ========= Modify attributes through setAttribute() method =========

getEle.setAttribute("title", "Okay div");
console.log(getEle);

// ========= In setAttribute(), it will replace the original value =========

getEle.setAttribute("class", "replaced"); // Check original class name in HTML file
console.log(getEle.getAttribute("class"));
console.log(getEle);

// ========= Manipulating styles of the element =========

getEle.style.backgroundColor = "#214321";
getEle.style.padding = "13px";
getEle.style.borderRadius = "10px";

const getEleThree = document.getElementById("parent2");
console.log(getEleThree);

getEleThree.style.backgroundColor = "blue";
getEleThree.style.marginTop = "10px";
getEleThree.style.padding = "10px";
getEleThree.style.borderRadius = "10px";

// ========= Get Element Content =========

// It will give all the content including elements.
console.log(getEleThree.innerHTML);

// It will give only displayed content only.
console.log(getEleThree.innerText);

// It will gives all the content, along with the hidden elements content.
console.log(getEleThree.textContent);

/* ========= Query Selector =========

    - Takes arguments as CSS selectors.

    - It will select only the first child.
*/

const list1 = document.querySelector(".counting > li:nth-child(2)");
console.log(list1);

list1.style.backgroundColor = "Red";
list1.style.padding = "12px";
list1.style.borderRadius = "12px";
list1.style.marginBottom = "10px";

const thirdDiv = document.querySelector(".parent3");
console.log(thirdDiv);

thirdDiv.style.marginTop = "10px";
thirdDiv.style.marginBottom = "10px";
thirdDiv.style.borderRadius = "10px";
thirdDiv.style.backgroundColor = "grey";
thirdDiv.style.padding = "10px";

/* ========= Query Selector All =========

    - It also takes argument as CSS selectors.

    - It will select all element with that perticular selector.

    - It returns a NodeList.
*/

const someDivs = document.querySelectorAll(".boxes");
console.log(someDivs);

someDivs.forEach((item) => {
  item.style.backgroundColor = "chocolate";
  item.style.marginBottom = "10px";
  item.style.padding = "10px";
  item.style.borderRadius = "10px";
});

/* ========= Selecting element using class name =========

    -It will select all the elements having that specific class name and returns a HTMLCollection.
*/

const children = document.getElementsByClassName("child");
console.log(children);

for (let i = 0; i < children.length; i++) {
  console.log(children[i].innerText);
}

const convertedArray = Array.from(children);
console.log(convertedArray);

convertedArray.forEach((list) => {
  console.log(list.textContent);
});
