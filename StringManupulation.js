// Original product name with unwanted spaces and uppercase text
let productName = " wireless headphones PRO ";

// Trim extra spaces
let trimmedName = productName.trim();

// Convert to lowercase
let lowerCaseName = trimmedName.toLowerCase();

// Capitalize first letter of each word using split → map → join
let formattedName = lowerCaseName
    .split(" ")
    .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

// Replace "Pro" with "Pro Edition"
let finalTitle = formattedName.replace("Pro", "Pro Edition");

// Display cleaned title and its length
console.log("Cleaned Product Title:", finalTitle);
console.log("Title Length:", finalTitle.length);
