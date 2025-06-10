// Get the button element by its id
let button = document.getElementById("welcomeBtn");

// Get the paragraph element where we will show the message
let message = document.getElementById("welcomeMsg");

// Get the input element where the user types their name
let nameInput = document.getElementById("nameInput");

// Add a click event to the button
button.addEventListener("click", function() {
  // Get the name entered by the user
  let userName = nameInput.value;

  // If the input is empty, ask the user to enter their name
  if (userName === "") {
    message.textContent = "Please enter your name!";
  } else {
    // Show a fun personalized message
    message.textContent = "Welcome, " + userName + "! 🎉 You are awesome!";
  }

  // Clear the input field after clicking the button
  nameInput.value = "";
});