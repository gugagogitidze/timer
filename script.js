let day = Number(prompt("შეიყვანე დღე"));
let hour = Number(prompt("შეიყვანე საათი"));
let minute = Number(prompt("შეიყვანე წუთი"));
let second = Number(prompt("შეიყვანე წამი"));

let dayDiv = document.getElementById("day");
let hourDiv = document.getElementById("hour");
let minuteDiv = document.getElementById("minute");
let secondDiv = document.getElementById("second");

let timer = setInterval(() => {
  dayDiv.textContent = day;
  hourDiv.textContent = hour;
  minuteDiv.textContent = minute;
  secondDiv.textContent = second;

  second--;

  if (second < 0) {
    second = 59;
    minute--;
  }

  if (minute < 0) {
    minute = 59;
    hour--;
  }

  if (hour < 0) {
    hour = 23;
    day--;
  }

  if (day < 0) {
    day = 0;
  }

  if (day === 0 && hour === 0 && minute === 0 && second === 0) {
    alert("congratulations");
    clearInterval(timer);
  }
}, 1000);
