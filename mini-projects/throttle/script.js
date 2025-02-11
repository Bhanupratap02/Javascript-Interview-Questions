/** @format */

const btn = document.querySelector("#btn");
const eCount = document.querySelector("#event-count");
const fcCount = document.querySelector("#fc-count");
let ecount = 0;
let fcount = 0;
function throttle(fn, delay) {
  let isThrottled = false;
  let savedArgs = null;
  return (...args) => {
    savedArgs = args; // Always save the latest args
    if (isThrottled) return;
    // Execute immediately on the first call
    fn(...savedArgs);
    isThrottled = true;
    // Reset the throttle after the delay
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}
// leading + trailing edge execution
function advanceThrottle(fn, delay) {
  let isThrottled = false;
  let savedArgs = null;

  function wrapper() {
    if (isThrottled) {
      // Save the latest args during throttling
      savedArgs = arguments;
      return;
    }

    // Execute immediately on the first call
    fn.apply(this, arguments);
    isThrottled = true;

    // Reset the throttle after the delay
    setTimeout(() => {
      isThrottled = false;
      // Execute the trailing call if there were new invocations
      if (savedArgs) {
        wrapper.apply(this, savedArgs);
        savedArgs = null;
      }
    }, delay);
  }

  return wrapper;
}
// leading + trailing edge execution and preserves context:
function advanceThrottle2(fn, delay) {
  let isThrottled = false;
  let savedArgs = null;
  let savedThis = null;

  return function wrapper(...args) {
    savedArgs = args;
    savedThis = this;

    if (isThrottled) return;

    // Leading edge execution ✅
    fn.apply(savedThis, savedArgs);
    isThrottled = true;

    // Schedule trailing execution ✅
    setTimeout(() => {
      isThrottled = false;
      // Trailing edge execution (if there were calls during throttling)
      if (savedArgs !== null) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, delay);
  };
}

const updateFcCount = throttle(() => {
  fcount++;
  fcCount.innerText = fcount;
}, 800);
btn.addEventListener("click", (e) => {
  console.log("btn clicked");
  ecount++;
  eCount.innerText = ecount;
  updateFcCount();
});
window.addEventListener(
  "resize",
  throttle(() => console.log("Resize handled"), 1000)
);
