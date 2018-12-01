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

now = mm + '/' + dd + '/' + yyyy + ' ' + hours + ':' + minutes;
let timeOfBestTime = now;
