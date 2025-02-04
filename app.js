const button = document.getElementById("runaway-btn");
const h1 = document.querySelector("h1");
const yesBtn = document.getElementById("yes-btn");

// Array of messages to cycle through
const messages = [
  "WTF?",
  "eeeeeeej please!",
  "Seriøst?",
  "Kom nuuuuuu",
  "Jeg har heller aldrig kunne li' dig!",
  "Har altid vidst du var en taber",
  "Taber!!!",
  "Tænk på hvor sjovt vi kunne ha det",
  "Hvem har givet dig internetadgang?",
  "Okay, du mister venner på det her",
  "hvem spurgte også dig egentlig?",
  "Du er et levende bevis på, at fejl sker",
  "Selv en dør ville træffer bedre beslutninger end dig",
  "Din mor er så fed, at når hun falder i søvn, skifter tidszoner automatisk.",
  "Din mor er så stor, at Google Maps har markeret hende som et kontinent.",
  "Din mor er så fed, at hendes skygge har en skygge.",
  "Din mor er så grim, at selv blind folk nægter at røre ved hende.",
  "Din mor er så dum, at hun stirrede på en juicekarton i en time, fordi der stod 'Koncentreret'.",
  "Din mor er så grim, at selv blinde folk nægter at røre ved hende.",
  "Din mor er så fed, at hun bruger et satellitbillede som selfie.",
  "Kom nuuuuuu",
  "leg med mig!!!!!!!!!!!!!!!!",
  "Kom nuu",
  "Kom nuuu",
  "Kom nuuuuu",
  "KOM NUUUUUU!!!",
];
let messageIndex = 0; // Tracks the current message index

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc",
  });

// Function to handle runaway button movement and text changes
const handleRunaway = function () {
  if (button.disabled) return; // Stop if the button is disabled

  h1.textContent = messages[messageIndex]; // Change h1 text

  messageIndex = (messageIndex + 1) % messages.length; // Cycle through messages

  const top = getRandomNumber(window.innerHeight - this.offsetHeight);
  const left = getRandomNumber(window.innerWidth - this.offsetWidth);

  animateMove(this, "left", left).play();
  animateMove(this, "top", top).play();
};

// Attach event listeners to the "Nej" button
["mouseover", "click"].forEach((eventType) => {
  button.addEventListener(eventType, handleRunaway);
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

console.log("app.js is working!");

// Handle "Ja da!" button click
yesBtn.addEventListener("click", function () {
  h1.textContent = "Yaaaay! Gi' ham et kald. Han keder sig!"; // Change h1 text
  yesBtn.style.backgroundColor = "green"; // Change button color to green
  yesBtn.style.color = "white"; // Change text color for better contrast

  // Disable the "Nej" button and remove its ability to move
  button.disabled = true;
  button.style.opacity = "0.5"; // Make it look disabled
  button.style.cursor = "not-allowed"; // Change cursor to indicate it's disabled
});
