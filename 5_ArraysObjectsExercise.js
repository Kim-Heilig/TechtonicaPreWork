// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

console.log("*** Exercise 1 - empty array declared, nothing to log to the console.");
// Exercise 1. Make an empty array named animals

  let animals = [];

console.log("\n*** Exercise 2: adding an element to the array using push");
// Exercise 2. Add the string "frog" to the array

animals.push("frog");
console.log(animals);

console.log("\n*** Exercise 3: adding multiple elements to the end of the array using push method");
// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals.push("snake", "bat", "axolotl", "naked mole-rat" )
console.log(animals);

console.log("\n*** Exercise 4: adding an element to the beginning of an array using unshift method");
// Exercise 4. Update the first item in the array to be "gorilla"

animals.unshift("gorilla");
console.log(animals);

console.log("\n*** Exercise 5: number of elements in the array");
// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

console.log(animals.length);

console.log("\n*** Exercise 6: print the first item in an array with console.log and index");
// Exercise 6. Print the first item in the array

console.log(animals[0]);

console.log("\n*** Exercise 7: print the last item in array using the length of array to determine the last indexed item");
// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

console.log(animals[animals.length - 1]);

console.log("\n*** Exercise 8: Remove the last item from the array");
// Exercise 8. Remove the last item from the array

animals.pop();
console.log(animals);

console.log("\n*** Exercise 9:  an array with 3 strings and 3 numbers");
// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

let assortedThings = ["string1", "string2", "string3", 1, 2, 3];
console.log(assortedThings);

console.log("\n*** Exercise 10: print out each item line by line with a loop");
// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

for(let i = 0; i < assortedThings.length; i++){
  console.log("Item #" + i + " is " + assortedThings[i]);
}

console.log("\n*** Exercise 11: describing the size of the array numbers, I wanted practice using a switch, so I decided not to use the simpler if/else statements");
// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function describeNumInArray(arrOfNum){
  let message = '';
  for(let i = 0; i < arrOfNum.length; i++){
    switch(true){
      case arrOfNum[i] > 100:
        message = " BIG";
        break;
      case arrOfNum[i] < 0:
        message = " negative";
        break;
      default:
        message = " small";
    } console.log(arrOfNum[i] + message)
    } ;
  }

  describeNumInArray([100, -1, 2]);
  describeNumInArray([10980, 7, 0]);


console.log("\n*** Exercise 12: create an object with 3 keys");
// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

let me ={
  name: "Kim",
  favoriteAnimal: "dog",
  favoriteNumber: 8
}

console.log(me);

console.log("\n*** Exercise 13");
// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

me.numOfKids = 2;
me.state = "NJ";

console.log(me);

console.log("\n*** Exercise 14");
// Exercise 14. Update the favoriteAnimal value to something different

me.favoriteAnimal = "rat";
console.log(me);

console.log("\n*** Exercise 15");
// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.

console.log(me.favoriteAnimal);
console.log(me['favoriteAnimal']);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.

// These were excellent exercises and I needed the practice.  The concepts were easy, but I did not yet
// remember the syntax.  I have found that asking chatGPT questions I would typically google provides the best
// most direct launch.  I asked chatGPT questions on syntax, then applied the examples given.  I also find additional
// answers on google with w3schools
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.