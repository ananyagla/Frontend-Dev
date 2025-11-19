// Security condition variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Access is secure only when ALL conditions are true
let isSecure =
    isDoorLocked &&
    isWindowClosed &&
    isAlarmOn &&
    isOwnerInside;

// Print result
if (isSecure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// with different scenarios
isOwnerInside = false;
isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;
console.log("After changing owner status:", isSecure ? "Secure" : "Unsafe");
