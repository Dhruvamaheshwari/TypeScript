/** @format */

// 0. Normal fun:
const Greet_normal = (name: string, id: number): string => {
  return `hello ${name} and your id is ${id}`;
};

console.log(Greet_normal("dhruva", 1));

// 1. Default parameter
const Greet_default = (name: string, id: number = 4): string => {
  return `hello ${name} and your id is ${id}`;
};

console.log(Greet_default("dhruva"));

// 2. Opetional parameter
const Greet_opetinal = (name: string, id?: number): string => {
  if (!id) return `hello ${name}`;
  else return `hello ${name} and your id is ${id}`;
};

console.log(Greet_opetinal("dhruva"));
console.log(Greet_opetinal("dhruva", 22));

