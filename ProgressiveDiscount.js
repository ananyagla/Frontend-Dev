// Q6. Progressive Discount System

// Input: Total purchase amount
let totalPurchase = 6500; 
let discountPercentage = 0;

// Logic: Determine discount percentage
if (totalPurchase >= 10000) {
    discountPercentage = 25
} else if (totalPurchase >= 5000) {
    discountPercentage = 15
} else if (totalPurchase >= 2000) {
    discountPercentage = 5
} else {
    discountPercentage = 0
}

// Calculations
let discountAmount = (totalPurchase * discountPercentage) / 100;
let finalPrice = totalPurchase - discountAmount;

// Output
console.log("Original Total: " + totalPurchase);
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Final Price: " + Math.round(finalPrice));