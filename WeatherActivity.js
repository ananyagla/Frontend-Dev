let temperature = 20;      
let isRaining = true;     
let windSpeed = 25;        
//  Rain checks
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} 
// Extreme Heat 
else if (temperature > 35) {
    console.log("Go swimming.");
} 
//  Cold AND Windy
// (AND) operator. Both conditions must be true.
else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} 
// Default condition
else {
    console.log("Perfect day for a walk.");
}