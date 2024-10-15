
const myMap = new Map();

myMap.set('a', 0)                    // Set (key, value) in map
myMap.set('b', 'Aloo')
myMap.set('c', 5)


console.log(myMap);                  // Print the whole map
console.log(myMap.get('a'));         // What is the value of this key ?
console.log(myMap.has('c'));         // Check if this key is present or not ?

console.log(myMap.size);
myMap.delete('b')                   // Delete the key 'b'

console.log(myMap);