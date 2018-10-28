var newName = "";

function beautifyName() {
    newName = document.getElementById("newName").value;
    document.getElementById("displayName").innerHTML = newName;
  }

function clearPage() {
  location.reload();
}