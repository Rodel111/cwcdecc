// script.js
const texts = ["| PORTFOLIO IN WS101", "And I'm glad to see my work."];
let index = 0;

function updateText() {
  const element = document.getElementById("typewriter-text");
  element.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(updateText, 4000); // Change text every 4 seconds
updateText(); // Initialize with the first text