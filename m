startSeconds--;

if (startSeconds < 0) {
  startMinutes--;
  startSeconds = 59;
}

if (startMinutes === 0 && startSeconds === 0) {
  clearInterval(timerInterval);
}
console.log("timer started");
updateDisplay();