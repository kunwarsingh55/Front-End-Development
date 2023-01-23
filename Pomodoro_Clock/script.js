var breakTime = 0;
var sessionTime = 0;
var sessionTimeGlobal = 0;
var breakTimeGlobal = 0;
var sessionSelectorDisplay = document.getElementById("sessionSelectorDisplay");
let breakSelectorDisplay = document.getElementById("breakSelectorDisplay");
var id = 0;
var bid = 0;
var statuss = document.getElementById("status");
var sessionNumber = 1;
var breakNumber = 1;
var inProcess = 0;

function incSession() {
  sessionTime++;
  sessionSelectorDisplay.innerHTML = sessionTime + " Min";
  sessionTimeGlobal = sessionTime;

}
function decSession() {
  sessionTime--;
  sessionSelectorDisplay.innerHTML = sessionTime + " Min";
  sessionTimeGlobal = sessionTime;
}
function incBreak() {
  breakTime++;
  breakTimeGlobal = breakTime;
  breakSelectorDisplay.innerHTML = breakTime + " Min";
}
function decBreak() {
  breakTime--;
  breakTimeGlobal = breakTime;
  breakSelectorDisplay.innerHTML = breakTime + " Min";
}
function startSession() {
let startStop = document.getElementById("StartStop");
  if(inProcess == 1){
    clearInterval(id);
    clearInterval(bid);
    inProcess = 0;
    startStop.innerHTML = "Start";
  }
  else{
    
  startStop.innerHTML = "Pause";
  clearInterval(id);
  id = setInterval(clock, 100);
  console.log("Start");
  inProcess = 1;
  }
  

}
var seconds = 0;
function clock() {
  statuss.innerHTML = "Session" + " " + sessionNumber;

  if (seconds == 0) {
    sessionTime--;
    seconds = 59;
  }
  seconds--;
  if (sessionTime == 0 && seconds == 0) {
    sessionNumber++;
    sessionTime = sessionTimeGlobal;
    bid = setInterval(breakClock, 1000);
    clearInterval(id);

  }
  let current_time = document.getElementById("currenTime");
  current_time.innerHTML = String(sessionTime).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}
function breakClock() {

  statuss.innerHTML = "Break" + " " + breakNumber
  if (seconds == 0) {
    breakTime--;
    seconds = 59;
  }
  seconds--;
  if (breakTime == 0 && seconds == 0) {
    breakNumber++;
    breakTime = breakTimeGlobal;
    id = setInterval(clock, 1000);
    clearInterval(bid);
  }
  let current_time = document.getElementById("currenTime");
  current_time.innerHTML = String(breakTime).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}
function resetClock() {
  clearInterval(id);
  clearInterval(bid);
  id = 0;
  bid = 0;
  sessionNumber = 1;
  breakNumber = 1;
  breakTime = 0;
  sessionTime = 0;
  sessionTimeGlobal = 0;
  breakTimeGlobal = 0;
  let current_time = document.getElementById("currenTime");
  current_time.innerHTML = "00" + ":" + "00";
}

