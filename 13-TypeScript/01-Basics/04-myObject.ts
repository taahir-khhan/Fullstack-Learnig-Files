function createUser({ name: string, age: number }) {}

// createUser({ name: "tahir", age: 23, email: "tahir@google.dev" }); // Here it will not take the extra property email, it will give error.

// But here it will take, without any error, Weird Behaviour
const User = { name: "tahir", age: 23, email: "tahir@google.dev" };
createUser(User);

// Here this function should return an Object
function createCourse(): { name: string; isPaid: boolean } {
  return { name: "FullStack Web Development", isPaid: true };
}

console.log(createCourse());

// ---- Type Aliases ----
type User = {
  name: string;
  email: string;
  age: number;
  isLearningDaily: boolean;
};

// Here we modified the boolean into bool, this is possible using type Aliases
type bool = boolean;

// The benifit of of writing type User alias, Imagine passing 15 property inside the function parameter of separate it pass a single variable. (More clean and readable code)
function verifyUser(user: User): User {
  console.log(user.name);
  return {
    name: "tahir",
    email: "tahir@gmail.dev",
    age: 23,
    isLearningDaily: true,
  };
}

verifyUser({
  name: "tahir",
  email: "tahir@gmail.dev",
  age: 23,
  isLearningDaily: true,
});

type employee = {
  readonly _id: number; // Once defined, this property can't be modified
  name: string;
  email: string;
  age: number;
  creditCardDetails?: number; // This is property is completely optional
};

let myEmployee: employee = {
  _id: 728,
  name: "Jawed",
  email: "jawed@lol.dev",
  age: 22,
};

// myEmployee._id = 2839 // Cannot assign to '_id' because it is a read-only property
myEmployee.email = "ana@google.dev";

type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: string;
  };

export {};
