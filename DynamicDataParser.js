"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Arrays to store valid and invalid numbers
let validNumbers = [];
let invalidNumbers = [];

console.log("Dynamic Data Parser Report");

// Loop through each value
for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];

    // Convert to Number
    let numValue = Number(value);

    // Convert to Boolean
    let boolValue = Boolean(value);

    // Convert to String
    let strValue = String(value);

    console.log(`Original: ${value}`);
    console.log(`→ Number: ${numValue}`);
    console.log(`→ Boolean: ${boolValue}`);
    console.log(`→ String: "${strValue}"`);

    // Check if the number is valid
    if (!isNaN(numValue) && value !== " " && value !== "100px") {
        // VALID number
        validNumbers.push(numValue);
        console.log("Valid number");
    } else {
        // INVALID number
        invalidNumbers.push(value);
        console.log("Invalid number");
    }

    console.log("");
}

console.log("Summary");
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Entries:", invalidNumbers);
