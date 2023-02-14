// Variable assignments
var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector("#password");
var copyButton = document.querySelector("#copyButton");
var textToCopy = document.querySelector(".text-to-copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// An array of character possibilities
let charactersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let charactersLower = ["a","b","c","d","e","f","g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z",];
let charactersSpecial = ["!", "@", "#", "$", "%", "^", "*"];
let charactersNumbers = ["0","1","2","3","4","5","6","7","8","9","10",];

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Added an event listener to copy button with function to copy password
copyButton.addEventListener("click", function() {
textToCopy.select();
textToCopy.setSelectionRange(0, 99999); // For mobile devices
navigator.clipboard.writeText(textToCopy.value);
alert("Your password has been copied to the clipboard!!");
});

// Process anwsers to generate a password
function generatePassword() {
  var confirmed = confirm("Would you like to generate a random password?");
  var length ="How many characters between 8-128 would you like your password?";
  var uppercase = "Would you like to use Uppercase?";
  var lowercase = "Would you like to use Lowercase?";
  var numbers = "Would you like to use numbers?";
  var special = "Would you like to use special characters?";

// Confirmations to see what characters the users would like in their passwords.
  const answers = {};
  if (confirmed === true) {

    answers['lengthAnwser'] = prompt(length);
    answers['lengthAnwserNum'] = parseInt(answers['lengthAnwser']);
    if ((answers['lengthAnwserNum'] < 8) || (answers['lengthAnwserNum'] > 128) || (!answers['lengthAnwserNum'])){ 
      alert("Must be between 8-128 characters!!")
    } else {
    answers['upperAnwser'] = confirm(uppercase);
    answers['lowerAnwser'] = confirm(lowercase);
    answers['numbersAnwser'] = confirm(numbers);
    answers['specialAnwser'] = confirm(special);
};

     const generatedPassword = characterChoice(answers);
    return generatedPassword;
  }
}

// Function to randomize the characters pushed into the creation array
function randomize(creation) {
  var randIndex = Math.floor(Math.random() * creation.length);
  var randElement = creation[randIndex];
  return randElement;
}

// Creation contains all characters being used based on users choice
var creation = [];

// Pushes characters into creation array based on user choice
function characterChoice(answers) {
  if (answers.upperAnwser === true) {
    for (i = 0; i < charactersUpper.length; i++)
      creation.push(charactersUpper[i].toString());
  }
  if (answers.lowerAnwser === true) {
    for (i = 0; i < charactersLower.length; i++)
      creation.push(charactersLower[i].toString());
  }
  if (answers.specialAnwser === true) {
    for (i = 0; i < charactersSpecial.length; i++)
      creation.push(charactersSpecial[i].toString());
  }
  if (answers.numbersAnwser === true) {
    for (i = 0; i < charactersNumbers.length; i++)
      creation.push(charactersNumbers[i].toString());
  }
  console.log(creation);
  const password = [];
  for(i =0; i<answers.lengthAnwserNum; i++){
      const randomChar = randomize(creation);
      password.push(randomChar);
  }
  return password.join('');
  
}
