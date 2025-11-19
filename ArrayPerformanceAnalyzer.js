// array of 8 random scores between 30 and 100
let scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

// Highest and lowest score
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Average score
let averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

// students who passed (score >= 50)
let passedCount = scores.filter(score => score >= 50).length;

// Final summary
console.log(`Scores: ${scores}`);
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Passed Students: ${passedCount}`);
