const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const output = document.querySelector('output');
const timeRemainArea = document.querySelector('#remain');

// const speechSynth = window.speechSynthesis;
// let timeRead = false;

let now = 0;
let interval = null;


function timeParser(ms) {
  const mil = (ms).toFixed(0) % 100;
  const sec = Math.floor(ms/1000) % 60;
  const min = Math.floor(ms/60000) % 60;
  return {
    mil,
    sec,
    min,
  };
}


function padTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}


function startTimer() {
  
  // Elapsed time
  let elapsedMil = Date.now() - now;
  const timeObj = timeParser(elapsedMil);
  mil = padTime(timeObj.mil);
  sec = padTime(timeObj.sec);
  min = padTime(timeObj.min);

  // Remaining time
  let remainingMil = window.parseInt(window.localStorage.goalMs, 10) - elapsedMil;
  const remainingTimeObj = timeParser(remainingMil);
  rMil = padTime(remainingTimeObj.mil);
  rSec = padTime(remainingTimeObj.sec);
  rMin = padTime(remainingTimeObj.min);

  // timeRemainMin = parseInt(window.localStorage.goalMin, 10) - min;
  // timeRemainSec = parseInt(window.localStorage.goalSec, 10) - sec;
  // timeRemainMil = parseInt(window.localStorage.goalMil, 10) - mil;
  // console.log(timeRemainSec);
  timeRemainArea.textContent = rMin + ":" + rSec + ":" + rMil;
  
  output.textContent = min + ":" + sec + ":" + mil;
}

function start() {
  now = Date.now();
  interval = window.setInterval(startTimer, 10);
}

function stop() {
  window.clearInterval(interval);
}

function reset() {
  output.textContent = "00:00:00";
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

// window.onload = function () {
//     const sayThis = new SpeechSynthesisUtterance('Welcome to Depth, a professional apnea training application for freediving athletes');
//     speechSynth.speak(sayThis);
//   };

  startBtn.addEventListener("click", startTimerVoice);
  stopBtn.addEventListener("click", stopTimerVoice);
  
  function startTimerVoice() {
    responsiveVoice.speak("Timer Started");
  };
  
  function stopTimerVoice() {
    responsiveVoice.speak("Timer Stopped");
  };

  const goalArea = document.querySelector('#goal');


  if (window.localStorage.goal) {
    goalArea.textContent = window.localStorage.goal;
  } else {
    goalArea.textContent = "Set Goal";
  }