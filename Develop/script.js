// Assignment Code
var generateBtn = document.querySelector("generate");
var passwordText = document.querySelector("password");

function generateLower() {
    var lower = 'abcdefghijklmnopqrstuvwxyz'
    return lower[Math.floor(Math.random() * 26)]
}

function generateUpper() {
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return upper[Math.floor(Math.random() * 26)]
}

function generateCharacter() {
    var character = '~!@#$%^&*()_+=?><'
    return character[Math.floor(Math.random() * character.length)]
}

function generateNumber() {
    return Math.floor(Math.random() * 10)
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
