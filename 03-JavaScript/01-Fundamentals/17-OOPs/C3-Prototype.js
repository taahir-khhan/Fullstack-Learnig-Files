let value = "SayMyname";
let names = ["Tahir", "Badal", "Chan"];
let power = {
  Tahir: "Responsible",
  Badal: "Physically Strong",
  Chan: "Intelligent",
  getBadal: function () {
    console.log(`Badal speciality ${this.Badal} \n`);
  },
};

power.getBadal();

// ========== New functionality for all JS Objects ==========
Object.prototype.tahir = function () {
  console.log(`Tahir is present in all objects`);
};

// Checking different object have access to tahir() or not
names.tahir();
power.tahir();
value.tahir();

// ========== Create a functionality only for arrays, which is availabe to only array objects ==========
Array.prototype.Badal = function () {
  console.log(`\n Hey Badal is here \n`);
};

names.Badal();

// ========== Inheritance ==========
const user = {
  UserName: "Learning",
  UserEmail: "learning@google.com",
};

const Teacher = {
  makeVideo: false,
  TName: "Milan Mam",
};

const TeachingSupport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "Learning assignment",
  fullTime: true,
  //Inherit all the properties of Teacher
  __proto__: Teacher,
};

console.log(TASupport.makeVideo);
console.log(TASupport.TName, "\n");

// ========== Another format (Now Teacher will inherit all the properties of user) ==========
Teacher.__proto__ = user;

console.log(Teacher.UserName);
console.log(Teacher.UserEmail, "\n");

// ========== Modern Syntax of inheritance (TeachingSupport will inherit all properties of user. ==========
Object.setPrototypeOf(TeachingSupport, user);

console.log(TeachingSupport.UserName);
console.log(TeachingSupport.UserEmail);
// user does not have the access to TeachingSupport object
console.log(user.isAvailable, "\n");
