/** @format */

/**
// Basic Types

// Primitve types (number , string , boolean)
let a = 12;

// array
let arr = [1, 2, 2, "name"];

// tuples
let tuple: [string, number] = ["dhruva", 4];

// Enums
enum UserRole {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}

// any , unknown , void , NUll , undefinded , never
let b: any; // define the type
b = 3;
b = "name";
// simple any ka mtld type script off ho jati  h


let c: unknown;
c = 12;
c = "dhruva";

if (typeof c == "string") c.toUpperCase(); // this is called type narrowing



function adcd():void{  // jab koi fun. bano ge to usa reutn type batana pde ga like (void , boolen , number)
    console.log('this fun. does not return any thing')
}
 */

/**
// Type ingerence

// understanding type inference 
let a = 12; // type script automatically infers the type of a as number
// type annotations
let b : number = 12; // here we are explicitly defining the type of b as number
 */

// Intersection and Type Aliases

// Defining intersection 
// Using interfaces to define object shapes
// Exteding interfaces
// type aliases
// Intersection types 


// interface uss object ki shakal h
interface User{
  name: string,
  age: number,
  password:string,
  gender?:string // optional property (idko dediya to theek nhi diya to theek)
}

function getDataOfUser(obj : User){
  console.log(obj.age);
}

getDataOfUser({name:"dhruva",age:12,password:"1234"})
