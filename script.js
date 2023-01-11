// Assignment Code

// 8-128 characters long
// Confirm whether or not to include lowrcase, upper, numeric, and/or special characters.
// Input should be validated & at least 1 character type should be selected.
// Afterwards, a password is displayed in an alert or written to the page.

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Generate Password button clicked.");

return "Password will go here.";
}

// Write password to the #password input, including the criteria: 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function getRandomLower () {
}
console.log(getRandomLower())


function getRandomUpper () {
}
console.log(getRandomUpper())


function getRandomNumber () {
}
console.log(getRandomNumber())


function getRandomSpecialCharacters () {
}
console.log(getRandomSpecialCharacters())

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
