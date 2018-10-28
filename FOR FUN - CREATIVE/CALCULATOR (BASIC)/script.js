function runCalc() {
    var firstNum = document.getElementById("numOne").value;
    var secondNum = document.getElementById("numTwo").value;
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    var answer = firstNum + secondNum;
    document.getElementById("answer").innerHTML = answer;
}

function clear() {
    location.reload();
  }