// "use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let interval;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  // 1000 ms = 1 sec 
  // 10 ms = 0.01 sec
  // timer will be called at every 0,01 secs  
  interval = setInterval(() => { timer(); }, 10); 
}

function pause() {
  clearInterval(interval);
}

function reset() {
  pause();
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  //1000 ms = 1 sec 
  if ((millisecond += 10) == 1000) {   
    millisecond = 0;
    second++;      
  }
  //60 secs = 1 min
  if (second == 60) {   
    second = 0;
    minute++;
  }
  //60 mins = 1hr
  if (minute == 60) {   
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 9 ? input : `0${input}`
}