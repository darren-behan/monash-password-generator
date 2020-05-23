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

// Function to generate a password
function generatePassword() {
  // Message to continue to confirm criteria to build the password
  confirm("Let's confirm your criteria for your password");

  // Prompt to decide the length of the password
  var passwordLength = enterPasswordLengthPrompt();

  // Prompt to decide if lowercase characters are to be included in the password


  // Prompt to decide if uppercase characters are to be included in the password


  // Prompt to decide if numeric characters are to be included in the password


  // Prompt to decide if special characters are to be included in the password

  //Password

};

function enterPasswordLengthPrompt() {
  var lengthEntered = Number(window.prompt("Choose a length of at least 8 characters and no more than 128 characters", ""));
  console.log(lengthEntered);
  if (lengthEntered < 8) {
    alert("Password length too short");
  } else if (lengthEntered > 128) {
    alert("Password length too long")
  } else {
    return lengthEntered;
  }
};