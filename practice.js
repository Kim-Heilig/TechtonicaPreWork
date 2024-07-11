console.log("Exercise 1");

function logGreeting(){
  console.log("Hello!");
}

logGreeting();
// *********************************************************
console.log("Exercise 2");

function getName(name){
  return name;
}

console.log(getName("Kim"));


// *********************************************************
console.log("Exercise 4");

function sumOfParameters(x, y, z){
  return x + y + z;
}

console.log(sumOfParameters(5, 10, 20));
console.log(sumOfParameters(5, -200, 20));
console.log(sumOfParameters(5, 10, 200));

// *********************************************************
console.log("Exercise 5");

function getDiscount(age){
  if(age <= 14 || age >= 65){
    return true;
  } return false;
}

console.log(getDiscount(5));
console.log(getDiscount(20));
console.log(getDiscount(65));

// *********************************************************

console.log("Exercise 6");

function printStringNum(str, num){
for(let i = 0; i < num; i++){
  console.log(str);
  }
}

printStringNum("hello", 4);
printStringNum("repeat me three times", 3);
printStringNum("don't repeat", 1);