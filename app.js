// Function to show time
function _12Hour() {
  // Creating new instance of Date object
  let time = new Date();

  // Getting the current hour, minute and second
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let am_pm = "PM";

  if (hour >= 0 && hour < 12 ) {
    am_pm = "AM";
  }
  // 12-Hour Format + AM/PM
  if (hour > 12) {
    hour -= 12;
  } else {
    hour = hour;
  }

  // Adding 0 when single digit
  hour = hour.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");

  // Inserting the current time in HTML
  let clock = document.querySelector("#format12");
  clock.innerText = `${hour}:${minute}:${second} ${am_pm}`;
}

// Interval of 1 second (1000 milliseconds)
setInterval(_12Hour, 1000);

function _24Hour() {
  let time = new Date();

  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  hour = hour.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");

  // Inserting the current time in HTML
  let clock = document.querySelector("#format24");
  clock.innerText = `${hour}:${minute}:${second}`;
  // console.log(`${hour}:${minute}:${second}`);
}

let hr12 = document.querySelector("#hr12");
let hr24 = document.querySelector("#hr24");

hr12.addEventListener('click', () => {
  // setInterval(_12Hour, 1000);
  document.querySelector("#format24").style.display = 'none';
  document.querySelector("#format12").style.display = 'block';
});

hr24.addEventListener('click', () => {
  setInterval(_24Hour, 1000);
  document.querySelector("#format24").style.display = 'block';
  document.querySelector("#format12").style.display = 'none';
});
