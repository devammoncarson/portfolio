window.scrollTo(0,document.body.scrollHeight);

const currentGoalOutput = document.querySelector('#current-goal');
const ultimateGoalOutput = document.querySelector('#ultimate-goal');

if (window.localStorage.ultimateGoal) {
  ultimateGoalOutput.textContent = window.localStorage.ultimateGoal; 
} else {
  ultimateGoalOutput.textContent = "set goal";
}

if (window.localStorage.currentGoal) {
  currentGoalOutput.textContent = window.localStorage.currentGoal; 
} else {
  currentGoalOutput.textContent = "set goal";
}

function setGoal() {
    let goalMin = parseInt(document.querySelector("#goal-min").value);
    let goalSec = parseInt(document.querySelector("#goal-sec").value);

    window.localStorage.goalMs = (window.parseInt(goalMin, 10) * 60000) + (window.parseInt(goalSec, 10) * 1000);

    let goalMil = "00";
    parseInt(goalMil);

    goalMin = padGoal(goalMin);
    goalSec = padGoal(goalSec);
    
    function padGoal(num) {
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    }

    window.localStorage.goalMin = goalMin;
    window.localStorage.goalSec = goalSec;
    window.localStorage.goalMil = goalMil;

    goal = goalMin + ":" + goalSec + ":" + goalMil;
    currentGoalOutput.textContent = goal;
    window.localStorage.currentGoal = goal;
};


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
    ultimateGoalOutput.textContent = ultimateGoal;
    window.localStorage.ultimateGoal = ultimateGoal;
};




