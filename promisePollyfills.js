/** @format */

// /** @format */

// function PromisePollyFill(cb) {
//   let response;
//   function resolve(val) {
//     response = { type: "fulfilled", result: val };
//   }
//   function reject(err) {
//     response = { type: "failed", error: err };
//   }

//   this.then = function (thenCb) {
//     if (response.type === "fulfilled") {
//       return queueMicrotask(() => thenCb(response.result));
//     }
//     return this;
//   };
//   this.catch = function (catchCb) {
//     if (response.type === "failed") {
//       return queueMicrotask(() => catchCb(response.error));
//     }
//     return this;
//   };
//   try {
//     cb(resolve, reject);
//   } catch (error) {
//     reject(error);
//   }
// }

// setTimeout(() => console.log("start timeout"), 0);
// const myPromise1 = new PromisePollyFill((res, rej) => {
//   setTimeout(() => {
//     rej("Rejected my own promise");
//   }, 10);

//   console.log("mid");
// });

// myPromise1.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log("end");
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
    setTimeout(() => res("i had" + " " + food), 100);
  });
};
const greeting4 = (msg) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(msg), 100);
  });
};

// takes an arr of promies as an input and returns a single promise that contains/resolves an array of results of input promises.
// if any of the input promise get rejected then then returned promises get rejected.
Promise.myAll = function (arr) {
  const result = [];
  return new Promise((resolve, reject) => {
    arr.forEach((item) => {
      item
        .then((res) => {
          result.push(res);
          if (result.length === arr.length) {
            return resolve(result);
          }
        })
        .catch((err) => {
          return reject(err);
        });
    });
  });
};

// takes an array of promise and returns the first promise that resolves or rejcts
// Promise.myRace = function (promises) {
//   return new Promise((resolve, reject) => {
//     promises.forEach((item) => {
//       item
//         .then((res) => {
//           return resolve(res);
//         })
//         .catch((err) => {
//           return reject(err);
//         });
//     });
//   });
// };
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item) => {
      item
        .then(resolve)
        .catch(reject);
    });
  });
};
// it takes an array of promies and returns a promise with thier coutcome status.
// it is returns all failed and fulfilled promises as an array of promise

//The Promise.allSettled() method returns a promise that fulfills after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

// It is used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

Promise.myAllSettled = function (promises) {
  
};

Promise.myAny = function () {};
// Promise.myAll([
//   greeting("sachin"),
//   greeting2("What you had in lunch today?"),
//   greeting3("Biriyani"),
//   greeting4("What about you ?"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error", err));

Promise.myRace([
  greeting("sachin"),
  greeting2("What you had in lunch today?"),
  greeting3("Biriyani"),
  greeting4("What about you ?"),
])
  .then((res) => console.log(res))
  .catch((err) => console.log("Error", err));
