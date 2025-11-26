function bookTicket(name, email, seats) {
    let nameRegex = /^[A-Za-z ]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!nameRegex.test(name)) {
        console.log("Invalid name");
        return;
    }

    if (!emailRegex.test(email)) {
        console.log("Invalid email");
        return;
    }

    if (seats < 1 || seats > 10) {
        console.log("Seats must be between 1 and 10");
        return;
    }

    let booking = {
        name: name,
        email: email,
        seats: seats
    };

    console.log("Ticket Booked:");
    console.log("Name:", booking.name);
    console.log("Email:", booking.email);
    console.log("Seats:", booking.seats);
}

bookTicket("Ananya", "ananya@example.com", 3);
