//creating a timer to test out how it works

let seconds = 0;
let minutes = 1;

function timer() {
  // Update the displayed time
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
  console.log(displayMinutes + ':' + displaySeconds);

  // Decrease seconds
  seconds--;

  // If seconds reach 0, decrement minutes and reset seconds to 59
  if (seconds < 0) {
    minutes--;
    seconds = 59;
  }

  // If both minutes and seconds reach 0, stop the timer
  if (minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
  }
}

// Call the timer function every second
const timerInterval = setInterval(timer, 1000);
