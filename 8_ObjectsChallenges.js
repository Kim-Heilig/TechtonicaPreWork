// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

console.log("*** Exercise 1");
// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []

// console.log(Object.keys(obj)); Instructed not to use this way

function keys(obj){
  let arrOfObjKeys = [];
  for(let key in obj){
    arrOfObjKeys.push(key);
  }return arrOfObjKeys;
}

console.log("\n    Test case 1");
let obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]
console.log("    Test case 2");
let obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]
console.log("    Test case 3");
let obj3 = {};
console.log(keys(obj3)); // []


console.log("\n*** Exercise 2");
// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []

function values(obj){
  let arrayOfValues = [];
  for(let key in obj){
    arrayOfValues.push(obj[key]);  // this does not work: obj.key (key notation)
  }return arrayOfValues;
}
console.log("\n    Test case 1");
let objEx2 = { a: 1, b: 2, c: 3 };
console.log(values(objEx2)); // [1,2,3]

console.log("    Test case 2");
let obj2Ex2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(values(obj2Ex2)); // ["Matt", "Lane", true]

console.log("    Test case 3");
let obj3Ex2 = {};
console.log(values(obj3Ex2)); // []




console.log("\n*** Exercise 3");
// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); 
// []



function entries(obj){
  let arrayOfArrays = [];

  for(let key in obj){
    if(obj.hasOwnProperty(key)){            // this was a hard one for me and I'm really not confident with this method.  I got most of the
    arrayOfArrays.push([key, obj[key]]);  // exercise logic without help, but wasn't able to get there alone with this problem.
    }
  } return arrayOfArrays;
}


console.log("\n    Test case 1");
let obj1Ex3 = { a: 1, b: 2, c: 3 };
console.log(entries(obj1Ex3));  
// // expected return: [["a",1], ["b",2], ["c",3]]
console.log("    Test case 2");

let obj2Ex3 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj2Ex3));
// // expected return [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

console.log("    Test case 3");
let obj3Ex3 = {};
console.log(entries(obj3Ex3)); 
// // expected return[]


console.log("\n*** Exercise 4");
// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]     ???????? shouldn't this have undefined after Elie????????
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

// input: an array of objects & key name
// output: an array that is the list of value associated with object that was passed in.

function pluck(arrayOfObjects, key){
  let newArray = [];
  for(let i = 0; i < arrayOfObjects.length; i++){
    if (key in arrayOfObjects[i]){  // mostly saying if there is (true) a key presented in the passed array of objects.
      newArray.push(arrayOfObjects[i][key]);  // if this is not empty then I want to execute the code block to push the value
    } else {
      newArray.push(undefined);
    }

  }
  return newArray;
}

console.log("\n    Test case 1"); 
console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'));
console.log("   Test case 2");
console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'));

console.log("\n*** Exercise 5");
// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

// input: object
// output: string (in the form of obj[key] + " = " + Object.keys(obj))

function stringFromObject(obj){
  let arrayOfStrings = [];
for(let key in obj){
  arrayOfStrings.push(`${key} = ${obj[key]}`);
  }
  return arrayOfStrings.join(",");
}

console.log("\n    Test case 1"); 
console.log(stringFromObject({ a: 1, b: '2' }));
console.log("   Test case 2");
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
console.log("   Test case 3");
console.log(stringFromObject({}));

console.log("\n*** Exercise 6");

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

// input: an object with keys that are numeric
// output: an array that that has two elements: the lowest key & the highest key.

function minMaxKeyInObject(obj){
  let keys = Object.keys(obj);
  let keysInObject = keys.map(Number)
  let lowestKey = Math.min(...keysInObject);
  let highestKey = Math.max(...keysInObject);
  return [lowestKey, highestKey];
}

console.log("\n    Test case 1"); 
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
console.log("   Test case 2");
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));