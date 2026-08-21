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

/**
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
 */

// Extending interfaces
interface User{
  name: string,
  age: number,
  password:string,
  gender?:string 
}

interface Admin extends User{
  admin: boolean;
}

function getUserData(obj:User){
  console.log(obj.name) // only name and age and password can be accessed here
}

function getAdminData(obj:Admin){
  console.log(obj.admin) //  we can access admin property here as well as name and age and password
}


// Fundamentals of type Aliases

type shankiya = number;

let a:shankiya = 12; // here we are using type alias shankiya to define the type of a as number

// best example of type alias is union types
type value = string | number | boolean;
let b : value; // iss ki help se jada complex types ko define kar sakte h

// union types
let c : string | number; // here we are defining a as a union type of string and number

// intersection types
type User1 = {
  name: string,
  age: number,
}

type Admin1 = User1 &{
  getDetail(user:string):void;
}

function abdc(a:Admin1){
  console.log(a.name);
  console.log(a.age);
  a.getDetail("dhruva");
}


// Class and  Object 
// class definition
// Constructors
// Access Modifiers (public , private , protected) 
// Readonly properties  
// Optional properties
// Parameter properties
// Getter and Setter methods
// static methods
// abstract classes and methods
 
class Bottle{
  constructor(public name:string , public price:number)
  {
    this.name = name;
    this.price = price;
  }
}

let b1 = new Bottle("Milton" , 1200); // here we are creating an object of class Bottle and passing the parameters to the constructor
let b2 = new Bottle("Coca Cola" , 50);