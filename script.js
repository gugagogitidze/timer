let daysitem = document.querySelector("#day");
let hoursitem = document.querySelector("#hour");
let minitem = document.querySelector("#minutes");
let secitem = document.querySelector("#seconds");

let year = prompt("Enter Year");
let month = prompt("Enter Month With Number");
let day = prompt("Enter Day");

function countDown() {
  let futureDate = new Date(year, month - 1, day);
  let currentDate = new Date();
  const diff = futureDate - currentDate;

  if (diff <= 0) {
    document.body.innerHTML = "<h1>დრო გავიდა</h1>";
    clearInterval(countdownInterval);
    return;
  }

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  daysitem.innerHTML = d;
  hoursitem.innerHTML = h < 10 ? "0" + h : h;
  minitem.innerHTML = m < 10 ? "0" + m : m;
  secitem.innerHTML = s < 10 ? "0" + s : s;
}

let countdownInterval = setInterval(countDown, 1000);
countDown();
