//Variables set to allow for more flexability
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?'];
var lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var varsEmpty = [];
var varCombined = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

//Function to create password with prompt for selection length and parseInt to convert the string into a number
function passwordSelection() {
var selectLength = window.prompt("Please select a password length between 15-90")
var passwordLength = parseInt(selectLength);
//if isNan means if its not a number it will prompt user to add a number
if (isNaN(passwordLength)) {
  var selectLength = window.prompt("Please select a NUMBER between 15-90")
  var passwordLength = parseInt(selectLength);
  return
}

//If statement to ensure a number is selected between 15-90 otherwise an alert will appear
if (passwordLength < 15 || passwordLength > 90) {
    window.prompt("Invalid Selection. Please choose a NUMBER BETWEEN 15 and 90")
    var passwordLength = parseInt(selectLength);
    return
}
//window.confirm box to confirm selection without text area
if (passwordLength >= 15 || passwordLength <= 90) {
 var addSymbols = window.confirm("Include Symbols?")
 var addNumbers = window.confirm("Include Numbers?")
 var addUpperC = window.confirm("Include Upper Case Letters?")
 var addLowerC = window.confirm("Include Lower Case Letters")
 return
}

//If statements execute different options
if (addSymbols === true) {
varsEmpty.push(symbols)
}

if (addSymbols !== true) {
  numbers.push(upperCase)
}

if (addNumbers == true) {
  varsEmpty.push(numbers)
}

if (addNumbers !== true) {
  symbols.push(upperCase)
}

if (addUpperC == true) {
    varsEmpty.push(upperCase)
}

if (addUpperC !== true) {
  numbers.push(lowerCase)
}

if (addLowerC == true) {
      varsEmpty.push(lowerCase)
}
  
  if (addLowerC !== true) {
        numbers.push(upperCase)
}

if (addLowerC && addUpperC && addNumbers && addSymbols == true) {
        varCombined.push(upperCase, lowerCase, numbers, symbols)
}
var generatedPwd = ""
//function for random number
function randomNumber(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rdm = Math.random();
  return Math.floor(min*(1-rdm) + rdm*max)
}

//Function for the for loop
function randomNum(list) {
  return list[randomNum(list.length)]
}

//For loop to run through options and get random list items
for (var i = 0; i < passwordLength; i++) {
  var randomList = randomNum(varCombined);
  var randomSymbol = randomNum(randomEverything);
  generatedPwd += randomEverything
}
return generatedPwd
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwd = passwordSelection(15, 90);
  var passwordText = document.querySelector("#password");

  passwordText.value = pwd;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);