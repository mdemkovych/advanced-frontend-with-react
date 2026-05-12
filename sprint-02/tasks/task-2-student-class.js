/* Implement the Student class, the constructor of which accepts 2 parameters
fullName - the name and surname of the student,
direction - the direction in which he studies and save them in privete fields.

Create a getFullName() method that returns the student's name and surname

Create a nameIncludes(data) method that, checks for the text data argument in the student’s name
and returns true if a match is found or false if not found.

Create a static studentBuilder() method that returns a new instance of the class
named ‘Ihor Kohut’ and the direction ‘qc’.

Create a getter and setter direction() to read and specify the direction field.

Create an instance of class stud1 named 'Ivan Petrenko' and direction 'web'.

Create an instance of class stud2 named 'Sergiy Koval' and direction 'python'. */

class Student {
    #fullName;
    #direction;

    constructor(fullName, direction) {
        this.#fullName = fullName;
        this.#direction = direction;
    };

    getFullName() {
        return this.#fullName;
    };

    nameIncludes(data) {
        return this.#fullName.includes(data);
    };

    static studentBuilder() {
        return new Student('Ihor Kohut', 'qc');
    };

    get direction() {
        return this.#direction;
    };

    set direction(newDirection) {
        this.#direction = newDirection;
    };
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');

console.log(stud1)
console.log(stud1.getFullName());
console.log(stud1.direction);

console.log(stud2)
console.log(stud2.getFullName());
console.log(stud2.direction);

const stud3 = Student.studentBuilder();
console.log(stud3)
console.log(stud3.getFullName());
console.log(stud3.direction);

console.log(stud1.nameIncludes('Ivan'));

stud2.direction = "Java";
console.log(stud2.direction);