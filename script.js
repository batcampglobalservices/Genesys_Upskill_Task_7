// My Mood Dashboard Project

// Get all elements we need
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const moodBox = document.getElementById("mood-box");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");
const toggleModeBtn = document.getElementById("toggleModeBtn");
const secretBtn = document.getElementById("secretBtn");
const secret = document.getElementById("secret");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();

  if (name) {
    greeting.textContent = `Hello, ${name}!`;
    greeting.style.color = "green";
    greeting.style.fontWeight = "bold";
  } else {
    greeting.textContent = "Hello, friend!";
    greeting.style.color = "black";
    greeting.style.fontWeight = "normal";
  }
});

growBtn.addEventListener("click", () => {
  const boxWidth = parseInt(getComputedStyle(moodBox).width);
  const boxHeight = parseInt(getComputedStyle(moodBox).height);

  moodBox.style.width = boxWidth + 20 + "px";
  moodBox.style.height = boxHeight + 20 + "px";
});

shrinkBtn.addEventListener("click", () => {
  const boxWidth = parseInt(getComputedStyle(moodBox).width);
  const boxHeight = parseInt(getComputedStyle(moodBox).height);

  if (boxWidth > 60 && boxHeight > 60) {
    moodBox.style.width = boxWidth - 20 + "px";
    moodBox.style.height = boxHeight - 20 + "px";
  }
});


let nightMode = false;

toggleModeBtn.addEventListener("click", () => {
  nightMode = !nightMode;

  if (nightMode) {
    document.body.style.backgroundColor = "#1c1c1c";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    greeting.style.innerText = "white";
    
  }
});

secretBtn.addEventListener("click", () => {
  if (secret.style.display === "none" || secret.style.display === "") {
    secret.style.display = "block";
    secretBtn.textContent = "Hide Secret";
  } else {
    secret.style.display = "none";
    secretBtn.textContent = "Show Secret";
  }
});

/*Question:
    What is the difference between .innerHTML and .innerText?

MY ANSWER:
    .innerHTML can read or add HTML tags inside an element which is targeted through DOM manipulation.
    .innerText only shows the text it ignores any HTML tags in side the value or text assigned to the element.
*/
