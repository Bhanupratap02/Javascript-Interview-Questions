/** @format */

const counter = {
  max: 11,
  value: 0,
  next() {
    return {
      value: this.value++,
      done: this.value >= this.max,
    };
  },
  [Symbol.iterator]() {
    return this;
  },
};

// let next;
// do {
//   next = counter.next();
//   console.log(next.value);
// } while (!next.done);
for (iter of counter) {
  console.log(iter);
}
// console.log(counter.next());
// console.log(counter.next());

function* fibGenerator(max = 100) {
  let a = 0;
  let b = 1;
  while (true) {
    let c = a + b;
    if (c >= max) {
      break;
    }
    yield c;
    a = b;
    b = c;
  }
}
const iter2 = fibGenerator(200);

console.log(iter2.next());
console.log(iter2.next());
for(const val of iter2){
    console.log(val)
}
