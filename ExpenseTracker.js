// Order: food, travel, rent, bills
let expenses = [2500, 1200, 8000, 2000];

// Calculate total expenses
let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];  
}

// Calculate average expense
let average = total / expenses.length;

// Add 10% tax to total
let taxAmount = total * 0.10;
let totalAfterTax = total + taxAmount;

// Display results with toFixed(2)
console.log("Total Monthly Expense: ₹" + total.toFixed(2));
console.log("Average Expense Per Category: ₹" + average.toFixed(2));
console.log("Final Amount After 10% Tax: ₹" + totalAfterTax.toFixed(2));
