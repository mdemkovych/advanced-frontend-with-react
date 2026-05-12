/* OOP Encapsulation */
// Learning Note: Encapsulation involves bundling data and methods that operate on that data within a single unit, and restricting access to some components.

// Function-constructor-based Object creation
function Employee(name, experience) {
    // Public instance properties
    this.name = name;
    this.experience = experience;

    // Private local variable (Closure-based encapsulation)
    // Variables declared with 'let/const' inside a constructor are not accessible outside.
    let privateBaseSalary = 2000;

    // Public instance method accessing private data via closure
    // Each created object gets its own copy of this method
    // Useful when method needs access to private local variables via closure
    this.calculatePrivateSalary = function () {
        return privateBaseSalary * (1 + this.experience / 5);
    };
}

// Static property (Shared for all instances)
// Belongs to constructor itself, not to created objects
Employee.baseSalary = 2000;

// Static method
Employee.calculateSalary = function(experience) {
    return Employee.baseSalary * (1 + experience / 5);
};

// Quick rule:
// Employee.value            -> static
// Employee.prototype.value  -> instance (shared)

// Prototype method
// Learning Note: Methods on the prototype are memory-efficient as they are shared across all instances.
Employee.prototype.getDetails = function () {
    return `Name: ${this.name}, Experience: ${this.experience}, Salary: ${this.calculatePrivateSalary()}`;
};

const empInstance = new Employee("Maksym", 1);
console.log(empInstance.getDetails());
console.log(empInstance.calculatePrivateSalary())
console.log(Employee);
console.log(Employee.calculateSalary(5));

// Class-based Object creation (Modern approach)
class Employee2 {
    // Static private fields (prefixed with #) are accessible only within the class.
    static #baseSalary = 1000;
    static minSalary = 200;

    // Private instance field to store the name securely
    #name;

    // Public instance field
    // Each object gets this property automatically
    greet = "Hello World";

    constructor(name, experience) {
        // We use the setter here to ensure the initial name is validated
        this.employeeName = name;
        this.experience = experience;
    }

    calculateSalary() {
        return Employee2.#baseSalary * (1 + this.experience/5);
    }

    getDetails() {
        // Note: we use this.employeeName (the getter) to retrieve the name
        return `Name: ${this.employeeName}, Experience: ${this.experience}, Salary: ${this.calculateSalary()}`;
    }

    static getGeneralGreeting() {
        return "Hello";
    }

    // GETTER: Provides controlled access to the private #name field.
    // It allows reading the property like a normal variable: modernEmp.employeeName
    get employeeName() {
        return this.#name;
    }

    // SETTER: Allows changing the private #name field with extra logic or validation.
    // It intercepts the assignment: modernEmp.employeeName = "Maks"
    set employeeName(newName) {
        if (typeof newName === "string" && newName.length > 0) {
            this.#name = newName;
        } else {
            console.error("Invalid name: Name must be a non-empty string.");
        }
    }
}

const modernEmp = new Employee2("Maksym", 1);
console.log(modernEmp);
console.log(modernEmp.greet)
console.log(modernEmp.getDetails());
console.log(Employee2.getGeneralGreeting());
console.log(Employee2.minSalary);

// SETTER CALL:
// We use the assignment operator '=' instead of calling it like a function.
modernEmp.employeeName = "Maks";

// GETTER CALL:
// Note: We do NOT use parentheses () here because a getter behaves like a property, not a method.
console.log(modernEmp.employeeName); // call getter without ()