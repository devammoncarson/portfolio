window.scrollTo(0,document.body.scrollHeight);

const bestTimeArea = document.querySelector('#best-time');
const dateOfBestTime = document.querySelector('#best-date');
const ultimateGoalArea = document.querySelector('#ultimate-goal');

if (window.localStorage.ultimateGoal) {
    ultimateGoalArea.textContent = window.localStorage.ultimateGoal; 
} else {
    ultimateGoalArea.textContent = "*Set Ultimate Goal*";
}

if (window.localStorage.bestTime) {
    bestTimeArea.textContent = window.localStorage.bestTime;
    dateOfBestTime.textContent = window.localStorage.dateOfBestTime;
} else {
    bestTimeArea.textContent = 'No Best Time Reached';
    dateOfBestTime.textContent = "No Best Time Reached";
}





