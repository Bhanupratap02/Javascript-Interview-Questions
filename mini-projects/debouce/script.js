/** @format */

const search = document.querySelector("#search-input");

function debounce(func, delay = 500) {
    
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
debouncedFn = debounce((value) => console.log(value), 800);
search.addEventListener("input", (e) => {
  debouncedFn(e.target.value);
  //   console.log(e.target.value);
});
