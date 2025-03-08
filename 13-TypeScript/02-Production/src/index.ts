console.log("Typescript is here");

let value = "something is happening";
console.log(value);

class User {
  readonly email: string;
  name: string;
  private age: number;
  constructor(email: string, name: string, age: number) {
    this.email = email;
    this.name = name;
    this.age = age;
  }
}

const hitesh = new User("tahir@google.com", "Tahir", 24);
console.log(hitesh);

class emloyees {
  // Private variable can't be accessible outside the class and also whoever inherit it.
  private _courseCount = 1;

  protected emloyeeCount = 10;

  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  get employeeEmail(): string {
    return `employee${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("course count should be greater than 1");
    }
    this._courseCount = courseNum;
  }
}

const karim = new emloyees("karim@google.com", "Karim", "183913hehaye913");
console.log(karim);
console.log(karim.courseCount);
console.log(karim.employeeEmail);
karim.courseCount = 5;
console.log(karim.courseCount);

class intern extends emloyees {
  isLearningNewThings: boolean = true;
  accessTheEmployeeCount() {
    this.emloyeeCount += 1;
  }
}

const yaminChoudary = new intern(
  "yaminChoudary@google.com",
  "yaminChoudary",
  "373hh73rhau"
);
console.log(yaminChoudary);
