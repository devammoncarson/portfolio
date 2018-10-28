const output = document.querySelector('output');

function setGoal() {
    let goalMin = parseInt(document.querySelector("#goal-min").value);
    let goalSec = parseInt(document.querySelector("#goal-sec").value);
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
    output.textContent = goal;
    window.localStorage.goal = goal;
};



