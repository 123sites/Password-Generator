// Assignment Code

// 8-128 characters long
// Confirm whether or not to include lowrcase, upper, numeric, and/or special characters.
// Input should be validated & at least 1 character type should be selected.
// Afterwards, a password is displayed in an alert or written to the page.

var generateBtn = document.querySelector("#generate");
//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

function generatePassword(){
  console.log("Generate Password button clicked.");

 return "Password will go here.";
}

// Write password to the #password input, including the criteria: 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  const generatePassword = (length, hasLowercase, hasUppercase, hasNumbers, hasSymbols)
  passwordText.value = password;
}

// Generates password counter
function generatePassword(lower, upper, number, symbol, length) {
let generatePassword = '';
const typesCount = lower + upper + number + symbol;
console.log('typesCount: ', typesCount);
const typesArr = [{lower}, {upper}, {numer}, {symbol}]
console.log('typesArr:', typesArr);
}

// 1-RandomLower
let lower = "a"
function getRandomLower () {
  // const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code)); DELETE THIS
  const lower = ["asdfghjklqwertyuiopzxcvbnm"];
  return String.fromCharCode(Math.floor(Math.random()) * 26 + 97);
}
console.log(getRandomLower())


// 2-RandomUpper
let upper = "A"
function getRandomUpper () {
  const upper = ["ASDFGHJKLZXCVBNMQWERTYUIOP"]
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
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return numbers[Math.floor(Math.random()) * number.length];
}
console.log(getRandomNumber())

// 4-RandomSpecialCharacters
// THIS WORKS!!!!!!!!!!!!!!!!!!!!
let symbol = "?"
function getRandomSymbol () {
  //const characters = '~!@#$%^&*()_+=:;<>/?.,';
  const symbols = ["'", "~", "!", "@", "#", "$", "%", "^", "&", 
  "*", "(", ")", "+", "=", "<", ">", "/", "?"]
  return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(getRandomSymbol())

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
