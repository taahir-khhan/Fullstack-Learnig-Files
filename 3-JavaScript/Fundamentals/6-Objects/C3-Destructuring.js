

const user = {
      name: "Course",
      isLearning: true,
      greet: () => {
            console.log("Hello");
      }
}

// In a single program we may access isLearning property multiple times, we will always going to use user.isLearning to access the value, But if i say there is a better way i.e Destructuring

console.log(user.isLearning);


// +++++++++++++++++   Destructuring   ++++++++++++++

const {isLearning} = user


// Now instead of using user.isLearning, we can only use isLearning

console.log(isLearning);


// Also rename the property, It doesn't have any effect in original object

const {name : cName} = user
console.log(cName);