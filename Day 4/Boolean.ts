/** @format */

// let isMyname : boolean = true;
// let is_done : boolean = false;
// is_done = "yes" // this is valid Js code but not valis in Ts

//! Question: Check Even Number
// Write a TypeScript function called isEven that takes a number as a
// parameter and returns true if the number is even and false otherwise.

//todo   Sol;
function isEven(num: number): boolean {
  if (num % 2 === 0) return true;
  else return false;
}

console.log("this is the even number : " + isEven(5));
