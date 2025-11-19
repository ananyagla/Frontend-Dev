//  random numbers between 1–20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// List of operators
let operators = ['+', '-', '*', '/'];

// Select a random operator
let randomOperator = operators[Math.floor(Math.random() * operators.length)];

// Calculate the correct answer using switch
let correctAnswer;

switch (randomOperator) {
    case '+':
        correctAnswer = num1 + num2;
        break;

    case '-':
        correctAnswer = num1 - num2;
        break;

    case '*':
        correctAnswer = num1 * num2;
        break;

    case '/':
        correctAnswer = (num1 / num2).toFixed(2); // Rounded to 2 decimals
        break;

    default:
        console.log("Invalid operator!");
}

// Display the question + correct answer
console.log(`Question: ${num1} ${randomOperator} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
