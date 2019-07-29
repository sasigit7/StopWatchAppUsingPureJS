var hours = document.getElementById('hours'),
  minutes = document.getElementById('minutes'),
  seconds = document.getElementById('seconds'),
  milliseconds = document.getElementById('milliseconds'),
  
  startButton = document.getElementById('startButton'),
  pauseButton = document.getElementById('pauseButton'),
  stopButton = document.getElementById('stopButton'),
  resetButton = document.getElementById('resetButton'),
  
  setTime,
  currentTime,
  difference,
  timer = 0,
  interval;

var start = function () {
  // console.log(Date.now());
  setTime = Date.now();
  interval = setInterval(update, 10);
};

var pause = function () {
  // console.log('Pausing');
  clearInterval(interval);
};

var stop = function () {
  // console.log('Stopping');
  clearInterval(interval);
  timer = 0;
};

var reset = function () {
  // console.log('Resetting');
  timer = 0;
  updateScreen();
};

var update = function () {
  // console.log(Date.now());
  currentTime = Date.now();
  difference = currentTime - setTime;
  timer += difference;

  updateScreen();
  setTime = currentTime; 

  // console.log(timer);
};

var updateScreen = function () {
  var timeRaw = timer/1000;
  timeMilliSeconds = parseInt((timeRaw % 1) * 100);
  timeSeconds = Math.floor(timeRaw);
  timeMinutes = Math.floor(timeSeconds/60);
  timeHours = Math.floor(timeMinutes/60);

  milliseconds.innerText = twoDigiter(timeMilliSeconds);
  seconds.innerText = twoDigiter(processSixty(timeSeconds));
  minutes.innerText = twoDigiter(processSixty(timeMinutes));
  hours.innerText = twoDigiter(timeHours);
};

var twoDigiter = function (number) {
  var numString = number.toString();
  if (numString.length < 2) {
    return '0' + numString;
  } else {
    return numString;
  }
};

var processSixty = function (number) {
  var divisible = Math.floor(number/60);
  if (number/60 >= divisible) {
    return number - 60 * divisible;
 }
};

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);