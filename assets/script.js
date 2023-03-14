//Variables set to allow for more flexability
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "`", "-", "="];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var combineChar = [];

//Function for random number
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rdm = Math.random();
  return Math.floor(min*(1-rdm) + rdm*max)
}

//Create a list for randomInt and use it in the for loop at the end
function createList(list) {
  return list[randomInt(list.length)]
}

//Function to create password with prompt for selection length and parseInt to convert the string into a number
function passwordSelection() {
  //var selectLength = prompt("Please select a password length between 15-90")
  var passwordLength = parseInt(
    prompt("Please select a password length between 15-90")
  );
  //if isNan means if its not a number it will prompt user to add a number
  if (isNaN(passwordLength)) {
    alert("Please select a NUMBER between 15-90");
    return;
  }

  //If statement to ensure a number is selected between 15-90 otherwise an alert will appear
  if (passwordLength < 15 || passwordLength > 90) {
    alert("Invalid Selection. Please choose a NUMBER BETWEEN 15 and 90");
    return;
  }

  //confirm box to confirm selection without text area
  var addSymbols = confirm(
    "Press Ok to include Symbols or cancel to exclude symbols"
  );
  var addNumbers = confirm(
    "Press Ok to include numbers or cancel to exclude numbers"
  );
  var addUpperC = confirm(
    "Press Ok to include uppercase or cancel to exclude uppercase"
  );
  var addLowerC = confirm(
    "Press Ok to include lowercase or cancel to exclude lowercase"
  );

console.log(addSymbols, addNumbers, addLowerC, addUpperC)
  if (
    addSymbols === false &&
    addNumbers === false &&
    addUpperC === false &&
    addLowerC === false
  ) {
    alert("Must select an option");
    return;
  }

 if (addSymbols) {
    combineChar.push(symbols);
    console.log(combineChar)
 }

 if (addNumbers) {
  combineChar.push(numbers);
  console.log(combineChar)
}

if (addUpperC) {
  combineChar.push(upperCase);
  console.log(combineChar)
}

if (addLowerC) {
  combineChar.push(lowerCase);
  console.log(combineChar)
}

  var generatedPwd = ""
    //For loop to run through options and get random list items
 for (var i = 0; i < passwordLength; i++) {
  var genList = createList(combineChar);
  var randomSpecl = createList(genList);
  generatedPwd += randomSpecl
 }
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
