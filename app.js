"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
function getUserData(obj) {
    console.log(obj.name); // only name and age and password can be accessed here
}
function getAdminData(obj) {
    console.log(obj.admin); //  we can access admin property here as well as name and age and password
}
let a = 12; // here we are using type alias shankiya to define the type of a as number
let b; // iss ki help se jada complex types ko define kar sakte h
// union types
let c; // here we are defining a as a union type of string and number
function abdc(a) {
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
class Device {
    name = "apple";
    price = 120000;
    category = "laptop";
}
let d1 = new Device();
let d2 = new Device();
