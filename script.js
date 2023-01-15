// Assignment Code

// 8-128 characters long
// Confirm whether or not to include lowrcase, upper, numeric, and/or special characters.
// Input should be validated & at least 1 character type should be selected.
// Afterwards, a password is displayed in an alert or written to the page.

var generateBtn = document.querySelector("#generate");

let userChoice = []
let finalPassword = []

function generatePassword() {
  let passwordLength = prompt("Please choose how many characters you want it, between 8-128 characters in length.");
  console.log("passwordLength: " + passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {

    let passwordLower = confirm("Do you want at least 1 lowercase letter?")
    console.log(passwordLower);
    if(passwordLower){
      userChoice.push(...RandomLower())
    }
    console.log(userChoice);


    let passwordUpper = confirm("Do you want at least 1 uppercase letter?")
    console.log(passwordUpper);
    if(passwordUpper){
      userChoice.push(...getRandomUpper())
    }
    console.log(userChoice);
    
    
    let passwordNumber = confirm("Do you want at least 1 whole number between 0-9?")
    console.log(passwordNumber);
    if(passwordNumber){
      userChoice.push(...getRandomNumber())
    }
    console.log(userChoice);
    
    let passwordSymbol = confirm("Do you want at least 1 symbol?")
    console.log(passwordSymbol)
    if(passwordSymbol){
      userChoice.push(...getRandomSymbol())
    }
    console.log(userChoice);
    if(userChoice.length < 1){
      alert('please choose at least one selection. To restart click on generate password button')
    }

    for (let i = 0; i < passwordLength; i++) {
      finalPassword.push(userChoice[Math.floor(Math.random() * userChoice.length)])
    }

  }
  else{
    alert('please follow instructions. To restart click on generate password button')
  }

  return finalPassword
}

// Write password to the #password input, including the criteria:
// 1-RandomLower
function RandomLower() {
  const lower = "asdfghjklqwertyuiopzxcvbnm";
  console.log(lower);
  return lower
}

function getRandomUpper() {
  const upper = "ASDFGHJKLZXCVBNMQWERTYUIOP";
  return upper
}

function getRandomNumber() {
  const numbers = "0123456789";
  return numbers
}

// Generate numbers 0-9, including 0 and 9
// 4-RandomSpecialCharacters
function getRandomSymbol() {
  const symbols = "'~!@#$%^&*()+=<>/?";
  return symbols
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



