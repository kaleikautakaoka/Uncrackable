//Variables set to allow for more flexability
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?'];
var lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var varsEmpty = []

//Function to create password with prompt for selection length and parseInt to convert the string into a number
function passwordSelection() {
var selectLength = window.prompt("Please select a password length between 15-90")
var passwordLength = parseInt(selectLength);
//if isNan means if its not a number it will prompt user to add a number
if (isNaN(passwordLength)) {
  window.alert("Please select a NUMBER between 15-90")
  return
}

//If statement to ensure a number is selected between 15-90 otherwise an alert will appear
if (passwordLength < 15 || passwordLength > 90) {
    window.alert("Invalid Selection. Please choose a number between 15-90")
}
//window.confirm box to confirm selection without text area
if (passwordLength > 15 || passwordLength < 90) {
 var addSymbols = window.confirm("Include Symbols?")
 var addNumbers = window.confirm("Include Numbers?")
 var addUpperC = window.confirm("Include Upper Case Letters?")
 var addLowerC = window.confirm("Include Lower Case Letters")
}

if (addSymbols === true) {
varsEmpty.push(symbols)
return
}

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