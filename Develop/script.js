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

document.getElementById('generate').onclick = function alertBtnClicked() {
  confirm('We need to confirm your password criteria!')
};

// var specialCharacters = ["!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];