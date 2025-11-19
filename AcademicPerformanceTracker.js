let marks = [8, 5, 90, 6, 88];

// if Any subject < 35 → Detained
let hasFailSubject = marks.some(mark => mark < 35);

// total
let total = marks.reduce((sum, value) => sum + value, 0);

// Percentage
let percentage = (total / (marks.length * 100)) * 100;  // out of 100%

// Result using conditions
let result;

if (hasFailSubject) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50) {
    result = "Promoted";
} else {
    result = "Detained";
}


console.log("Total Marks:", total);
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Result:", result);
