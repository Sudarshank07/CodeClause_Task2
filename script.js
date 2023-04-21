// Stopwatch
let stopwatchInterval = null;
let stopwatchTime = 0;

function updateStopwatchDisplay() {
  let hours = Math.floor(stopwatchTime / 3600);
  let minutes = Math.floor((stopwatchTime % 3600) / 60);
  let seconds = stopwatchTime % 60;
  
  let hoursString = hours.toString().padStart(2, '0');
  let minutesString = minutes.toString().padStart(2, '0');
  let secondsString = seconds.toString().padStart(2, '0');
  
  let stopwatchDisplay = document.getElementById("stopwatchDisplay");
  stopwatchDisplay.textContent = `${hoursString}:${minutesString}:${secondsString}`;
}

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    updateStopwatchDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

// Countdown Timer
let countdownInterval = null;
let countdownTime = 0;

function updateCountdownDisplay() {
  let hours = Math.floor(countdownTime / 3600);
  let minutes = Math.floor((countdownTime % 3600) / 60);
  let seconds = countdownTime % 60;
  
  let hoursString = hours.toString().padStart(2, '0');
  let minutesString = minutes.toString().padStart(2, '0');
  let secondsString = seconds.toString().padStart(2, '0');
  
  let countdownDisplay = document.getElementById("countdownDisplay");
  countdownDisplay.textContent = `${hoursString}:${minutesString}:${secondsString}`;
}

function startCountdownTimer() {
  countdownInterval = setInterval(() => {
    countdownTime--;
    updateCountdownDisplay();
    if (countdownTime <= 0) {
      stopCountdownTimer();
    }
  }, 1000);
}

function stopCountdownTimer() {
  clearInterval(countdownInterval);
  countdownInterval = null;
}

function resetCountdownTimer() {
  stopCountdownTimer();
  countdownTime = 0;
  updateCountdownDisplay();
}

function setCountdownTimer() {
  let hours = parseInt(document.getElementById("countdownHours").value) || 0;
  let minutes = parseInt(document.getElementById("countdownMinutes").value) || 0;
  let seconds = parseInt(document.getElementById("countdownSeconds").value) || 0;

  countdownTime = (hours * 3600) + (minutes * 60) + seconds;

  if (countdownTime > 0) {
    updateCountdownDisplay();
  }
}

// Event Listeners
document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("stopStopwatch").addEventListener("click", stopStopwatch);
document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);

document.getElementById("startCountdownTimer").addEventListener("click", startCountdownTimer);
document.getElementById("stopCountdownTimer").addEventListener("click", stopCountdownTimer);
document.getElementById("resetCountdownTimer").addEventListener("click", resetCountdownTimer);

document.getElementById("setCountdownTimer").addEventListener("click", setCountdownTimer);
