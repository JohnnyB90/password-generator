// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
     passwordText.value = password;
}


let charactersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let charactersSpecial = ["!", "@", "#", "$", "%", "^", "*"];

let charactersNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']


function generatePassword() {
    for (i=0; passwordLengthNum++; i++);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Click button to start sequence for generating password

if (confirm("Would you like to generate a password?") == true) {
    passwordLength = prompt("Between 8 and 128 characters, how long would you like the password to be?", "8-128");
}

    // parseInt changes string to number
    passwordLengthNum = parseInt(passwordLength);


 
