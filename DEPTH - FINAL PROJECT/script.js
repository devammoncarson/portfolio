const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const bestBtn = document.querySelector('#bestBtn');
const output = document.querySelector('output');
const timeRemainArea = document.querySelector('#remain');
const goalArea = document.querySelector('#goal');
const bestArea = document.querySelector('#best');

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
  let mil = padTime(timeObj.mil);
  let sec = padTime(timeObj.sec);
  let min = padTime(timeObj.min);

  // Remaining time
  if (window.localStorage.goalMs == null) {
    timeRemainArea.textContent = "*Set Goal*";
  } else {
  let remainingMil = window.parseInt(window.localStorage.goalMs, 10) - elapsedMil;
  const remainingTimeObj = timeParser(remainingMil);

  let rMil = remainingTimeObj.mil;
  let rSec = remainingTimeObj.sec;
  let rMin = remainingTimeObj.min;

  if (rMil < 0 && rSec < 0 && rMil < 0) {
    timeRemainArea.textContent = "Target Goal Reached!"
  } else {
  rMil = padTime(remainingTimeObj.mil);
  rSec = padTime(remainingTimeObj.sec);
  rMin = padTime(remainingTimeObj.min);
  // Output Time Remaining
  timeRemainArea.textContent = rMin + ":" + rSec + ":" + rMil;
  }
}
  // Output Timer
  output.textContent = min + ":" + sec + ":" + mil;
}

//Background music file
let audio = new Audio('/music/meditation-music.mp3');

//Timer Functionality
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function start() {
  now = Date.now();
  interval = window.setInterval(startTimer, 10);
  //Toggle Check
  toggleVoiceCheckStart(window.localStorage.voiceToggleValue);
  toggleMusicCheckStart(window.localStorage.musicToggleValue);
}

function stop() {
  window.clearInterval(interval);
  //Toggle Check
  toggleVoiceCheckStop(window.localStorage.voiceToggleValue);
  toggleMusicCheckStop(window.localStorage.musicToggleValue);
}

function reset() {
  output.textContent = "00:00:00";
  timeRemainArea.textContent = window.localStorage.goal;
  if (!timeRemainArea.textContent) {
    timeRemainArea.textContent = "*Set Goal*";
  }
}

//Toggle Check Functions
function toggleMusicCheckStart(toggle) {
  if (toggle === "true") {
    audio.play();
  }
}

function toggleMusicCheckStop(toggle) {
  if (toggle === "true") {
    audio.pause();
    audio.currentTime = 0;
  }
}

function toggleVoiceCheckStart(toggle) {
  if (toggle === "true") {
    responsiveVoice.speak("Timer Started");
  }
}

function toggleVoiceCheckStop(toggle) {
  if (toggle === "true") {
    responsiveVoice.speak("Timer Stopped");
  }
}

//Goal Checker
  if (window.localStorage.goal) {
    goalArea.textContent = window.localStorage.goal;
    timeRemainArea.textContent = window.localStorage.goal;
  } else {
    goalArea.textContent = "*Set Goal*";
    timeRemainArea.textContent = "*Set Goal*";
  }
  
  // bestBtn.addEventListener('click', getBestTime)
  
  function getBestTime() {
    let bestTime = output.textContent;
    bestArea.textContent = bestTime;
    window.localStorage.bestTime = bestTime;
  }





  