let value = "SayMyname";

let names = ["Tahir", "Badal", "Chan"];

let power = {
  Tahir: "Responsible",
  Badal: "Physically Strong",
  Chan: "Intelligent",

  getBadal: function () {
    console.log(`Badal speciality ${this.Badal}`);
  },
};

// power.getBadal();

// 1) Create a functionality which will be availabe to all objects of JS

Object.prototype.tahir = function () {
  console.log(`Tahir is present in all objects`);
};

// names.tahir();
// power.tahir();
// value.tahir();

// 2) Create a functionality only for arrays

Array.prototype.Badal = function () {
  console.log(`Hey Badal is here`);
};

// names.Badal();
// It is not accessible another objects.
// power.Badal();

// 3) Inheritance

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
  // A) Inherit all the properties of Teacher
  __proto__: Teacher,
};

// console.log(TASupport.makeVideo);
// console.log(TASupport.TName);

// B) Another Way -> Now Teacher will inherit all the properties of user
Teacher.__proto__ = user;

// console.log(Teacher.UserName);
// console.log(Teacher.UserEmail);

// C) Modern Syntax of inheritance -> TeachingSupport will inherit all properties of user.
Object.setPrototypeOf(TeachingSupport, user);

// console.log(TeachingSupport.UserName);
// console.log(TeachingSupport.UserEmail);
// console.log(user.isAvailable);

let normalUser = "Rama   ";
let normalUser2 = "Shayama  ";

// Create Object functionality for string which gives actual length of the string

String.prototype.actualLen = function () {
  console.log(`${this}`);
  console.log(`Actual string length is ${this.trim().length}`);
};

// normalUser.actualLen();
// normalUser2.actualLen();
// "Mera Naam  ".actualLen();
