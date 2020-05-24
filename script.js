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

// Add event listener to show criteria selected
generateBtn.addEventListener("click", function() {
  document.getElementById("instructions").hidden = true;
  document.getElementById("criteria").hidden = false;
}, false);

// Function to generate a password
function generatePassword() {
  // Message to continue to confirm criteria to build the password
  confirm("Let's confirm your criteria for your password");

  // Prompt to decide the length of the password
  var passwordLength = enterPasswordLengthPrompt();
  if (passwordLength < 8) {
    alert("Password length too short");
    // Exits if password is too short
    return;
  } else if (passwordLength > 128) {
    alert("Password length too long");
    // Exits if password is too long
    return;
  }

  // Prompt to decide if lowercase characters are to be included in the password
  var lowercaseChar = lowercaseCharactersPrompt();

  // Prompt to decide if uppercase characters are to be included in the password
  var uppercaseChar = uppercaseCharactersPrompt();

  // Prompt to decide if numeric characters are to be included in the password
  var numericChar = numericCharactersPrompt();

  // Prompt to decide if special characters are to be included in the password
  var specialChar = specialCharactersPrompt();

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

// Prompt to decide if lowercase characters are to be included in the password
function lowercaseCharactersPrompt() {
  var lowercaseChar = confirm(
    "Click OK to confirm including lowercase characters."
  );
  // Checks #lowercase checkbox if user selects true
  check(lowercaseChar, "lowercase");
  return lowercaseChar;
}

// Prompt to decide if uppercase characters are to be included in the password
function uppercaseCharactersPrompt() {
  var uppercaseChar = confirm(
    "Click OK to confirm including uppercase characters."
  );
  // Checks #uppercase checkbox if user selects true
  check(uppercaseChar, "uppercase");
  return uppercaseChar;
}

// Prompt to decide if numeric characters are to be included in the password
function numericCharactersPrompt() {
  var numericChar = confirm(
    "Click OK to confirm including numeric characters."
  );
  // Checks #numeric checkbox if user selects true
  check(numericChar, "numeric");
  return numericChar;
}

// Prompt to decide if special characters are to be included in the password
function specialCharactersPrompt() {
  var specialChar = confirm(
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
