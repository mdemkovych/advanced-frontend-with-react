/* OOP - Class */
// Learning Note: Classes are blueprints for creating objects. They encapsulate data with code to work on that data.

class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Getters allow you to access properties as if they were variables.
    get studentName() {
        return this.name;
    }

    get studentAge() {
        return this.age;
    }

    get studentCourse() {
        return this.course;
    }

    // Setters allow you to execute logic when a property is being updated.
    set studentCourse(course) {
        if (course > 6) {
            console.log("Incorrect course");
            return;
        }
        this.course = course;
    }

    // Static value
    // Static properties/methods belong to the class itself, not the instances.
    static studentType = "magister";
}

const studentInstance = new Student("Maksym", 21, 5);

console.log(studentInstance);
console.log(studentInstance.studentName);
console.log(studentInstance.studentAge);
console.log(studentInstance.studentCourse);
console.log(studentInstance.studentType); // undefined - static props aren't on instances
console.log(Student.studentType); // Correct way to access static props

studentInstance.studentCourse = 6;
console.log(studentInstance.studentCourse);