// ~~ Part 2: ~~
// Creates a variable called "greeting" and stores a greeting string within it.
var greeting = "Hello, World!";

// A function that displays the greeting variable to the browser's console.
function displayGreeting() {
    // Logs the greeting variable to the console.
    console.log(greeting);
}

// Calls the displayGreeting function.
displayGreeting();

// ~~ Part 3: ~~
// Creates new variables for two numbers.
var num1 = 5;
var num2 = 17;

// A function to calculate the sum of two passed-in parameters and returns the calculated results.
function calculateSum(a, b) {
    // Creates a let variable, adds the two prarameters being passed-in together, and stores the results in the variable.
    let c = a + b;
    // Returns the calculated value.
    return c;
}

// Calls the calculateSum function by passing-in the variables num1 and num2, and then logs the function's return to the console.
console.log(calculateSum(num1, num2));