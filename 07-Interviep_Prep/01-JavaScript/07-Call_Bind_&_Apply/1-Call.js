

let obj = {name : "khan"};

function sayHello(age, profession) {
      console.log("Hello " + this.name + " " + age + " " + profession);  
}

sayHello(12, "Engineer"); 

sayHello.call(obj, 12, "front-end developer");     


const obj2 = {
      name : "kkkk",
      age : 47,
      func : function () {
            console.log(this.name);
      },
};

obj2.func.call(obj);