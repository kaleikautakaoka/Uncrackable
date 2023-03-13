//Variables set to allow for more flexability
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?'];
var lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var varsEmpty = [];
var varCombined = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

//Function to create password with prompt for selection length and parseInt to convert the string into a number
function passwordSelection() {
//var selectLength = prompt("Please select a password length between 15-90")
var passwordLength = parseInt(prompt("Please select a password length between 15-90"));
//if isNan means if its not a number it will prompt user to add a number
if (isNaN(passwordLength)) {
 alert("Please select a NUMBER between 15-90")
 return
}

//If statement to ensure a number is selected between 15-90 otherwise an alert will appear
if (passwordLength >= 15 || passwordLength < 90) {
    alert("Invalid Selection. Please choose a NUMBER BETWEEN 15 and 90")
    return
}

//confirm box to confirm selection without text area
 var addSymbols = confirm("Press Ok to include Symbols or cancel to exclude symbols")
 var addNumbers = confirm("Press Ok to include numbers or cancel to exclude numbers")
 var addUpperC = confirm("Press Ok to include uppercase or cancel to exclude uppercase")
 var addLowerC = confirm("Press Ok to include lowercase or cancel to exclude lowercase")


if ( addSymbols === false && 
     addNumbers === false &&
     addUpperC === false &&
     addLowerC === false 
) {
  alert("Must select an option")
  return
}

if (addSymbols === false && 
  addNumbers === true &&
  addUpperC === false &&
  addLowerC === false 
) {
Number(numbers.push(numbers))
return
}

var generatedPwd = ""
return generatedPwd
}

var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var pwd = passwordSelection();
  var passwordText = document.querySelector("#password");
  passwordText.value = pwd;
}

// //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
