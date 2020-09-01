// Bottons and Eventlisteners
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const clearBtn = document.getElementById("clear-btn")
const saveBtn = document.getElementById("save-btn")
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
clearBtn.addEventListener("click", clearResults);
saveBtn.addEventListener("click", save);

// Fetch saved times
const saved = localStorage.getItem("saved")
if (saved) {
  document.getElementById("saved-time").innerHTML = `${saved}`
}
// Date and Time
const savedTime = document.getElementById("saved-time")

const newDate = new Date()
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const date = newDate.getDate()
const year = newDate.getFullYear()
const months = month[newDate.getMonth()]
const days = day[newDate.getDay()]

let formattedDate = `${days}, ${date} ${months} ${year}`


// Defining variables to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Defining variables to hold "display value"
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Defining variable to hold setInterval() function
let interval;
// Define varible to hold timer status
let status = "stopped";


// Functions

// Timer function
function timer() {
  seconds++;

  // When to increment the next value
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      6;
      minutes = 0;
      hours++;
    }
  }
  //   if sec/min/hr are only one digit, add a string 0 to the value
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }
  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }
  // Update the duration to the user
  document.getElementById("duration").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}
// Start the timer
function start() {
  if (status === "stopped") {
    // Start timer
    interval = window.setInterval(timer, 1000);
    document.getElementById("duration");
    status = "started";
  }
}
// pause the timer
function pause() {
  if (status === "started") {
    window.clearInterval(interval);
    status = "stopped";
  }
}
function reset() {
  timeResults()
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("duration").innerHTML = "00:00:00";
  status = "stopped";
}
function timeResults() {
  // Gets results to string and create a new element to display results
  const totalTime = document.getElementById("duration").innerHTML.toString()
  // savedTime.innerHTML = `<p class="time-results">${totalTime}   ${formattedDate}</p>`
  if (totalTime != '00:00:00') {
  const tag = document.createElement("p");
  const text = document.createTextNode(`${totalTime}   ${formattedDate}`);
  tag.appendChild(text)
  tag.className = "time-results";
  savedTime.appendChild(tag);
  }
  
}
function clearResults() {
  document.getElementById("saved-time").innerHTML = "";
  localStorage.clear()
}
// Local Storage
function save() {
  const savedTimes = savedTime.innerHTML
  localStorage.setItem("saved",savedTimes)
}


