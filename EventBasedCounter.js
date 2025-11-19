// Initial counter value
let count = 0;

// Increment function
function increment() {

    // Nested function to update count
    function update() {
        count = count + 1;
    }

    update(); // calling nested function
    console.log("Count after increment:", count);
}

// Decrement function
function decrement() {

    // Nested function to update count
    function update() {
        count = count - 1;
    }

    update(); // calling nested function
    console.log("Count after decrement:", count);
}

// Simulating click events
increment(); // click 1
increment(); // click 2
decrement(); // click 3
increment(); // click 4
