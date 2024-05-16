const negativeButtons = document.querySelectorAll(".minus");
const positiveButtons = document.querySelectorAll(".plus");
const startButton = document.querySelector(".start");
const resetButton = document.querySelector(".reset");
const stopButton = document.querySelector(".stop");
const breakTime = document.querySelector(".breakTime");
const startTime = document.querySelector(".studyTime");
const timer = document.querySelector(".timer");
const minusBreakButton = document.querySelector("#minusBreak");
const plusBreakButton = document.querySelector("#plusBreak");
const minusStudy = document.querySelector("#minusStudy");
const plusStudy = document.querySelector("#plusStudy");
const whatTime = document.querySelector(".whatTime")

//initial values
let timerInterval;
//study time
let studyTimeArray = startTime.textContent.split(":");
let studyMinutes = parseInt(studyTimeArray[0]);
let studySeconds = parseInt(studyTimeArray[1]);
//break time
let breakTimeArray = breakTime.textContent.split(":");
let breakMinutes = parseInt(breakTimeArray[0]);
let breakSeconds = parseInt(breakTimeArray[1]);
//start time
let startTimeArray = timer.textContent.split(":");
let startMinutes = parseInt(startTimeArray[0]);
let startSeconds = parseInt(startTimeArray[1]);

console.log(studyMinutes, studySeconds);

//Functions
const updateTime = () => {
  if (studyMinutes === 0 && studySeconds === 0) {
    if (breakMinutes === 0 && breakSeconds === 0) {
      clearInterval(timerInterval);
      console.log("Timer Finished");
      return;
    }

    breakSeconds--;

    if (breakSeconds < 0) {
      breakMinutes--;
      breakSeconds = 59;
    }

    console.log("Break Time Started");
    updateDisplay(breakMinutes, breakSeconds);
    whatTime.textContent = "Break Time";
  } else {
    studySeconds--;

    if (studySeconds < 0) {
      studyMinutes--;
      studySeconds = 59;
    }

    console.log("Study Time Started");
    updateDisplay(studyMinutes, studySeconds);
    whatTime.textContent = "Study Time"
  }
};
//Updating the display
const updateDisplay = (minutes, seconds) => {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  timer.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
};

//update display of break time
const updateBreakDisplay = (minutes, seconds) => {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  breakTime.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
};

const increaseBreakTime = () => {
  breakSeconds += 30;

  if (breakSeconds >= 60) {
    breakMinutes++;
    breakSeconds -= 60;
  }
  updateBreakDisplay(breakMinutes, breakSeconds);
};

const decrementBreakTime = () => {
  breakSeconds -= 30;

  if (breakSeconds < 0) {
    breakMinutes--;
    breakSeconds += 60;
  }

  if (breakSeconds < 0 || breakMinutes < 0) {
    window.alert("Time cannot be smaller than zero");
    breakMinutes = 0;
    breakSeconds = 0;
  }

  updateBreakDisplay(breakMinutes, breakSeconds);
};

//update starting time
const updateStartDisplay = (minutes, seconds) => {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  startTime.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
};

//increment values
const increaseStudyTime = () => {
  studySeconds += 30;

  if (studySeconds >= 60) {
    studyMinutes++;
    studySeconds -= 60;
  }

  updateStartDisplay(studyMinutes, studySeconds);
};

//decrement values
const decrementStudyTime = () => {
  studySeconds -= 30;

  if (studySeconds < 0) {
    studyMinutes--;
    studySeconds += 60;
  }

  if (studySeconds < 0 || studyMinutes < 0) {
    window.alert("Time cannot be smaller than zero");
    studyMinutes = 0;
    studySeconds = 0;
  }

  updateStartDisplay(studyMinutes, studySeconds);
};

//Implementing buttons

// Implementing buttons for study time
minusStudy.addEventListener("click", () => {
  console.log("Negative study button clicked");
  decrementStudyTime();
});

plusStudy.addEventListener("click", () => {
  console.log("Positive study button clicked");
  increaseStudyTime();
});

// Implementing buttons for break time
minusBreakButton.addEventListener("click", () => {
  console.log("Negative break button clicked");
  decrementBreakTime();
});

plusBreakButton.addEventListener("click", () => {
  console.log("Positive break button clicked");
  increaseBreakTime();
});

startButton.addEventListener("click", () => {
  console.log("Start button clicked");
  timerInterval = setInterval(updateTime, 1000);
});

resetButton.addEventListener("click", () => {
  console.log("Reset button clicked");
  startTime.innerHTML = "00:00";
  breakTime.innerHTML = "00:00";
});
