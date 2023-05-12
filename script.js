let dvd = document.getElementById("dvd");
let body = document.body;
let maxX = window.innerWidth - dvd.offsetWidth;
let maxY = window.innerHeight - dvd.offsetHeight;


function randomTo(num) {
  return Math.floor(Math.random() * num);
}

let x = randomTo(maxX);
let y = randomTo(maxY);
let dx = 5;
let dy = 5;

// Randomize the initial angle of the square
if (Math.random() > 0.5) {
  dx = -dx;
}
if (Math.random() > 0.5) {
  dy = -dy;
}

function moveDvd() {
  x += dx;
  y += dy;
  if (x < 0 || x > maxX-5) {
    dx = -dx;
    dvd.style.filter = `invert(1) sepia(100%) saturate(10000%) hue-rotate(${randomTo(360)}deg)`;
  }
  if (y < 0 || y > maxY-5) {
    dy = -dy;
    dvd.style.filter = `invert(1) sepia(100%) saturate(10000%) hue-rotate(${randomTo(360)}deg)`;
  }
  dvd.style.left = x + "px";
  dvd.style.top = y + "px";

    
}
setInterval(moveDvd, 20);
