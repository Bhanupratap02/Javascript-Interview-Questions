/** @format */

//* Question 1
// console.log("start");
// const promise1 = new Promise((res, rej) => {
//   console.log(1);
//   res(2);
// });
// promise1.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log("end");
//* start,1,end,2
//* Question 2
// console.log("start");
// const promise1 = new Promise((res, rej) => {
//   console.log(1);
//   res(2);
//   console.log(3);
// });
// promise1.then((res) => console.log(res)).catch((err) => console.log(err));
// console.log("end");
//* start,1,3,end,2

//* Question 2
// console.log("start");
// const promise1 = new Promise((res, rej) => {
//   console.log(1);
//   console.log(3);
// });
// promise1.then((res) => console.log(res)).catch((err) => console.log(err));// it will not go inside the then block as there is not res in promise
// console.log("end");
// // * start,1,3,end

//* Question 4
// console.log("start");
// const promise1 = new Promise((res, rej) => {
//   rej();
// });
// promise1
//   .then(() => console.log("Sucess 1"))
//   .catch(() => console.log("Error 1"))
//   .then(() => console.log("Success 2"));

// console.log("end");
// * start,end,Error 1 , Success 2

// throw is rejected promise and new Error("hello") is resolved promise

// question5
const promise1 = new Promise((res, rej) => {
  res("hello");
});
const promise2 = new Promise((res, rej) => {
  res(promise1);
});

promise2.then((res) => res).then((res2) => console.log(res2));
