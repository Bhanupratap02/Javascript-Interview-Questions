/** @format */

// /** @format */ require('./myModule');
// import {fn} from "./questions.js"
// fn()
// // Promise in js
// //* is a special object that represents the eventual completion of an async operation and its value.promise has three states initially pending then fullfilled or rejected based the operation.

// //* Promise class is used with new keyword to to create a promise.the class takes a callback which receives resolve fn and reject fn as arguments.on calling resolve the promise will be fullfilled and on call reject the promise will be failed.

// //* Example

// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const test = new Promise((resolve, reject) => {
//   // resolve("Promise is resolved");
//   // reject("Promise is rejected");
//   btn1.addEventListener("click", () =>
//     resolve("Promise fullfilled because you click the right btn")
//   );
//   btn2.addEventListener("click", () =>
//     reject("Promise failed because you click the wrong btn")
//   );
// });
// test.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log(test);

// // console.log(Promise.resolve("Promise with initailly fulfilled state"))

// // const test2 = Promise.resolve("Promise with initailly fulfilled state");
// const test2 = Promise.reject("Promise with initailly reject state");
// test2.then((res) => console.log(res)).catch((err) => console.log(err));

// const greeting = (name, cb) =>
//   setTimeout(() => {
//     cb("hii" + " " + name);
//   }, 100);
// const greeting2 = (msg, cb) => {
//   setTimeout(() => cb(msg), 10);
// };
// const greeting3 = (food, cb) => {
//   setTimeout(() => cb("i had" + " " + food), 0);
// };
// const greeting4 = (msg, cb) => {
//   setTimeout(() => cb(msg), 0);
// };
// greeting("sachin", (msg) => {
//   console.log(msg);
//   greeting2("What you had in lunch today?", (msg) => {
//     console.log(msg);
//     greeting3("Biriyani", (msg) => {
//       console.log(msg);
//       greeting4("What about you?", (msg) => {
//         console.log(msg);
//       });
//     });
//   });
// });

const greeting = (name) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res("hii" + " " + name);
    }, 100);
  });

const greeting2 = (msg) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(msg), 100);
  });
};
const greeting3 = (food) => {
  return new Promise((res, rej) => {
    setTimeout(() => rej("i had" + " " + food), 100);
  });
};
const greeting4 = (msg) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(msg), 100);
  });
};

// greeting("sachin")
//   .then((res) => {
//     console.log(res);
//     return greeting2("What you had in lunch today?");
//   })
//   .then((res) => {
//     console.log(res);
//     return greeting3("Biriyani");
//   })
//   .then((res) => {
//     console.log(res);
//     return greeting4("What about you ?");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

//* Promise combinators:takes an array of promise as input and return a promsie that resolves or rejects all promises based on your outcome of input promises
//*
//* Promise.all() : takes an array of promise as input, exute then parally and returns a single promise that resolves or rejects based on your input promises.
//* if any of the promise fails from the input array then the returned promise get rejected.

console.log(
  Promise.all([
    greeting("sachin"),
    greeting2("What you had in lunch today?"),
    greeting3("Biriyani"),
    greeting4("What about you ?"),
  ])
)


// takes an array of promise and returns the first promise that resolves or rejcts
// Promise.race([
//   greeting("sachin"),
//   greeting2("What you had in lunch today?"),
//   greeting3("Biriyani"),
//   greeting4("What about you ?"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// it takes an array of promies and returns a promise with thier coutcome status.
// it is returns all failed and fulfilled promises as an array of promise
// Promise.allSettled([
//   greeting("sachin"),
//   greeting2("What you had in lunch today?"),
//   greeting3("Biriyani"),
//   greeting4("What about you ?"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

/*

(4) [{…}, {…}, {…}, {…}]
0
: 
{status: 'fulfilled', value: 'hii sachin'}
1
: 
status
: 
"fulfilled"
value
: 
"What you had in lunch today?"
[[Prototype]]
: 
Object
2
: 
{status: 'fulfilled', value: 'i had Biriyani'}
3
: 
{status: 'rejected', reason: 'What about you ?'}
length
: 
4 */

// it returns the first promise that get resolved or it only retuns the first fullfilled promise and ignore all the rejected one
// if all promise fails it gives an error:AggregateError: All promises were rejected.
//   Promise.any([
//     greeting("sachin"),
//     greeting2("What you had in lunch today?"),
//     greeting3("Biriyani"),
//     greeting4("What about you ?"),
//   ])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// const result = async () => {
//   try {
//     const r1 = await greeting("sachin");
//     console.log(r1);
//     const r2 = await greeting2("What you had in lunch today?");
//     console.log(r2);
//     const r3 = await greeting3("Biriyani");
//     console.log(r3);
//     const r4 = await greeting4("What about you ?");
//     console.log(r4);
//   } catch (error) {
//     console.error("error", error);
//   }
// };
// result();

// function PromiseRec(promiseArr) {
//   if (promiseArr.length === 0) return;
//   const currentPromise = promiseArr.shift();
//   currentPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
//   PromiseRec(promiseArr);

// }
// PromiseRec([
//   greeting("sachin"),
//   greeting2("What you had in lunch today?"),
//   greeting3("Biriyani"),
//   greeting4("What about you ?"),
// ])

