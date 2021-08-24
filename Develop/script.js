var generateBtn = document.getElementById("generate");
var passwordText = document.getElementById("password");
var lowerEl = document.getElementById('lowercase')
var upperEl = document.getElementById('uppercase')
var characterEl = document.getElementById('character')
var lengthEl = document.getElementById('length')
var numberEl = document.getElementById('number')

const randomfunction = {
    lower: generateLower,
    upper: generateUpper,
    character: generateCharacter,
    number: generateNumber
};

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


function writePassword(lower, upper, number, character, length) {
    let writePassword = '';
    const select = lower + upper + number + character;
    const filtered = [ {lower}, { upper}, {number}, {character}].filter(item => Object.values(item)[0]);

    if (select === 0) {
        return '';
    }

    for (let i = 0; i < length; i += select) {
      filtered.forEach(type => {
        const key = Object.keys(type)[0];
        writePassword += randomfunction[key]();
      });
    }

    var password = writePassword.slice(0, length);
    return password;
  }

  generateBtn.addEventListener("click", function() {
    const length = lengthEl.value;
    const lowerSelection = lowerEl.checked;
    const upperSelection = upperEl.checked;
    const numberSelection = numberEl.checked;
    const characterSelection = characterEl.checked;

    if (length < 8 || length > 128) {
      length = prompt("Please enter the correct length of your password.")
    };
    
    passwordText.innerText = writePassword(lowerSelection, upperSelection, numberSelection, characterSelection, length);
  });

