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
  var lowercaseChar = lowercaseCharacters();

  // Prompt to decide if uppercase characters are to be included in the password
  var uppercaseChar = uppercaseCharacters();

  // Prompt to decide if numeric characters are to be included in the password
  var numericChar = numericCharacters();

  // Prompt to decide if special characters are to be included in the password
  var specialChar = specialCharacters();

  //Password

};

// Prompt to decide the length of the password
function enterPasswordLengthPrompt() {
  var numberEntered = Number(window.prompt("Choose a length of at least 8 characters and no more than 128 characters", ""));
  console.log(numberEntered);
  if (numberEntered < 8) {
    alert("Password length too short");
  } else if (numberEntered > 128) {
    alert("Password length too long")
  } else {
    return numberEntered;
  }
};

// Prompt to decide if lowercase characters are to be included in the password
function lowercaseCharacters() {
  
};

// Prompt to decide if uppercase characters are to be included in the password
function uppercaseCharacters() {
  
};

// Prompt to decide if numeric characters are to be included in the password
function numericCharacters() {
  
};

// Prompt to decide if special characters are to be included in the password
function specialCharacters() {
  
};