// step 0: declare a comment
/*
 step 1: declare multiline comment...
*/
//step 2: compile and run command on terminal: node script01.js


// step 3: declare variables:
/*use keyword: let or var (var is kind of outdated)
const is used to store constant values 
*/

let x = 10;
let y = "20";
console.log(x); // like print function in C/C++/Python/Java
console.log("2x: ", x + x);
console.log(y);
console.log(x + y); //concat


// step 4: declare a const

const m = 20;
//m = m + 10; // error, since we are trying to change the value of a const
console.log(m); // gives error because consts are immutable (cannot be changed after declaration)


// step 5: deal with an array and iteration (for loop)

let good = [10, 20, -50, 300, -18]; // array of ints
let allGood = 0; // constant variable, mutable
for (i = 0; i < good.length; i++) {
  allGood += good[i];
}
console.log("All Good: ", allGood);


/*
step 6: if statement: conditional
*/

if (allGood < 100) {
  console.log("Not good at all");
} else if (allGood >= 100 && allGood < 500) {
  console.log("Okay! Not great");
} else {
  console.log("All great");
}

// step 7: traditional way of defining a function

/*
function sum(a, b) {
  return a + b;
}
commenting this out so the next function dec method works*/
// console.log('Sum of 10 and 30 is: ' + sum(10, 30));

// step 8: anonymous / arrow function expression

let sum = (a, b) => a + b; // arrow function expression
console.log("Sum of 12 and 15 is ", sum(12, 15)); // not sure what this way of doing things is used for?
// if run while function sum is already declared, error: already been defined/declared
// so this is another way of making a function
// and you cannot override a function with a second declaration


let product = (a, b) => a * b; //arrow function expression
console.log("Product of 12 and 5 is ", product(12, 5));



//step 9: declaring objects in JS

 let p = { name: "Germany", foul: 10, cardY: 1, cardR: 1 }; //kind of odd, untyped object declaration
 let q = { name: "France", foul: 10, cardY: 2, cardR: 1 }; // these are team objects I suppose?
 //propertyType function takes a team object as input and
 //checks if the property types are as expected or not.

 function propertyType(team) {
   if (
     typeof team.name === "string" &&
     typeof team.foul === "number" &&
     typeof team.cardY === "number" &&
     typeof team.cardR === "number"
   )
     return true;
   else return false;
 }
 // funny, because JavaScript/Python are so type-loose, you manually make a type-check function
 // to do what the compiler/interpreter would do in a typed language like C++/Java/C#/Go/Rust


/* bestTeam function checks the team inputs (valid format) first,
then it sums up the foul, yellow card and red card properties of each team and 
declares the winner (team who has less fouls+yellow cards + red cards)
*/

 function bestTeam(team1, team2) {
//   // You have to write your code here
   if (typeof team1 !== "object" || typeof team2 !== "object") { // first checks if it's an object in JS
     return "Invalid";
   } else if (!propertyType(team1) || !propertyType(team2)) { // this checks if it's the right type of object/formatted properly
     return "Invalid";
   } else {
     let team1Count = team1.foul + team1.cardR + team1.cardY; // sum the fouls, yellow cards and red cards
     let team2Count = team2.foul + team2.cardR + team2.cardY;
     if (team1Count < team2Count) return team1.name; // winner is whoever has less fouls+cards
     else if (team1Count > team2Count) return team2.name;
     else return "Tie";
   }
 }

 console.log(bestTeam(p, q));

