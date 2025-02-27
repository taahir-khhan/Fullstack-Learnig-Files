interface User {
  readonly userId: number;
  email: string;
  username: string;
  googleId?: string;
  startTrail: () => string; // this way of defining function
  getCoupn(couponName: string, value: number): string; // Also in this way we can define function
}

// Adding more properties into User - also known as reopening of the interface
interface User {
  githubToken: string;
}

// Extending all the features of User
interface Admin extends User {
  role: "admin" | "tl" | "learner";
}

const tahir: User = {
  userId: 121,
  email: "t@t.com",
  githubToken: "718enad831njjea",
  username: "tahirkhan",
  startTrail: () => {
    return "trail started";
  },
  getCoupn: (name: "summer20", off: 20) => {
    // Whatever the bussiness logic, interface doesn't care. But the return type should be defined return type.
    return `This coupon "${name}" is giving ${off}% in our all products`;
  },
};

const bapi: Admin = {
  role: "learner",
  userId: 121,
  email: "t@t.com",
  githubToken: "718enad831njjea",
  username: "tahirkhan",
  startTrail: () => {
    return "trail started";
  },
  getCoupn: (name: "summer20", off: 20) => {
    // Whatever the bussiness logic, interface doesn't care. But the return type should be defined return type.
    return `This coupon "${name}" is giving ${off}% in our all products`;
  },
};

//  --- Difference between Type Aliases & interface ---

// Extending is allowed in both case, type Aliases write some weird code to that. But in interface it is more readable and visible.

// Type Aliases
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};

// Interface
interface AnimalRabbit {
  name: string;
}

interface BearJungle extends AnimalRabbit {
  honey: boolean;
}

// Adding new fields to an existing interface is allowed, But not in case of Type Aliases

interface Window {
  title: string;
}

interface Window {
  ts: number;
}

type MAC = {
  title: string;
};

// type MAC = {
//   ts: number;    Not Allowed
// };

export {};
