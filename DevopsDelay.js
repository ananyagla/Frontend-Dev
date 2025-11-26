function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Server A finished") : reject("Server A failed");
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Server B finished") : reject("Server B failed");
        }, 3000);
    });
}

Promise.race([serverA(), serverB()])
    .then(res => console.log("Fastest response:", res))
    .catch(err => console.log("Race Error:", err));

Promise.all([serverA(), serverB()])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(err => console.log("Error:", err));
