/* OOP Inheritance */
// Learning Note: Inheritance allows a class (child) to inherit properties and methods from another class (parent).

class Vehicle {
    constructor(kind) {
        this.kind = kind;
    }

    drive() {
        console.log(`${this.kind} is driving`);
    }
}

// Use 'extends' to inherit from a parent class and 'super()' to call the parent constructor.
class Car extends Vehicle {
    constructor(kind, passengers) {
        super(kind);
        this.passengers = passengers;
    }

    carryPassengers() {
        console.log(`${this.kind} is carrying ${this.passengers} passengers`);
    }
}

const audiCar = new Car("Audi", 5);
audiCar.carryPassengers();
audiCar.drive(); // Inherited from Vehicle
console.log(audiCar);