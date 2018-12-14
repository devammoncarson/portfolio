window.scrollTo(0,document.body.scrollHeight);

// const startBtn = document.querySelector('#start');
// const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const screenToggle = document.querySelector('#main-content');
const bestBtn = document.querySelector('#bestBtn');
const output = document.querySelector('output');
const timeRemainArea = document.querySelector('#remain');
const goalArea = document.querySelector('#goal');
const bestTimeArea = document.querySelector('#best');

let now = 0;
let interval = null;
let elapsedMil = 0;

// Copyright 2018 by Depth Development, LLC. https://codepen.io/depthdev/pen/QZYPZQ
function debounce(fn, ms = 1000, go = true, buffer = 0) {
  return function(...args) {
    if (go && !buffer) fn.apply(this, args);
    clearTimeout(buffer);
    buffer = setTimeout(() => { buffer = 0; if (!go) fn.apply(this, args); }, ms);
  };
};

//Voice Control
const triggerVoice = debounce((min, sec) => {
  if (min === "00" && sec === "15" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("15 Seconds");
 } else if (min === "00" && sec === "30" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("30 Seconds");
 } else if (min === "00" && sec === "45" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("45 Seconds");
 } else if (min === "01" && sec === "00" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("1 Minute");
 } else if (min === "01" && sec === "15" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("1 Minute 15 Seconds");
 } else if (min === "01" && sec === "30" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("1 Minute 30 Seconds");
 } else if (min === "01" && sec === "45" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("1 Minute 45 Seconds");
 } else if (min === "02" && sec === "00" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("2 Minutes");
 } else if (min === "02" && sec === "15" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("2 Minutes 15 Seconds");
 } else if (min === "02" && sec === "30" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("2 Minutes 30 Seconds");
 } else if (min === "02" && sec === "45" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("2 Minutes 45 Seconds");
 } else if (min === "03" && sec === "00" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("3 Minutes");
 } else if (min === "03" && sec === "15" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("3 Minutes 15 Seconds");
 } else if (min === "03" && sec === "30" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("3 Minutes 30 Seconds");
 } else if (min === "03" && sec === "45" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("3 Minutes 45 Seconds");
 } else if (min === "04" && sec === "00" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("4 Minutes");
 } else if (min === "04" && sec === "15" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("4 Minutes 15 Seconds");
 } else if (min === "04" && sec === "30" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("4 Minutes 30 Seconds");
 } else if (min === "04" && sec === "45" && window.localStorage.voiceToggleValue === "true") {
   responsiveVoice.speak("4 Minutes 45 Seconds");
 } else if (min === "05" && sec === "00" && window.localStorage.voiceToggleValue === "true") {
  responsiveVoice.speak("5 Minutes");
} else if (min === "05" && sec === "15" && window.localStorage.voiceToggleValue === "true") {
  responsiveVoice.speak("5 Minutes 15 Seconds");
} else if (min === "05" && sec === "30" && window.localStorage.voiceToggleValue === "true") {
  responsiveVoice.speak("5 Minutes 30 Seconds");
} else if (min === "05" && sec === "45" && window.localStorage.voiceToggleValue === "true") {
  responsiveVoice.speak("5 Minutes 45 Seconds");
} else if (min === "06" && sec === "00" && window.localStorage.voiceToggleValue === "true") {
  responsiveVoice.speak("6 Minutes");
} else if (min === "06" && sec === "15" && window.localStorage.voiceToggleValue === "true") {
  responsiveVoice.speak("6 Minutes 15 Seconds");
} else if (min === "06" && sec === "30" && window.localStorage.voiceToggleValue === "true") {
  responsiveVoice.speak("6 Minutes 30 Seconds");
} else if (min === "06" && sec === "45" && window.localStorage.voiceToggleValue === "true") {
  responsiveVoice.speak("6 Minutes 45 Seconds");
} 
});

const triggerVoiceGoal = debounce((min, sec) => {
   responsiveVoice.speak("Your Current Goal Has Been Reached!");
 });

 const triggerVoiceUltimateGoal = debounce((min, sec) => {
  responsiveVoice.speak("Your Ultimate Goal Has Been Reached!");
});

const triggerAnimation = debounce((min, sec) => {
  if (window.localStorage.animationToggleValue === "true") {
  timeRemainArea.classList.add('congrats');
  goalArea.classList.add('congrats');
    window.setTimeout(function() {
      timeRemainArea.classList.remove('congrats');
      goalArea.classList.remove('congrats');
    }, 1500);
  }
});

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
  return "" + num;
}


function startTimer() {
  
  // Elapsed time
  elapsedMil = Date.now() - now;
  const timeObj = timeParser(elapsedMil);
  let mil = padTime(timeObj.mil);
  let sec = padTime(timeObj.sec);
  let min = padTime(timeObj.min);

  if (['00', '15', '30', '45'].includes(sec) && window.localStorage.voiceToggleValue === "true") {
    triggerVoice(min, sec);
  }

  if (window.localStorage.goalMin === min && window.localStorage.goalSec === sec && window.localStorage.voiceToggleValue === "true") {
    triggerVoiceGoal(min, sec);
  }

  if (window.localStorage.ultimateGoalMin === min && window.localStorage.ultimateGoalSec === sec && window.localStorage.voiceToggleValue === "true") {
    triggerVoiceUltimateGoal(min, sec);
  }
  
  // Remaining time
  let remainingMil = window.parseInt(window.localStorage.goalMs, 10) - elapsedMil;
  const remainingTimeObj = timeParser(remainingMil);
  
  let rMil = remainingTimeObj.mil;
  let rSec = remainingTimeObj.sec;
  let rMin = remainingTimeObj.min;
  
  if (!window.localStorage.goalMs) {
    timeRemainArea.textContent = "set goal";
  } else if (rMin < 0 && rSec < 0 && rMil < 1) {
    timeRemainArea.textContent = "Current Goal Reached!";
    triggerAnimation();
  } else {
    rMil = padTime(remainingTimeObj.mil);
    rSec = padTime(remainingTimeObj.sec);
    rMin = padTime(remainingTimeObj.min);
    // Output Time Remaining
    timeRemainArea.textContent = rMin + ":" + rSec + ":" + rMil;
  }
  // Output Timer
  output.textContent = min + ":" + sec + ":" + mil;
}

//Goal Checker
if (window.localStorage.currentGoal) {
  goalArea.textContent = window.localStorage.currentGoal;
  timeRemainArea.textContent = window.localStorage.currentGoal;
} else {
  goalArea.textContent = "set goal";
  timeRemainArea.textContent = "set goal";
}

function goalChecker() {
  if (window.localStorage.currentGoal) {
    goalArea.textContent = window.localStorage.currentGoal;
    timeRemainArea.textContent = window.localStorage.currentGoal;
  } else {
    goalArea.textContent = "set goal";
    timeRemainArea.textContent = "set goal";
  }
}

//Best Time Checker
if (window.localStorage.bestTime) {
  bestTimeArea.textContent = window.localStorage.bestTime;
} else {
  bestTimeArea.textContent = "00:00:00"
}

//Background music file
let audio = new Audio('/music/meditation-music.mp3');

//Timer Functionality
// startBtn.addEventListener('click', start);
// stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

let startStopToggle;
screenToggle.addEventListener('click', startStop);

function startStop() {
  startStopToggle = !startStopToggle;
  if (startStopToggle === true) {
    now = Date.now();
  interval = window.setInterval(startTimer, 10);
  //Toggle Check
  toggleVoiceCheckStart(window.localStorage.voiceToggleValue);
  toggleMusicCheckStart(window.localStorage.musicToggleValue);
  } else {
    window.clearInterval(interval);
  bestTimeCheck();
  //Toggle Check
  toggleVoiceCheckStop(window.localStorage.voiceToggleValue);
  toggleMusicCheckStop(window.localStorage.musicToggleValue);
  }
}

// function start() {
//   now = Date.now();
//   interval = window.setInterval(startTimer, 10);
//   //Toggle Check
//   toggleVoiceCheckStart(window.localStorage.voiceToggleValue);
//   toggleMusicCheckStart(window.localStorage.musicToggleValue);
// }

// function stop() {
//   window.clearInterval(interval);
//   bestTimeCheck();
//   //Toggle Check
//   toggleVoiceCheckStop(window.localStorage.voiceToggleValue);
//   toggleMusicCheckStop(window.localStorage.musicToggleValue);
// }

function reset() {
  output.textContent = "00:00:00";
  timeRemainArea.textContent = window.localStorage.currentGoal;
  goalChecker();
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

  //Best Time Check
  function bestTimeCheck() {
    const bestTimeMil = window.localStorage.bestTimeMil ? window.parseInt(window.localStorage.bestTimeMil, 10) : 0;
    if (elapsedMil > bestTimeMil) {
      window.localStorage.bestTimeMil = elapsedMil;
      window.localStorage.dateOfBestTime = new Date().toDateString();
      bestTimePretty();
    }
  }

  function bestTimePretty() {
    window.localStorage.bestTime = window.localStorage.bestTimeMil;
    const timeObject = timeParser(window.parseInt(window.localStorage.bestTime, 10));
    window.localStorage.bestTime = padTime(timeObject.min) + ":" + padTime(timeObject.sec) + ":" + padTime(timeObject.mil);
    bestTimeArea.textContent = window.localStorage.bestTime;
  }

 




  