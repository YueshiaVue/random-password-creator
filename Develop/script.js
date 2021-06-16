var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", "`", "[", "]", "{", "}", ";", ":", '"', ",", "<", ">", ".", "/", "?", "|"];

function getPassword() {
    var length = parseInt(prompt("How many characters would you like your password to have?"));

    if (Number.isNaN(length)) {
        alert("Password length must be provided as a number");
        return null;
    }

    if (length < 8) {
        alert("The password must be at least 8 characters");
        return null;
    }

    if (length > 128) {
        alert("The password must be less than 129 characters");
        return null;
    }

    var confirmLowerCase = confirm("Click OK to confirm including lowercase characters.");
    var confirmUpperCase = confirm("Click OK to confirm including uppercase characters.");
    var confirmNumeric = confirm("Click OK to confirm including numeric characters.");
    var confirmSpecialCharacter = confirm("Click OK to confirm including special characters.");

    if (confirmLowerCase === false && 
        confirmUpperCase === false && 
        confirmNumeric === false && 
        confirmSpecialCharacter === false) {
        alert("Please select at least one option");
        return null;
    }

    var passwordOptions = {
        length: length,
        confirmLowerCase: confirmLowerCase,
        confirmUpperCase: confirmUpperCase,
        confirmNumeric: confirmNumeric,
        confirmSpecialCharacter: confirmSpecialCharacter,
    };
    return passwordOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

function generatePassword() {
    var options = getPassword();
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    if (!options) return null;

    if (options.confirmLowerCase) {
        possibleCharacters = possibleCharacters.concat(LowerCase);
        guaranteedCharacters.push(getRandom(LowerCase));
    }

    if (options.confirmUpperCase) {
        possibleCharacters = possibleCharacters.concat(UpperCase);
        guaranteedCharacters.push(getRandom(UpperCase));
    }

    if (options.confirmNumeric) {
        possibleCharacters = possibleCharacters.concat(Numeric);
        guaranteedCharacters.push(getRandom(Numeric));
    }

    if (options.confirmSpecialCharacter) {
        possibleCharacters = possibleCharacters.concat(specialCharacter);
        guaranteedCharacters.push(getRandom(specialCharacter));
    }

    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);
        result.push(possibleCharacter);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }

    return result.join('');
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
