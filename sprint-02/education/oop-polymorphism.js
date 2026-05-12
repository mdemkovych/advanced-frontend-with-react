/* OOP Polymorphism */
// Learning Note: Polymorphism allows methods to do different things based on the object they are acting upon (Method Overriding).

class Vehicle {
    constructor(kind, speed) {
        this.kind = kind;
        this.speed = speed;
    }

    // A base method can be generic.
    drive(info = "") {
        const detail = info ? ` ${info}` : "";
        console.log(`${this.kind} is driving${detail}`);
    }
}

class Car extends Vehicle {
    constructor(kind, speed, passengers) {
        super(kind, speed);
        this.passengers = passengers;
    }

    // Overriding the parent's drive() method to add specific behavior.
    drive() {
        const additionalInfo = `Maximum speed: ${this.speed} km/h`;
        super.drive(additionalInfo); // Calling parent method with specific args
    }

    carryPassengers() {
        console.log(`${this.kind} is carrying ${this.passengers} passengers`);
    }
}

const mercedesSuv = new Car("Mercedes-Benz", 200, 7);
mercedesSuv.drive(); // Executes overridden method
mercedesSuv.carryPassengers();

class Square {
    constructor(side) {
        this.side = side;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}