/* Suppose, you have an array of students:

let students = [{
  name: 'Anna',
  languages: ['English', 'Ukrainian'],
  age: 21
}, {
  name: 'Bob',
  languages: ['Polish', 'Spanish'],
  age: 26
}, {
  name: 'Alice',
  languages: ['Italian', 'German'],
  age: 18
}]

Please, implement a function getLanguages. The function takes an array of students as a first parameter
and a condition on a student (function). getLanguages should return an array of languages from students
that satisfy a condition.

Try to use reduce and not use loops to solve this task. */

/**
 * Filters students by a condition and aggregates their languages into a single array.
 * @param {Array<Object>} students - Array of student objects containing 'name', 'languages', and 'age'.
 * @param {Function} [condition=() => true] - A callback function that evaluates whether a student should be included.
 * @returns {Array<string>} A flattened array of languages from the filtered students.
 */
const getLanguages = (students, condition = () => true) => {
    return students.reduce((langs, student) =>
        condition(student)
            ? langs.concat(student.languages)
            : langs, []);
};

let students1 = [
    { name: 'Anna', languages: ['English', 'Ukrainian'], age: 21 },
    { name: 'Bob', languages: ['Polish', 'Spanish'], age: 26 },
    { name: 'Alice', languages: ['Italian', 'German'], age: 18 }
];
console.log(getLanguages(students1));

let students2 = [
    { name: 'Anna', languages: ['English', 'Ukrainian'], age: 21 },
    { name: 'Bob', languages: ['Polish', 'Japanese'], age: 20 },
    { name: 'Alice', languages: ['Italian', 'German'], age: 18 }
];
console.log(getLanguages(students2, student => student.age < 21));

let students3 = [
    { name: 'Anna', languages: ['English', 'Ukrainian'], age: 21 },
    { name: 'Bob', languages: ['Polish', 'Japanese'], age: 20 },
    { name: 'Alice', languages: ['Italian', 'German'], age: 18 }
];
console.log(getLanguages(students3, student => student.name.startsWith('A')));

let students4 = [
    { name: 'Anna', languages: ['English', 'Ukrainian'], age: 21 },
    { name: 'Bob', languages: ['Polish', 'Japanese', 'Greek'], age: 20 },
    { name: 'Helga', languages: ['JavaScript'], age: 18 },
    { name: 'Alice', languages: ['Italian', 'German'], age: 18 }
];
console.log(getLanguages(students4, student => student.name.length > 2));