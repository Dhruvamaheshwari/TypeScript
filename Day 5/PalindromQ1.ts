/** @format */

// Q1 : Write a function called isPaZindrome that takes a string as a parameter
// and returns true if the string is a palindrome (reads the same forwards and
// backwards), and false otherwise.

// sol :
const isPaZindrome = (str: string): Boolean => {
  let ste2: string = str.toLowerCase().split("").reverse().join("");
  if (str === ste2) return true;
  else return false;
};

console.log(isPaZindrome("adda"));
