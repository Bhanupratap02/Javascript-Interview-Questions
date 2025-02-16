/** @format */

//* What is Map
//! Map is a array higher order function that  loop over an array and return a new array based the result of the callback back function of each iteration
//! that means it takes callback fn as an argument and return an new array based on result of the callback function of each iteration

//Todo: pollyfill for map

Array.prototype.myMap = function (cb) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    resultArray[i] = cb(this[i], i, this);
  }

  return resultArray;
};
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArr = arr.myMap((item, index, array) => item * 2);
// console.log(newArr);

//* What is Filter
//! Map is a array higher order function that  loop over an array and returns only elements from the given array that matches with the condition in callback fn that it takes as an argument
//! that means it takes callback and runs the callback for each element of the given array.It returns only elements of the given array that mactches with the condition in the callback fn

//Todo:pollyfill for Filter
Array.prototype.myFilter = function (cb) {
  let resultArray = [];
  for (let i = 0; i < this.length; i++) {
    const result = cb(this[i], i, this);
    if (result) {
      resultArray.push(this[i]);
    }
  }
  return resultArray;
};
// const filteredArr = arr.myFilter((item) => (item % 2 === 0 ? item : null));
// console.log(filteredArr);

//*What is Reduce
//! Reduce is an array higher order function that loop over an array and returns a single  accumulated value based operation in callback fn for each iteration.
//! that means it loop over an array and returns a single value from result of callback function it takes as an argument
// the callback function takes acc,curr value,index and array.acc is the result of previos iteration,initialy it is 0 but we also can provide a custum value for acc in the reduce mathod after the callback fn.
// the curr value value of the current iteration

Array.prototype.myReduce = function (cb, acc = 0) {
  for (let i = 0; i < this.length; i++) {
    const result = cb(acc, this[i], i, this);
    acc = result;
  }
  return acc;
};

arr = [1, 2, 3];
const newArr = arr.myReduce((acc, currVal) => acc * currVal, 1);
// console.log(newArr); //6

//! ForEach vs Map
// both are array functios that is used to loop over an array
// forEach doesn't return anything but map returns a new array based result of the callback of each iteration
// we can chain fn like filter with map

//!Questions related to map,filter,reduce

let arr2 = [
  { name: "Ram", rollNo: 12, marks: 40 },
  { name: "Sami", rollNo: 42, marks: 38 },
  { name: "Kamya", rollNo: 34, marks: 79 },
  { name: "Kumar", rollNo: 78, marks: 89 },
];

let newArr2 = arr2.map((item)=>item.name.toUpperCase())
console.log(newArr2,"uppercase")
let students = arr2.filter((item) => item.marks > 60);
console.log(students,"students more than 60mark");
