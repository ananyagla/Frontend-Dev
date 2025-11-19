// Global variable
let bonus = 5000;  // This bonus is accessible everywhere in this file

// Function to calculate salary
function calculateSalary(isPermanent) {
    // Local variable (function scope)
    let salary = 40000;

    // Check employee status
    if (isPermanent === true) {
        salary = salary + bonus;   // Accessing global variable
    }

    // Print total salary inside the function
    console.log("Is Permanent:", isPermanent);
    console.log("Total Salary:", salary);
}

// Calling the function with different values
calculateSalary(true);   // Bonus added
calculateSalary(false);  // Bonus not added

// Demonstrating that global scope remains unchanged
console.log("Global Bonus After Function Calls:", bonus);
