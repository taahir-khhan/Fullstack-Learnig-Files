
// Now here this reffering to the global object

// this.x = 11;
// console.log(this.x);

const user = {
      name : "KK",
      age : 34,
            getDetails() {
                  console.log(this.name); // Now this is pointing to user
            },
      state : "Odisha",
};

// user.getDetails();


// In case of arrow function

const user2 = {
      name : "JJ",
      detail : () => console.log(this.name),  // It is pointing to the global object
}

// user2.detail();


// If it is nested

const user3 = {
      name : "LL",
      func : function () {
            const nestedArrow = () => console.log(this.name);
            nestedArrow();
      },
};

user3.func()