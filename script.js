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
// 1-RandomLower
function getRandomLower () {
}
console.log(getRandomLower())

// 2-RandomUpper
function getRandomUpper () {
}
console.log(getRandomUpper())

// 3-RandomIntInclusive
function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max - Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

// 4-RandomSpecialCharacters
function getRandomSpecialCharacters () {
  const symbols = '~!@#$%^&*()_+=:;<>/?.,';
  return symbols(Math.floor(Math.random()))
}

console.log(getRandomSpecialCharacters())

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
