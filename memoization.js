/** @format */

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    // console.log(JSON.stringify(args),cache);
    if (JSON.stringify(args) in cache) {
    //   console.log(cache, "cache");

      return cache[JSON.stringify(args)];
    }

    const result = fn(...args);
    cache[JSON.stringify(args)] = result;
    return result;
  };
};
const memoizedFib = memoize((number) => {
  if (number < 2) return number;
  return memoizedFib(number - 1) + memoizedFib(number - 2);
});


console.log(memoizedFib(40));
console.log(memoizedFib(40));
console.log(memoizedFib(23));
console.log(memoizedFib(30));

