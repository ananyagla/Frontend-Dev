// variable for the user's name
let userName = "Ana";  

// current hour using Date object (0–23)
let currentHour = new Date().getHours();

// variable to store greeting message
let greetingMessage = "";

// greeting based on time of day
if (currentHour < 12) {
    greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
} else {
    greetingMessage = `Good Evening ${userName}!`;
}


console.log(greetingMessage);
