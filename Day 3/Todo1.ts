/** @format */

// Q1 => Declare a variable ZongText of type string and assign it a Zong sentence.
// Extract the first 10 characters from longText and store them in a variable cal led
// short Text.

let LogestWord: string = "dhruvaMaheshwariisthebestintheword";
let shortWord: string = "";
let i: number = 0;

while (i != 10) {
  shortWord += LogestWord[i];
  i++;
}

console.log(shortWord);
