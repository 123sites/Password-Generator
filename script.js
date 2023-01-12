// Assignment Code

// 8-128 characters long
// Confirm whether or not to include lowrcase, upper, numeric, and/or special characters.
// Input should be validated & at least 1 character type should be selected.
// Afterwards, a password is displayed in an alert or written to the page.

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = prompt("Please choose how many characters you want it, between 8-128 characters in length.");
  console.log(passwordLength)
  let passwordLower = confirm ("Do you want at least 1 lowercase letter?");
  let passwordUpper = confirm ("Do you want at least 1 uppercase letter?");
  let passwordNumber = confirm ("Do you want at least 1 whole number between 0-9?");
  let passwordSymbol = confirm ("Do you want at least 1 symbol?");

//   let password=""

// password
//   confirm
//   forLoop (for 10 times)

  return password;
}


// Write password to the #password input, including the criteria:
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// 1-RandomLower
function RandomLower() {
  console.log("Lowercase letter: ");
}

function getRandomLower() {
  // const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code)); DELETE THIS
  const lower = ["asdfghjklqwertyuiopzxcvbnm"];
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
console.log(getRandomLower());

// 2-RandomUpper
function RandomLower() {
  console.log("Uppercase letter: ");
}

function getRandomUpper() {
  const upper = "ASDFGHJKLZXCVBNMQWERTYUIOP";
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
console.log(getRandomUpper());

// 3-RandomIntInclusive
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(0);
//   max - Math.floor(9);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

function getRandomNumber() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return numbers[Math.floor(Math.random() * numbers.length)];
}
console.log(getRandomNumber());
// Generate numbers 0-9, including 0 and 9

// 4-RandomSpecialCharacters
// THIS WORKS!!!!!!!!!!!!!!!!!!!!

function getRandomSymbol() {
  //const characters = '~!@#$%^&*()_+=:;<>/?.,';
  const symbols = [
    "'",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "=",
    "<",
    ">",
    "/",
    "?",
  ];
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
