var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberic = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', '[', ']', '{', '}', ';', ':', '"', ',', '<', '>', '.', '/', '?', '|'];


function getPassword() {
    var length = parseInt(
        window.prompt('How many characters would you like your password to have?')

    );
}

if (length < 8) {
    alert('The password must be at least 8 characters');
}

if (length > 128) {
    alert('The password must be less than 129 characters');
}

var confirmLowerCase = confirm('Click OK to confirm including lowercase characters.');
var confirmUpperCase = confirm('Click OK to confirm including uppercase characters.');
var confirmNumber = confirm('Click OK to confirm including numeric characters.');
var confirmSpecialCharacter = confirm('Click OK to confirm including special characters.');

if (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmNumber === false &&
    confirmSpecialCharacter === false 
) 
{
    alert('Please select at least one option');
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
