// Get references to the elements in the HTML
var generateButton = document.getElementById('generate');
var passwordField = document.getElementById('password');

// Function to generate a password based on the given criteria
function generatePassword(length, includeLower, includeUpper, includeNumeric, includeSpecial) {
  // Variable to store the characters that will be used to generate the password
  var characters = '';

  // Check if lowercase characters should be included
  if (includeLower) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
  }

  // Check if uppercase characters should be included
  if (includeUpper) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  // Check if numeric characters should be included
  if (includeNumeric) {
    characters += '0123456789';
  }

  // Check if special characters should be included
  if (includeSpecial) {
    characters += '!@#$%^&*()_+~`|}{[]\\:;?><,./-='; 
  }

  // Variable to store the generated password
  var password = '';

  // Generate the password by randomly selecting characters from the character set
  for (var i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password; // Return the generated password
}

// Function to prompt the user for password criteria and generate the password
function promptPasswordCriteria() {
  // Prompt the user to enter the desired password length
  var length = parseInt(prompt("Enter the desired password length (8-128):"));

  // Validate the password length
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Invalid length. Please enter a value between 8 and 128.");
    return;
  }

  // Prompt the user to include lowercase characters
  var includeLower = confirm("Include lowercase characters?");

  // Prompt the user to include uppercase characters
  var includeUpper = confirm("Include uppercase characters?");

  // Prompt the user to include numeric characters
  var includeNumeric = confirm("Include numeric characters?");

  // Prompt the user to include special characters
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return;
  }

  // Generate the password based on the selected criteria
  var password = generatePassword(length, includeLower, includeUpper, includeNumeric, includeSpecial);
  passwordField.value = password; // Display the generated password in the textarea
}

// Add event listener to the generate button
generateButton.addEventListener('click', promptPasswordCriteria);
