// variables of various data types
let userName = "Ananya";                     
let userAge = 20;                            
let isLoggedIn = true;                       
let hobbies = ["dancing", "music", "travel"]; 
let userProfile = { city: "Mathura", score: 95 };
let emptyValue = null;                       
let notAssigned;                             

// if statement to determine the type
let hobbiesType;

if (Array.isArray(hobbies)) {
    hobbiesType = "array";
} else {
    hobbiesType = typeof hobbies;
}

// report using console.table
console.table([
    {
        Label: "User Name",
        Value: userName,
        Type: typeof userName
    },
    {
        Label: "User Age",
        Value: userAge,
        Type: typeof userAge
    },
    {
        Label: "Is Logged In",
        Value: isLoggedIn,
        Type: typeof isLoggedIn
    },
    {
        Label: "Hobbies",
        Value: hobbies,
        Type: hobbiesType   
    },
    {
        Label: "User Profile",
        Value: userProfile,
        Type: typeof userProfile
    },
    {
        Label: "Empty Value",
        Value: emptyValue,
        Type: typeof emptyValue
    },
    {
        Label: "Not Assigned",
        Value: notAssigned,
        Type: typeof notAssigned
    }
]);
