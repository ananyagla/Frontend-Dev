// Promise-based version of the old callback function
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const failed = Math.random() < 0.2; 

            if (failed) {
                reject("Error: Unable to fetch bug list.");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}


getBugs()
    .then((bugs) => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch((err) => {
        console.log(err);
    });
