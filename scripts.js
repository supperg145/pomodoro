const negativeButtons = document.querySelectorAll(".minus");
const positiveButtons = document.querySelectorAll(".plus");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const stopButton = document.querySelector(".stop");
const breakTime = document.querySelector(".breakTime");
const startTime = document.querySelector(".studyTime");
const timer = document.querySelector(".timer");

//initial values
let timerInterval;
//study time
let startTimeArray = startTime.textContent.split(":");
let startMinutes = parseInt(startTimeArray[0]);
let startSeconds = parseInt(startTimeArray[1]);
//break time
let breakTimeArray = breakTime.textContent.split(":");
let breakMinutes = parseInt(breakTimeArray[0]);
let breakSeconds = parseInt(breakTimeArray[1]);

console.log(startMinutes, startSeconds);

//Functions
const updateTime = () => {
  if (startMinutes === 0 && startSeconds === 0) {
    breakSeconds--;

    if (breakSeconds < 0) {
      breakMinutes--;
      breakSeconds = 59;
    }
    if (breakMinutes === 0 && breakSeconds === 0) {
      clearInterval(timerInterval);
    }
    console.log("Break Time Started");
    updateDisplay(breakMinutes, breakSeconds);
  } else {
    startSeconds--;

    if (startSeconds < 0) {
      startMinutes--;
      startSeconds = 59;
    }

    console.log("Study Time Started");
    updateDisplay(startMinutes, startSeconds);
  }
};
//Updating the display
const updateDisplay = (minutes, seconds) => {
  timer.innerHTML = `${minutes} : ${seconds}`;
};

//

//Implementing buttons

negativeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Negative button clicked");
    decrementTime();
  });
});

positiveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Positive button clicked");
    increaseTime();
  });
});

startButton.addEventListener("click", () => {
  console.log("Start button clicked");
  timerInterval = setInterval(updateTime, 1000);
});


resetButton.addEventListener("click", () => {
  console.log("Reset button clicked");
  startTime.innerHTML = "0:00";
  breakTime.innerHTML = "0:00";
  resetTime();
});

stopButton.addEventListener("click", () => {
  console.log("Stop button clicked");
  stopTime();
});
