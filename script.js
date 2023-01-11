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
  // const generatePassword = (length, hasLowercase, hasUppercase, hasNumbers, hasSymbols,)
  passwordText.value = password;
}

// 1-RandomLower
let lower = "a"
function getRandomLower () {
  const lower = ["asdfghjklqwertyuiopzxcvbnm"];
  return String.fromCharCode(Math.floor(Math.random()) * 26 + 97);
}
console.log(getRandomLower())


// 2-RandomUpper
let upper = "A"
function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random()) * 26 + 65);
}
console.log(getRandomUpper())


// 3-RandomIntInclusive
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(0);
//   max - Math.floor(9);
//   return Math.floor(Math.random() * (max - min + 1) + min); 
// }
let number = "0"
function getRandomNumber () {
  const number = []
  return String.fromCharCode(Math.floor(Math.random()) * 26 + 48);

}

// 4-RandomSpecialCharacters
// THIS WORKS!!!!!!!!!!!!!!!!!!!!
let symbol = "?"
function getRandomSymbol () {
  //const characters = '~!@#$%^&*()_+=:;<>/?.,';
  const symbol = ["'", "~", "!", "@", "#", "$", "%", "^", "&", 
  "*", "(", ")", "+", "=", "<", ">", "/", "?"]
  return symbol[Math.floor(Math.random() * symbol.length)];
}


console.log(getRandomSymbol())

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
