let secret = Math.floor(Math.random() * 50) + 1;
let userGuess = 25;

console.log("Secret: " + secret + " | Guess: " + userGuess);

if (userGuess === secret) {
    console.log("Correct guess!");
} else {
    // Check if within range of 3 using Math.abs
    if (Math.abs(secret - userGuess) <= 3) {
        console.log("Very close!");
    } else {
        // Nested condition for High/Low
        if (userGuess > secret) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
}