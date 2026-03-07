/** @format */

// 1. this is the normal way to do;
// Greating function define
function Greating(name: string, id: number) {
  console.log(`hello ${name} your welcome in GoldMan sach your id is ${id}`);
}

// function call;
Greating("Dhruva Maheshwari", 4);

// 2. Now use the arrow function
const Greating_Arrow = (name: string, id: number) => {
  console.log(`hello ${name} your welcome in GoldMan sach your id is ${id}`);
};
Greating_Arrow("Dhruva Maheshwari", 4);

// 3. Check the data type of the function
// Greating function define
function Greating_type(name: string, id: number): string {
  return `hello ${name} your welcome in GoldMan sach your id is ${id}`;
}

// function call;
console.log(Greating_type("Dhruva Maheshwari", 4))
