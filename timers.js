var timerID;
var timerTotal = -1;

function resetTimerTotal(){
  timerTotal = -1;
}

function startTimer(){
  timerID = window.setInterval(countTimer, 1000);
}

function countTimer(){
  timerTotal++;
  timer.innerText = 'Time Elapsed: ' + timerTotal;
}

function pauseTimer(){
  window.clearInterval(timerID);
}

function resetTimer(){
  pauseTimer();
  resetTimerTotal();
  timer.innerText = 'Stop Watch';
}

start.addEventListener('click', startTimer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);