/* OOP Prototype Inheritance */
// Learning Note: JavaScript uses prototype-based inheritance. Every object has a prototype property that allows it to inherit methods.

// 1. Function constructor + prototype method (Classical approach)
function Vehicle(model, speed) {
    this.model = model;
    this.speed = speed;
}

// Attaching methods to the prototype ensures they are shared across all instances.
Vehicle.prototype.drive = function () {
    console.log(`${this.model} is driving`);
}

const basicVehicle = new Vehicle("Volvo", 100);
console.log(basicVehicle)
basicVehicle.drive();


// 2. Class syntax = "Syntactic Sugar" over prototypes
// The 'class' keyword provides a cleaner syntax but still works on prototypes under the hood.
class MotorVehicle {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }

    drive() {
        console.log(`${this.model} is driving`);
    }
}

class FlyingVehicle extends MotorVehicle {
    constructor(model, speed) {
        super(model, speed);
    }

    takeOff() {
        console.log(`${this.model} is taking off`);
    }
}

const standardVehicle = new MotorVehicle("Hyundai", 100);
console.log(standardVehicle);
standardVehicle.drive();

const advancedVehicle = new FlyingVehicle("Sky-Track", 400);
console.log(advancedVehicle)
advancedVehicle.drive();
advancedVehicle.takeOff();


// 3. Inheritance with function constructors
function Car(model, speed, passengers) {
    console.log("Car");
    console.log(this);

    // Borrow constructor logic from Vehicle
    // call() runs the parent constructor in the context of the child instance.
    Vehicle.call(this, model, speed);
    this.passengers = passengers;
    console.log(this);
}

const car = new Car("BMW", 300, 5)
console.log(car);
console.log("---------");
basicVehicle.drive();

// At this point car.drive() will NOT work yet
// Because Vehicle.call(...) copies only instance props,
// but drive() is on Vehicle.prototype, not inside constructor
try {
    car.drive();
} catch (error) {
    console.log('An error occurred: ' + error.message);
}

// Proper prototype inheritance
Car.prototype = Object.create(Vehicle.prototype);
// Re-setting the constructor property to point back to the child class.
Car.prototype.constructor = Car;

const myAudi = new Car("Audi", 200, 4);
console.log(myAudi);
console.log(myAudi instanceof Car);
console.log(myAudi.constructor.name);
myAudi.drive(); // works through the prototype chain


// 4. Exploring this, arguments, and type checking
function logInstanceInfo({ model, speed, passengers }) {
    // 'arguments' contains all parameters passed to the function.
    console.log("Arguments:", arguments);
    console.log("Constructor Name:", arguments[0].constructor.name);

    // Object.prototype.toString.call() provides a reliable detailed type check.
    console.log("Detailed Type:", Object.prototype.toString.call(arguments[0]));
    console.log("Keys:", Object.keys(arguments[0]));

    return `${model} at ${speed} km/h`;
}

console.log(logInstanceInfo(myAudi));


// 5. Prototype method override
function Animal(name) {
    this.name = name;
}

Animal.prototype.say = function () {
    console.log(`I am ${this.name}`);
}

const dogInstance = new Animal("Dog");
const catInstance = new Animal("Cat");

// Overriding a prototype method for a specific instance by adding a direct property.
dogInstance.say = function () {
    console.log(`I am ${this.name} and I am a dog`);
}

dogInstance.say(); // Instance method called
catInstance.say(); // Prototype method called