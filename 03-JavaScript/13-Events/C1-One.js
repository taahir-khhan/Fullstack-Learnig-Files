/* ==========  Events in Javascript  ========== 
      
      - All the Js codes runs sequentially, except events and asyncronous javascript.

      - Perticulary events is called when some events is invoked or called.
*/

/*   ========== Onclick (2nd Approach) ========== 

      - There is no problem in it, it is not the best way to add events, because it is limited to only click events.
*/

document.getElementById("owl").onclick = function () {
  alert("Owl is clicked");
};

/* ==========  Event Listners (Best Approach) ========== 

      - addEventListner comes with lots of events inside the system.

      - 'eventType' -> like click, keypress, mouse click etc. It supports tons of events.

      - 'eventObj'  -> Every event listner have this object, they store lots of information about events.
      
      - 'true / false (default)' -> Third Parameter of event listner.
*/

document.getElementById("river").addEventListener("click", () => {
  alert("River image is clicked");
});

document.getElementById("photoshop").addEventListener(
  "click",
  (eventObj) => {
    console.log(eventObj);
  },
  false
);

// ==========  Event Object properties ==========

// 1) timeStamp -> returns the time in milisecond at which time the event was created.

document.body.addEventListener("click", (e) => {
  const time = document.getElementById("time");
  time.innerText = e.timeStamp;
});

/*  2) preventDefault

      - prevent the default behaviour of an element.

      - For example below, Now hyperlink will not redirect when clicked.
*/

document.getElementById("google").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Defult behaviour is stopped");
});

// 3) target -> targets the current element which is triggered.

document.getElementById("owl2").addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.parentNode);
});

// 4) currentTarget

document.querySelector(".parent").addEventListener("click", (e) => {
  console.log(e.currentTarget);
  console.log(e.target);
});

//  ==========  Event Propagation  ==========

/*   1) Bubbling Up - ( child -> parent )

      - In the below, we added event to parent element and also to the child element.

      - When we click child, who is going to click first parent or child ?

      - In bubbling up, first the child is clicked, then the parent.

      - This is the default behaviour, even if we didn't define the third parameter.
*/

document.getElementById("vegetables").addEventListener(
  "click",
  () => {
    console.log("Parent vegetables list is clicked");
  },
  false
);

document.querySelectorAll(".veg-item").forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      console.log("Child vegetables item list is clicked");
    },
    false
  );
});

/*  2) Capturing Mode (Parent -> child)

      - If we define the third parameter as true, then it will goes to capturing method.

      - In this scenario if the parent and child both have event listner added then first parent event will active, then the child's event.
*/

document.getElementById("grocery").addEventListener(
  "click",
  () => {
    console.log("Parent grocery list is clicked");
  },
  true
);

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      console.log("Child grocery Item list is clicked");
    },
    true
  );
});

// 3) Stop Propagation  -> Now propagation will stop.

document.getElementById("non-veg").addEventListener("click", () => {
  console.log("Parent Non-veg list is clicked");
});

document.querySelectorAll(".nonveg-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log("Child non-veg Item list is clicked");
    e.stopPropagation();
  });
});

// ==========  Task-1  ==========

// Remove images inside the list

document.getElementById("images2").addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    console.log(e.target.tagName);
    const removeImg = e.target.parentNode;
    removeImg.remove();
  }
});
