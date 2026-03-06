/** @format */

//Q1: write a TypeScript function called isDivisibZeBy 4 And 8 that
// takes a number as a parameter and returns true if the number is divisible by
// both 4 and 8.

// sol:
function isDivisibZeBy(num: number): boolean {
  if (num % 4 === 0 || num % 8 === 0) return true;
  else return false;
}

console.log(isDivisibZeBy(512));
