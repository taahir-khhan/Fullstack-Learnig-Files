const heading = document.getElementById("heading");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const foot = document.getElementById("foot");

let cnt = 0;

function addCnt() {
  btn1.innerText = `${++cnt}`;
  btn2.innerText = `${cnt}`;
  heading.innerHTML = `${cnt}`;
}

function removeCnt() {
  btn2.innerText = `${--cnt}`;
  btn1.innerText = `${cnt}`;
  heading.innerHTML = `${cnt}`;
}

btn1.addEventListener("click", addCnt);
btn2.addEventListener("click", removeCnt);
