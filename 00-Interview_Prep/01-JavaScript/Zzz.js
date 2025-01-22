function check() {
  console.log(this, this.name);
}

const others = {
  name: "Khan",
};

const someObj = {
  name: "Tahir",
  func: check.bind(others),
};

someObj.func();
