// Assignment Code
var generateBtn = document.querySelector("#generate");
var refreshBtn = document.querySelector("#refresh-btn");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
refreshBtn.addEventListener("click", pageReload);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to reload page
function pageReload() {
  onClick = window.location.reload();
}

// Function to generate a password
function generatePassword() {
  var password = "";

  // Prompt to decide the length of the password
  var passwordLength = enterPasswordLengthPrompt();
  if (passwordLength < 8) {
    alert("Password length too short - try again");
    // Exits if password is too short
    return;
  } else if (passwordLength > 128) {
    alert("Password length too long  - try again");
    // Exits if password is too long
    return;
  }

  // Show criteria selected & page refresh button
  document.getElementById("instructions").hidden = true;
  document.getElementById("refresh").hidden = false;
  document.getElementById("criteria").hidden = false;

  // Prompts to decide which characters are to be included in the password
  var passwordChar = userConfirmCriteria();
  if (passwordChar === "") {
    document.getElementById("criteria").hidden = true;
    alert("No criteria selected - Click Refresh Page button");
    // Exits if no criteria selected
    return;
  }


  for (var i = 0; i < passwordLength; i++) {
    password += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
  }

  //Password
  return password;
}

// Prompt to decide the length of the password
function enterPasswordLengthPrompt() {
  var numberEntered = Number(
    window.prompt(
      "Enter a length of at least 8 characters and no more than 128 characters",
      ""
    )
  );
  // Sets #password-length text field with user number entered
  document.getElementById("password-length").value = numberEntered;
  return numberEntered;
}

// Series of prompts and actions to execute if true

function userConfirmCriteria() {
  var passwordCharacters = "";

  lowercaseChar = confirm(
    "Click OK to confirm including lowercase characters."
  );
  if (lowercaseChar === true) {
    passwordCharacters += lowercaseCharacters;
    check(lowercaseChar, lowercase);
  }

  uppercaseChar = confirm(
    "Click OK to confirm including uppercase characters."
  );
  if (uppercaseChar === true) {
    passwordCharacters += uppercaseCharacters;
    check(uppercaseChar, uppercase);
  }

  numberChar = confirm("Click OK to confirm including numeric characters.");
  if (numberChar === true) {
    passwordCharacters += numberCharacters;
    check(numberChar, numeric);
  }

  specialChar = confirm("Click OK to confirm including special characters.");
  if (specialChar === true) {
    passwordCharacters += specialCharacters;
    check(specialChar, special);
  }

  return passwordCharacters;
}

// Function to check checkboxes
function check(x, y) {
  if (x === true && y === lowercase) {
    document.getElementById(lowercase).checked = true;
  } else if (x === true && y === uppercase) {
    document.getElementById(uppercase).checked = true;
  } else if (x === true && y === numeric) {
    document.getElementById(numeric).checked = true;
  } else if (x === true && y === special) {
    document.getElementById(special).checked = true;
  }
}

var lowercase = "lowercase";
var uppercase = "uppercase";
var numeric = "numeric";
var special = "special";
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
