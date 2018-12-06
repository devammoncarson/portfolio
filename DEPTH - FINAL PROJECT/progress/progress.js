function getDate() {
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();
let hours = today.getHours();
let minutes = today.getMinutes();

if(dd<10) {
    dd = '0' + dd;
} 

if(mm<10) {
    mm = '0' + mm;
}

if (hours < 10) {
  hours = '0' + hours;
}

let now = mm + '/' + dd + '/' + yyyy + ' ' + hours + ':' + minutes;
}

const ultimateGoalArea = document.querySelector('#ultimate-goal');
if (window.localStorage.ultimateGoal) {
    ultimateGoalArea.textContent = window.localStorage.ultimateGoal; 
} else {
    ultimateGoalArea.textContent = "*Set Ultimate Goal*";
}

function setUltimateGoal() {
    let ultimateGoalMin = parseInt(document.querySelector("#ultimate-goal-min").value);
    let ultimateGoalSec = parseInt(document.querySelector("#ultimate-goal-sec").value);
    window.localStorage.ultimateGoalMs = (window.parseInt(ultimateGoalMin, 10) * 60000) + (window.parseInt(ultimateGoalSec, 10) * 1000);

    let ultimateGoalMil = "00";
    parseInt(ultimateGoalMil);
    ultimateGoalMin = padGoal(ultimateGoalMin);
    ultimateGoalSec = padGoal(ultimateGoalSec);
    
    function padGoal(num) {
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    }

    window.localStorage.ultimateGoalMin = ultimateGoalMin;
    window.localStorage.ultimateGoalSec = ultimateGoalSec;
    window.localStorage.ultimateGoalMil = ultimateGoalMil;

    ultimateGoal = ultimateGoalMin + ":" + ultimateGoalSec + ":" + ultimateGoalMil;
    window.localStorage.ultimateGoal = ultimateGoal;
    ultimateGoalArea.textContent = window.localStorage.ultimateGoal;
};


setBestTime(bestTime) {
    bestTime.push([bestTimeList]);
}

const bestTimeList = [{
    date: now,
    time: ""
}]

