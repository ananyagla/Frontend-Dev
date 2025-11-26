function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Water boiled") : reject("Boiling failed");
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Coffee brewed") : reject("Brewing failed");
        }, 1000);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve("Coffee poured") : reject("Pouring failed");
        }, 1000);
    });
}

boilWater()
    .then(res => {
        console.log(res);
        return brewCoffee();
    })
    .then(res => {
        console.log(res);
        return pourCoffee();
    })
    .then(res => {
        console.log(res);
        console.log("Coffee ready for the team!");
    })
    .catch(err => console.log("Error:", err));
