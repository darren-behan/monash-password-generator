// Assignment Code
var generateBtn = document.querySelector("#generate");
var refreshBtn = document.querySelector("#refresh");

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
  onClick=window.location.reload();
}

// Function to generate a password
function generatePassword() {
  password = "";

  // Message to continue to confirm criteria to build the password
  var confirm = userConfirmation();
  if (confirm === false) {
    return;
  }

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

  // Show criteria selected
  if (confirm === true) {
    document.getElementById("instructions").hidden = true;
    document.getElementById("criteria").hidden = false;
  }
  
  // Prompts to decide which characters are to be included in the password
  var passwordChar = userConfirmCriteria();

  for (var i = 0; i < passwordLength; i++) {
    password += passwordChar.charAt(
      Math.random() * passwordChar.length
    )
  }

  //Password
  return password;
}

// Confirmation that the user wants to continue
function userConfirmation() {
  var confirmation = confirm(
    "Let's confirm your criteria for your password"
  );
  return confirmation;
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

// Prompts to decide which characters are to be included in the password

function userConfirmCriteria() {
  lowercaseChar = confirm(
    "Click OK to confirm including lowercase characters."
  );
  // Checks #lowercase checkbox if user selects true
  check(lowercaseChar, lowercase);

  uppercaseChar = confirm(
    "Click OK to confirm including uppercase characters."
  );
  // Checks #uppercase checkbox if user selects true
  check(uppercaseChar, uppercase);

  numberChar = confirm(
    "Click OK to confirm including numeric characters."
  );
  // Checks #numeric checkbox if user selects true
  check(numberChar, numeric);

  specialChar = confirm(
    "Click OK to confirm including special characters."
  );
  // Checks #special checkbox if user selects true
  check(specialChar, special);

  // If lowercase is confirmed for use, assign the lowercaseCharacters variable to the passwordCharacters
  if (lowercaseChar === true) {
    passwordCharacters += lowercaseCharacters;
  }

  if (uppercaseChar === true) {
    passwordCharacters += uppercaseCharacters;
  }

  if (numberChar === true) {
    passwordCharacters += numberCharacters;
  }

  if (specialChar === true) {
    passwordCharacters += specialCharacters;
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
passwordCharacters = "";