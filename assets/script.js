// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Array of character possibilities
let charactersUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let charactersLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let charactersSpecial = ["!", "@", "#", "$", "%", "^", "*"];
let charactersNumbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Process anwsers to generate a password
function generatePassword() {
  var confirmed = confirm("Would you like to generate a random password?");
  var length =
    "How many characters between 8-128 would you like your password?";
  var uppercase = "Would you like to use Uppercase?";
  var lowercase = "Would you like to use Lowercase?";
  var numbers = "Would you like to use numbers?";
  var special = "Would you like to use special characters?";

  if (confirmed === true) {
    lengthAnwser = prompt(length);
    // parseInt changes string to number
    lengthAnwserNum = parseInt(lengthAnwser);
    upperAnwser = confirm(uppercase);
    lowerAnwser = confirm(lowercase);
    numbersAnwser = confirm(numbers);
    specialAnwser = confirm(special);
    characterChoice();
}
}
// Creation contains all characters being used based on users choice
var creation = [];

function randomize() {
  for (i = 0; creation < lengthAnwserNum; i++) {
    password = Math.floor(Math.random * creation.length);
    password.toString();
  }
}

// Pushes characters into creation array based on user choice
function characterChoice() {
  if (upperAnwser === true) {
    for (i = 0; i < charactersUpper.length; i++)
      creation.push(charactersUpper[i]);
  }
  if (lowerAnwser === true) {
    for (i = 0; i < charactersLower.length; i++)
      creation.push(charactersLower[i]);
  }
  if (specialAnwser === true) {
    for (i = 0; i < charactersSpecial.length; i++)
      creation.push(charactersSpecial[i]);
  }
  if (numbersAnwser === true) {
    for (i = 0; i < charactersNumbers.length; i++)
      creation.push(charactersNumbers[i]);
  }
}
