// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

console.log("*** Exercise 1");
console.log("Exercise 1 -  while loop");


let i = 1;
while (i <=5){
  console.log(i);
  i ++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("\n*** Exercise 2");
console.log("Exercise 2 - do while loop");


let j = 1;
do{
  console.log(j);
  j++;}
  while(j <= 5);


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

console.log("\n*** Exercise 3");
console.log("Exercise 3 - for loop");


for(let i = 0; i <= 5; i++){
  console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log("\n*** Exercise 4");
console.log("Exercise 4 - while loop");

let k = 10;
while (k >= 1){
  console.log(k);
  k--;
}
console.log("Exercise 4 - do while loop");

let l = 10;
do{
  console.log(l);
  l--;
}while (l >= 1);
console.log("Exercise 4 - for loop");

for (let i = 10; i >= 1; i--){
  console.log(i);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

console.log("\n*** Exercise 5");

console.log("Exercise 5 - while loop");
let intWhileLoop = 7;

while(intWhileLoop <= 27){
  console.log(intWhileLoop);
  intWhileLoop ++;
}

console.log("Exercise 5 - do while loop");

let intDoLoop = 7;

do{
  console.log(intDoLoop);
  intDoLoop ++;
} while(intDoLoop <= 27);

console.log("Exercise 5 - for loop");

for(let i = 7; i <= 27; i++){
  console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

console.log("\n*** Exercise 6");
console.log("Exercise 6 - while loop");

let countByTenWhile = 0;

while(countByTenWhile <= 100){
  console.log(countByTenWhile);
  countByTenWhile += 10; 
}
console.log("Exercise 6 - do while loop");

let countByTenDo = 0;
do{
  console.log(countByTenDo);
  countByTenDo += 10;
} while (countByTenDo <= 100);

console.log("Exercise 6 - for loop");

for(i = 0; i <= 100; i += 10){
  console.log(i);
}


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// This is an infinite loop because the condition is set to excute for as long as the number is 
// less than 2.  However, since the number decriments and not incriments, it will perpetually go
// lower than two (it even started lower than 2).

console.log("\n*** Exercise 7");

let counterFour = 1;
while (counterFour > -2) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

console.log("\n*** Exercise 8");

let favInt = 8;

for(let i = 0; i <= favInt; i++){
  console.log(i);
}


// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

console.log("\n*** Exercise 9");
for(let i = 0; i <= 100; i++){
  if(i === favInt){
    console.log(i + " my favorite number!");
  } else{
    console.log(i + " not my favorite number");
  }
}


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//
console.log("\n*** Exercise 10");
console.log("Exercise 10 -  use of different loops explained in comments");
//I know the distinction between the while and the do while loop is
//if you are sure you want the code to be run at least one time prior to 
//even evaluation, that can be assured by employing the Do While Loop instead of the While.
//the distinction between the for loop and the other two may have to do with when the variable for
//the codition is initialized (either inside or outside the loop).  I like the for loop because it feels
// easier to read.l


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

console.log("\n*** Exercise 11");
console.log("Exercise 11 - Nested Loop Practice");


/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter-- ) {
    console.log("inside " + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//
// I found this really useful practice to drill the loops.  I definitely am still struggling with nested loops.

// Email your file to us or commit your file to GitHub and email us a link.