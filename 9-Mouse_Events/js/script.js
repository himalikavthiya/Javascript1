//box-1
function changeSize(element) {
  element.originalSize = element.style.cssText;
  element.style.width = `${Math.floor(Math.random() * 280) + 50}px`;
  element.style.height = `${Math.floor(Math.random() * 280) + 50}px`;
  element.style.backgroundImage = "url('http://surl.li/hwdty')";
}
function restoreSize(element) {
  element.style.cssText = element.originalSize;
  element.style.backgroundImage = "";
}

//box-2 mouseover random color change
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  let color = getRandomColor();
  let box = document.getElementById("box-2");
  box.style.backgroundColor = color;
}

// box-3 display mouusehover text and img 
const images = ["1.png", "2.png", "3.png"];
const texts = [
  "Success quotes are inspirational sayings that motivate people to work hard and achieve goals.– Jack Dorsey",
  "However difficult life may seem, there is always something you can do and succeed at.” – Stephen Hawking",
  "Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.– Dwayne Johnson",
];

function showImage() {
  const image = document.getElementById("box-image");
  const text = document.getElementById("box-text");

  const randomIndex = Math.floor(Math.random() * images.length);

  image.src = images[randomIndex];
  text.textContent = texts[randomIndex];

  image.style.display = "block";
  text.style.display = "none";
}

function showText() {
  const image = document.getElementById("box-image");
  const text = document.getElementById("box-text");

  image.style.display = "none";
  text.style.display = "block";
}

//  startAutoplay button

let count = 0;
let intervalId;
function startAutoplay() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    intervalId = setInterval(() => {
      count++;
      if (count % 2 === 1) {
        changeSize(document.querySelector(".changesize"));
        changeColor(document.querySelector(".changeColor"));
        showImage(document.querySelector(".showImage-text"));
      } else {
        showText(document.querySelector(".showImage-text"));
      }
    }, 1000);
  }
}
//  stopAutoplay button
function stopAutoplay() {
  clearInterval(intervalId);
}
