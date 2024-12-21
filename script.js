// FUNCTIONS TO HANDLE CALCULATIONS

function wordCounter(rawText) {
  let trimmedText = rawText.trim(); // removing whitespace before and after string
  if (trimmedText === "") return 0; // returning 0 if the input field is empty
  let spacedText = trimmedText.replace(/\s\s+/g, " "); // replacing multiple spaces, tabs, and newlines with single space
  let splitText = spacedText.split(/\s+/); // splitting string at any whitespace (spaces, tabs, newlines)
  return splitText.length;
}

function charCounter(rawText) {
  let trimmedText = rawText.trim();
  if (trimmedText === "") return 0;
  let noSpacesText = trimmedText.replace(/\s/g, "");
  return noSpacesText.length;
}

function charSpacesCounter(rawText) {
  let trimmedText = rawText.trim();
  let noNewLinesText = trimmedText.replace(/\r?\n/g, ""); // removing newlines
  if (noNewLinesText === "") return 0;
  return noNewLinesText.length;
}

function paraCounter(rawText) {
  let trimmedText = rawText.trim();
  if (trimmedText === "") return 0;
  let lines = trimmedText.split(/\r?\n/);
  let paragraphs = lines.filter((line) => line.trim() !== "");
  return paragraphs.length;
}

function commafy(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getYear() {
  const date = new Date();
  return date.getFullYear();
}

// DOM ELEMENTS

const wordCount = document.querySelector(".word-count");
const charCount = document.querySelector(".char-count");
const charSpacesCount = document.querySelector(".char-spaces-count");
const paraCount = document.querySelector(".para-count");
const textArea = document.querySelector(".input-field");
const button = document.querySelector(".reset-button");
const year = document.querySelector(".year");
year.textContent = getYear();

// HANDLING INPUT AND CHANGING VALUES ON HTML

textArea.addEventListener("input", () => {
  let inputText = textArea.value;
  wordCount.textContent = wordCounter(inputText);
  charCount.textContent = charCounter(inputText);
  charSpacesCount.textContent = charSpacesCounter(inputText);
  paraCount.textContent = paraCounter(inputText);
});

// HANDLING RESET BUTTON

button.addEventListener("click", () => {
  textArea.value = "";
  wordCount.textContent = 0;
  charCount.textContent = 0;
  charSpacesCount.textContent = 0;
  paraCount.textContent = 0;
});
