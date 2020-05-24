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
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz",
  uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberCharacters = "0123456789",
  specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  passwordCharacters = "",
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
  
  // Prompt to decide if lowercase characters are to be included in the password
  var lowercaseChar = userConfirmLowercase();
  // If lowercase is confirmed for use, assign the lowercaseCharacters variable to the passwordCharacters
  if (lowercaseChar === true) {
    passwordCharacters += lowercaseCharacters;
  }

  // Prompt to decide if uppercase characters are to be included in the password
  var uppercaseChar = userConfirmUppercase()
  // If lowercase is confirmed for use, assign the uppercaseCharacters variable to the passwordCharacters
  if (uppercaseChar === true) {
    passwordCharacters += uppercaseCharacters;
  }

  // Prompt to decide if numeric characters are to be included in the password
  var numberChar = userConfirmNumberChar()
  // If lowercase is confirmed for use, assign the numberCharacters variable to the passwordCharacters
  if (numberChar === true) {
    passwordCharacters += numberCharacters;
  }

  // Prompt to decide if special characters are to be included in the password
  var specialChar = userConfirmSpecialChar()
  // If lowercase is confirmed for use, assign the specialCharacters variable to the passwordCharacters
  if (specialChar === true) {
    passwordCharacters += specialCharacters;
  }

  password += passwordCharacters;

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

function userConfirmLowercase() {
  lowercaseChar = confirm(
    "Click OK to confirm including lowercase characters."
  );
  // Checks #lowercase checkbox if user selects true
  check(lowercaseChar, "lowercase");
  return lowercaseChar;
}

function userConfirmUppercase() {
  uppercaseChar = confirm(
    "Click OK to confirm including uppercase characters."
  );
  // Checks #uppercase checkbox if user selects true
  check(uppercaseChar, "uppercase");
  return uppercaseChar;
}

function userConfirmNumberChar() {
  numberChar = confirm(
    "Click OK to confirm including numeric characters."
  );
  // Checks #numeric checkbox if user selects true
  check(numberChar, "numeric");
  return numberChar;
}

function userConfirmSpecialChar() {
  specialChar = confirm(
    "Click OK to confirm including special characters."
  );
  // Checks #special checkbox if user selects true
  check(specialChar, "special");
  return specialChar;
}

// Function to check checkboxes
function check(x, y) {
  if (x === true && y === "lowercase") {
    document.getElementById("lowercase").checked = true;
  } else if (x === true && y === "uppercase") {
    document.getElementById("uppercase").checked = true;
  } else if (x === true && y === "numeric") {
    document.getElementById("numeric").checked = true;
  } else if (x === true && y === "special") {
    document.getElementById("special").checked = true;
  }
}