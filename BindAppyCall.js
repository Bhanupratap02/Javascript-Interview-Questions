/** @format */

//! Question One - fix this
function checkPassword(password, sucess, failed) {
  if (password === "sachin") sucess();
  else failed();
}

const user = {
  name: "sachin",
  age: 25,
  password: "sachin",
  loginSuccess() {
    console.log("Login Success", this.name);
  },
  loginFailed() {
    console.log("Login Failed", this.name);
  },
};

// checkPassword(
//   user.password,
//   user.loginSuccess.bind(user),
//   user.loginFailed.bind(user)
// );

//! Question two
const user2 = {
  name: "sachin",
  password: "sachin",
  login(result) {
    console.log(this.name + " " + (result ? "login success" : "login Failed"));
  },
};
// checkPassword(
//   user2.password,
//   () => user2.login.call(user2, true),
//   () => user2.login.call(user2, false)
// );
// checkPassword(
//   user2.password,
//   user2.login.bind(user2, true),
//   user2.login.bind(user2, false)
// );

//! Question three(explicit bind with arrow function)
const age = 20;
var person = {
  name: "sachin",
  age: 21,
  getAge() {
    console.log(this.age);
  },
  getAgeArrow: () => {
    console.log(this.age);
  },
};
var person2 = { age: 23 };
// person.getAge.call(person2) //23
// person.getAgeArrow.call(person2) //undefined

// !  Question four - Pollyfill for Call Method

let car = {
  color: "red",
  brand: "ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `i purchase a ${this.color} car of ${this.brand} for ${currency}${price}`
  );
}
// purchaseCar.call(car,"$","500000")

// purchase belongs Function prototype
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }
  context.fn = this;
  const result = context.fn(...args);
  return result;
};
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not callable");
  }
  if (!Array.isArray(args)) {
    throw new Error("arguments must be an array");
  }
  context.fn = this;
  const result = context.fn(...args);
  return result;
};
Function.prototype.myBind = function (context = {}, ...args) {
  context.fn = this;
  return function (...args2) {
    const result = context.fn(...args,...args)
    return result
  };
};
// purchaseCar.myCall(car,"$","5000000")
purchaseCar.myBind(car, "$")("5000000");
// 
// purchaseCar.myApply(car, ["$", "5000000"])
// car.myCall()

// question: Guess the output
const status = "hii";
// setTimeout(function(){
//   const status = "hello"
//   const data ={
//     status:"bye",
//     getStatus(){
//       return this.status
//     }
//   }
//   console.log(data.getStatus())//bye
//    console.log(data.getStatus.call(this));//undefined in node console and hii in browser
// },0)

//! Question Append an array to another array(without concate)
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// arr1.push(...arr2);
// const arr3 = arr1.concat(arr2)
// const arr3 = arr1.concat(6,7,8)
//  arr1.push(arr2)
//  const arr4 = arr1.flat()
// arr1.push.apply(arr1,arr2)
//  console.log(arr1) // [1, 2, 3, 4, 5,6]

//! Question:Using apply to enhance built in functions
//! Find min/max number in an array
const numbers = [4, 2, 9, 6, 5, 7, 86, 1];
// * using spread
const max = Math.max(...numbers);
const min = Math.min(...numbers);
//* using apply
// const max = Math.max.apply(null, numbers)
// const min = Math.min.apply(null, numbers)
// console.log(min,max)
