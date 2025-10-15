// script.js

// Part 1: Declaring and Invoking Functions

// Step 1: Declare a simple function
function greet(name) {
    return `Hello, ${name}!`;
}

// Step 2: Invoke the function
console.log("=== Part 1: Greet Function ===");
console.log(greet("Vivian"));
console.log(greet("Student"));

// Part 2: Working with Parameters and Returning Values

// Step 3: Create a function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log("\n=== Part 2: Add Numbers Function ===");
console.log(`5 + 3 = ${addNumbers(5, 3)}`);
console.log(`10 + 15 = ${addNumbers(10, 15)}`);

// Part 3: Function Scope

// Step 4: Local and Global Scope
let x = 10; // Global variable

function changeValue() {
    let x = 20; // This creates a new local variable with the same name
    console.log("Inside changeValue function, x =", x);
}

console.log("\n=== Part 3: Function Scope ===");
console.log("Before calling changeValue, global x =", x);
changeValue();
console.log("After calling changeValue, global x =", x); // Still 10

// Part 4: Closures

// Step 5: Create a function with closure
function outerFunction() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

console.log("\n=== Part 4: Closures ===");
const counter = outerFunction();
console.log("First call:", counter());
console.log("Second call:", counter());
console.log("Third call:", counter());

// Bonus Challenge

// Modify the greet function to provide a default greeting
function greetWithDefault(name = "Guest") {
    return `Hello, ${name}!`;
}

// Another closure example with different behavior
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

console.log("\n=== Bonus Challenge ===");
console.log("Greet with name:", greetWithDefault("Vivian"));
console.log("Greet with default:", greetWithDefault());

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double of 5:", double(5));
console.log("Triple of 5:", triple(5));

// Functions to test from HTML buttons
function testGreet() {
    console.log("=== Testing Greet Function ===");
    console.log(greet("Vivian"));
    console.log(greet("JavaScript Learner"));
}

function testAddNumbers() {
    console.log("=== Testing Add Numbers Function ===");
    console.log(`7 + 8 = ${addNumbers(7, 8)}`);
    console.log(`-5 + 10 = ${addNumbers(-5, 10)}`);
}

function testScope() {
    console.log("=== Testing Scope Behavior ===");
    let y = 100;
    console.log("Before function, y =", y);
    
    function testLocal() {
        let y = 200;
        console.log("Inside function, y =", y);
    }
    
    testLocal();
    console.log("After function, y =", y);
}

function testClosure() {
    console.log("=== Testing Closure Function ===");
    const newCounter = outerFunction();
    console.log("First call:", newCounter());
    console.log("Second call:", newCounter());
    console.log("Third call:", newCounter());
    console.log("Fourth call:", newCounter());
}

function testBonus() {
    console.log("=== Testing Bonus Functions ===");
    console.log("Greet with default (no parameter):", greetWithDefault());
    console.log("Greet with default (with parameter):", greetWithDefault("Developer"));
    
    const quadruple = createMultiplier(4);
    console.log("Quadruple of 3:", quadruple(3));
    console.log("Quadruple of 7:", quadruple(7));
}

// Initial console output when page loads
console.log("Lab 4: Introduction to Functions - JavaScript loaded successfully!");