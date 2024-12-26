

let obj = {name : "khan"};

function sayHello(age, profession) {
      console.log("Hello " + this.name + " " + age + " " + profession);  
}

sayHello.apply(obj, [12, "front-end developer"]);