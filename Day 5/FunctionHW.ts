/** @format */

// Q2 : Create a function called calculateAverage that takes an array of
//         numbers as a parameter and returns the average of those numbers.

const calculateAverage = (num: number[]): number => {
  let sum: number = 0;
  let size: number = num.length;
  num.map((val: number, ind: number) => (sum += val));
  return sum / size;
};

// this is the way to write the array in the Ts
let arr: number[] = [1, 2, 3, 4, 5];
console.log(calculateAverage(arr));



//  Q3 : Write a function called findMaxValue that takes an array of numbers as
//         a parameter and returns the maximum value in the array.
const findMaxValue = (num: number[]): number => {
  let max_num: number | any = num[0];
  num.map((val: number, ind: number) => {
    if (val > max_num) {
      max_num = val;
    }
  });
  return max_num;
};

let score: number[] = [10, 30, 50, 20, 60];
console.log(findMaxValue(score));
