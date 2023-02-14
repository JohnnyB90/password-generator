// Variable assignments
const generateBtn = document.querySelector("#generate");
const copyButton = document.querySelector("#copyButton");
const textToCopy = document.querySelector(".text-to-copy");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// An array of character possibilities
let charactersUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
let charactersLower = ["a","b","c","d","e","f","g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z",]
let charactersSpecial = ["!", "@", "#", "$", "%", "^", "*"]
let charactersNumbers = ["0","1","2","3","4","5","6","7","8","9"]

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
  const confirmed = confirm("Would you like to generate a random password?");
  const length ="How many characters between 8-128 would you like your password?";
  const uppercase = "Would you like to use Uppercase?";
  const lowercase = "Would you like to use Lowercase?";
  const numbers = "Would you like to use numbers?";
  const special = "Would you like to use special characters?const
// Confirmations to see what characters the users would like in their passwords.
  const answers = {};
  if (confirmed === true) {
    answers.lengthAnswer = prompt(length);
    answers.lengthAnswerNum = parseInt(answers['lengthAnswer']);
    if (!(answers.lengthAnswerNum >= 8 && answers.lengthAnswerNum <= 128))
      {alert("Must be between 8-128 characters!!")
    } else {
    answers['upperAnswer'] = confirm(uppercase);
    answers['lowerAnswer'] = confirm(lowercase);
    answers['numbersAnswer'] = confirm(numbers);
    answers['specialAnswer'] = confirm(special);
};

     const generatedPassword = characterChoice(answers);
    return generatedPassword;
  }
}

// Function to randomize the characters pushed into the creation array
function randomize(creation) {
  let randIndex = Math.floor(Math.random() * creation.length);
  let randElement = creation[randIndex];
  return randElement;
}


// Pushes characters into creation array based on user choice
// I google foo'd this to solve my issues with not being able to properly select/exclude characters. I had to find a way to effectively evaluate all
//potential options of true for the character choices.
// This function evaluates the choices of true between each set of character arrays and fills an empty array called selectedCharacters based on that.
function characterChoice(answers) {
  const characterOptions = [
    { characters: charactersUpper, enabled: answers.upperAnswer },
    { characters: charactersLower, enabled: answers.lowerAnswer },
    { characters: charactersSpecial, enabled: answers.specialAnswer },
    { characters: charactersNumbers, enabled: answers.numbersAnswer }
  ];

  const selectedCharacters = characterOptions.filter(option => option.enabled)
    .flatMap(option => option.characters);

  if (selectedCharacters.length === 0) {
    alert("You must select at least one type of character to include in your password!! Please hit generate password to try again.");
    return;
  }

  const password = Array.from({length: answers.lengthAnswerNum}, () => randomize(selectedCharacters)).join('');
  return password;
}




































