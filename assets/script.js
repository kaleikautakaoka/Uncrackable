// Assignment Code: Create a function to generate a random item from the array

function getRandomItem(num) {
const randomIndex = Math.floor(Math.random() * num.length);
const item = num[randomIndex];

return item;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?'];
const lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const upperCase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const varscombined = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '?', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var addNumbers = window.confirm("Add numbers?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if (addNumbers === true) {
    allVars.push(numbers)
  }

  return
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);