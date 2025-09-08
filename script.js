// PART 1: JavaScript Basics
// Ask the user for their name and age
let userName = prompt("What's your name?");
let userAge = prompt("How old are you?");

// Convert age from string to number
userAge = Number(userAge);

// Use if/else to check age and show a message
if (userAge >= 18) {
  console.log("Hi " + userName + ", you're an adult.");
} else {
  console.log("Hi " + userName + ", you're still a minor.");
}

// PART 2: Functions
// A function to calculate total price with tax
function getTotalPrice(price, taxRate) {
  let total = price + (price * taxRate);
  return total;
}

// Call the function and show the result
let finalPrice = getTotalPrice(100, 0.1); // 10% tax
console.log("Total price is: " + finalPrice);

// A function to create a greeting message
function sayHello(name) {
  return "Hello, " + name + "! Welcome to JavaScript.";
}
// Show the greeting on the webpage
let outputBox = document.getElementById("output");
outputBox.textContent = sayHello(userName);

// PART 3: Loops
// Loop 1: Count down from 5 to 0
for (let i = 5; i >= 0; i--) {
  console.log("Countdown: " + i);
}

// Loop 2: Go through a list of colors
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("Color " + (i + 1) + ": " + colors[i]);
}

// PART 4: DOM Manipulation
// Change the greeting text when button is clicked
let toggleButton = document.getElementById("toggleBtn");
let greetingText = document.getElementById("greeting");

toggleButton.addEventListener("click", function () {
  // Toggle the "hidden" class to show/hide the greeting
  greetingText.classList.toggle("hidden");
});

// Add a new paragraph to the page
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added with JavaScript!";
document.body.appendChild(newParagraph);

// Change the color of the output text
outputBox.style.color = "blue";
