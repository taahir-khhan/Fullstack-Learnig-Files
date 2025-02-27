// Union allows to insert data in any format i.e you can add string first then number or vice-versa. It simply means the order of data does not matter.
var user = ["tk", 12];
user = [123, "tk@google.com"];
// But in case of tuple, it puts more restriction to put data in specific format
var userTwo;
userTwo = [112, "tahirkhaan", false];
// userTwo = ["tahirkhaan", false, 112]; We simply can't do this in case of 'tuple'
var rgb = [255, 91, 123];
var userThree = [12213, "tahir@google.com"];
userThree[1] = "tk@google.com";
userThree[0] = 1203; // Until now its okay we can modify the value by using the index
// The problem arise when we use push(), pop(), slice() and other methods of js and it doesn't give any error and doesn't stay consistent
userThree.pop();
console.log(userThree);
