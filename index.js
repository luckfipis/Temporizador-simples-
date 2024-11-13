let totalSeconds = 0;
let intervalId;
let isTimerRunning = false;

const countDisplay = document.getElementById('count');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const startTimerButton = document.getElementById('start-timer');
const stopTimerButton = document.getElementById('stop-timer');

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateCountDisplay() {
  countDisplay.textContent = formatTime(totalSeconds);
}

function startTimer() {
  isTimerRunning = true;
  intervalId = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateCountDisplay();
    } else {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  isTimerRunning = false;
  totalSeconds = 0;
  updateCountDisplay();
}

decrementButton.addEventListener('click', () => {
  if (totalSeconds > 0) {
    totalSeconds--;
    updateCountDisplay();
  }
});

incrementButton.addEventListener('click', () => {
  totalSeconds++;
  updateCountDisplay();
  if (isTimerRunning) {
    stopTimer();
    startTimer();
  }
});

startTimerButton.addEventListener('click', () => {
  if (!isTimerRunning) {
    startTimer();
  }
});

stopTimerButton.addEventListener('click', () => {
  if (isTimerRunning) {
    stopTimer();
  }
});