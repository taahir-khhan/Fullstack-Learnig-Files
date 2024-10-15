

let obj = {name : "khan"};

function sayHello(age, profession) {
      console.log("Hello " + this.name + " " + age + " " + profession);  
}

const bindFunc = sayHello.bind(obj);  // It will always return a function, which is reusable

bindFunc(12, "Engineer");
bindFunc(44, "Youtuber");