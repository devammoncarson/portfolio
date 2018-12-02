const animationToggle = document.querySelector('#animations');
const voiceToggle = document.querySelector('#voice');
const musicToggle = document.querySelector('#music');

if (window.localStorage.animationToggleValue === 'true') {
    animationToggle.checked = true;
} else {
    animationToggle.checked = false;
}

if (window.localStorage.voiceToggleValue === 'true') {
    voiceToggle.checked = true;
} else {
    voiceToggle.checked = false;
}

if (window.localStorage.musicToggleValue === 'true') {
    musicToggle.checked = true;
} else {
    musicToggle.checked = false;
}


animationToggle.addEventListener('click', function() {
    window.localStorage.animationToggleValue = !window.localStorage.animationToggleValue;
    if (window.localStorage.animationToggleValue === "true") {
    animationToggle.checked = true;
    }
    window.localStorage.animationToggleValue = animationToggle.checked;
    console.log(window.localStorage.animationToggleValue);
});

  
  voiceToggle.addEventListener('click', function() {
    window.localStorage.voiceToggleValue = !window.localStorage.voiceToggleValue;
    if (window.localStorage.voiceToggleValue === "true") {
        voiceToggle.checked = true;
        } 
        window.localStorage.voiceToggleValue = voiceToggle.checked;
        console.log(window.localStorage.voiceToggleValue);
  });
  
  
  musicToggle.addEventListener('click', function() {
    window.localStorage.musicToggleValue = !window.localStorage.musicToggleValue;
    if (window.localStorage.musicToggleValue === "true") {
        musicToggle.checked = true;
        }
        window.localStorage.musicToggleValue = musicToggle.checked;
        console.log(window.localStorage.musicToggleValue);
  });