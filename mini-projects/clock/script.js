/** @format */

const time = document.querySelector("#time");
// document.addEventListener("DOMContentLoaded", () => {
//   showTime();
//   setInterval(showTime, 1000);
//   //   console.log(date);
// });
function showTime() {
  const newDate = new Date();
  currentTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  time.innerText = currentTime;
}
// const interval = setInterval(showTime, 1000);
// document.querySelector("#stop-timer").addEventListener("click", () => {
//   clearInterval(interval);
// });

// * countdown timer logic
const hour = document.querySelector("#hour");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
let intervalId;
function timerfn() {
  if (sec.value > 60) {
    // min.value = parseInt(sec.value / 60);
    // sec.value = sec.value % 60;
    min.value++;
    sec.value = parseInt(sec.value) - 59;
  }
  if (min.value > 60) {
    hour.value++;
    min.value = min.value - 60;
  }
  if (sec.value > 0) {
    sec.value = sec.value <= 10 ? `0${sec.value - 1}` : sec.value - 1;
  } else if (sec.value == 0 && min.value > 0) {
    min.value = min.value <= 10 ? `0${min.value - 1}` : min.value - 1;
    sec.value = 59;
  } else if (min.value == 0 && hour.value > 0) {
    hour.value = hour.value <= 10 ? `0${hour.value - 1}` : hour.value - 1;
    min.value = 60;
  } else if (sec.value == 0 && min.value == 0 && hour.value == 0) {
    alert("Time's Up!");
    clearInterval(intervalId);
    hour.value = null;
    min.value = null;
    sec.value = null;
  }
}
startBtn.addEventListener("click", () => {
  if (hour.value == 0 && min.value == 0 && sec.value == 0) return;
  intervalId = setInterval(timerfn, 1000);

  stopBtn.style.display = "block";
  startBtn.style.display = "none";
});
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  stopBtn.style.display = "none";
  startBtn.style.display = "block";
});
resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  hour.value = null;

  min.value = null;

  sec.value = null;
   stopBtn.style.display = "none";
   startBtn.style.display = "block";
});

//* counter timer logic
const hourCounter = document.getElementById("counter-hour");
const minCounter = document.getElementById("counter-min");
const secCounter = document.getElementById("counter-sec");
const counterStartBtn = document.querySelector("#start-counter");
const counterStopBtn = document.querySelector("#stop-counter");
const counterResetBtn = document.querySelector("#reset-counter");
let counterIntervalId = null;
let counterHour = 0;
let counterMin = 0;
let counterSec = 0;
function counterTimerfn() {
counterSec++;
secCounter.innerText = counterSec
if (counterSec == 60) {
    counterMin++;
    minCounter.innerText = counterMin;
    counterSec = 0;
    secCounter.innerText = counterSec;
  } else if (counterMin >= 60){
    counterHour++;
    hourCounter.innerText = counterHour;
    counterMin = 0;
    minCounter.innerText = counterMin;
  }
}
counterStartBtn.addEventListener("click", () => {
  counterIntervalId = setInterval(counterTimerfn, 1000);

  counterStopBtn.style.display = "block";
  counterStartBtn.style.display = "none";
});
counterStopBtn.addEventListener("click",()=>{
  clearInterval(counterIntervalId)
   counterStopBtn.style.display = "none";
   counterStartBtn.style.display = "block";
})
counterResetBtn.addEventListener("click",()=>{
  clearInterval(counterIntervalId)
  counterHour = 0
  counterMin = 0
  counterSec = 0
  hourCounter.innerText = counterHour
  minCounter.innerText = counterMin
  secCounter.innerText = counterSec
  counterStopBtn.style.display = "none";
  counterStartBtn.style.display = "block";
})