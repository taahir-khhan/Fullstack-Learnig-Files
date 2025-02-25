function createUser({ name: string, age: number }) {}

// Here it will not take the extra property email, it will give error.
// createUser({ name: "tahir", age: 23, email: "tahir@google.dev" });

// But here it will take, without any error, Weird Behaviour
const User = { name: "tahir", age: 23, email: "tahir@google.dev" };
createUser(User);

// Here this function should return an Object with this defined format
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

// The benifit of of writing type User alias, Imagine passing 15 property inside the function parameter or separate it pass a single variable. (More clean and readable code)
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
  name: "Shoyeb",
  email: "shoyeb@gmail.dev",
  age: 25,
  isLearningDaily: false,
});

type employee = {
  readonly _id: number; // Once defined readonly, this property can't be modified once initialized.
  name: string;
  email: string;
  age: number;
  creditCardDetails?: number; // This property is completely optional, Due to '?' this symbol.
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
