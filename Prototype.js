/** @format */

// TODO: GOAL is to understand first how prototype works and do some question
//* JavaScript, a prototype is a foundational concept that enables objects to inherit properties and methods from one another. Every JavaScript object has an internal link to another object called its prototype. This prototype object can have its own prototype, forming a chain known as the prototype chain. The final link in this chain is the built-in Object.prototype, which has null as its prototype.
// ! Add to method sachin()  to prototype of Object,so we can use it with every object

Object.prototype.sachin = function () {
  console.log("Sachin,this is example of prototype");
};

let heros = ["thor", "hulk", "homelander"];
let heroPowers = {
  thor: "Mjolnir",
  hulk: "Super Strength",
  homelander: "Heat Vision",
};
// heroPowers.sachin()
// heros.sachin()

Array.prototype.heySachin = function () {
  console.log("Hey Sachin, this is example of  prototype");
};
// heros.heySachin(); //it will print in the console beuase its an array

// heroPowers.heySachin()//it will give an error heySachin is not a function because its and object and heySachin is prototype method of array

//! Inheritance
// ! Inheritance is a mechanism/process in which one object can inherit/access properties from another object

const User = {
  name: "Sachin",
  email: "sachin@example.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Interview Prep",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

// console.log(TASupport.__proto__)

//TODO: add prototype method called trueLength that will print true length of a string

let username = "Sachin@developer    "
String.prototype.trueLength = function(){
  console.log(this); //Sachin@developer
  console.log(`true length of ${this} is ${this.trim().length} `);
}
username.trueLength() // it will print true length of the string