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
// let value = RandomLower;

// passwordLength = confirm("");

// password
//   confirm
//   forLoop (for 10 times)

// Write password to the #password input, including the criteria:


// 1-RandomLower
function RandomLower() {
  const lower = "asdfghjklqwertyuiopzxcvbnm";
  console.log(lower);
  return lower
}
// function getRandomLower() {
//   const lower = ["asdfghjklqwertyuiopzxcvbnm"];
//   return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
// }
// console.log(getRandomLower());

// 2-RandomUpper
//function RandomUpper() {
 // console.log("Uppercase letter: ");
//}

function getRandomUpper() {
  const upper = "ASDFGHJKLZXCVBNMQWERTYUIOP";
  return upper
  //return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
//console.log(getRandomUpper());

function getRandomNumber() {
  const numbers = "0123456789";
  return numbers
  //return numbers[Math.floor(Math.random() * numbers.length)];
}

// Generate numbers 0-9, including 0 and 9
//console.log(getRandomNumber());


// 4-RandomSpecialCharacters
function getRandomSymbol() {
  const symbols = "'~!@#$%^&*()+=<>/?";
  return symbols
  //return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomSymbol());
  


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



