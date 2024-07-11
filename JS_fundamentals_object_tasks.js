//https://javascript.info/object#tasks  4 Tasks.. copy below all 4

// TASK 1:

// Hello, object
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

console.log("TASK 1: Creating objects adding, changing & deleting properies and values");

let user = {};
console.log(user);
user.name = "John";
console.log(user);
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);


// TASK 2:

// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

console.log("\nTASK 2:  ");

function isEmpty(obj){
  for(let key in obj){
    return false;
  } return true;
}

let schedule = {};
console.log(isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule) ); // false


// TASK 3:

// Sum object properties
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

function sumOfValues(obj){   // This function output was "NaN", not sure why.
  let sum = 0;
  for(let key in obj){
    sum += obj[key];
  } return sum;
}

console.log("\nTASK 3:  ");
console.log(sumOfValues(salaries));

let noSalaries = {
}
console.log(sumOfValues(noSalaries));

// TASK 4:

// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

console.log("\nTASK 4:  ");

function multiplyNumeric(obj){
  for(let key in obj){
    if(typeof obj[key] == "number"){
      obj[key] *= 2;
    }
  } return obj;
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));