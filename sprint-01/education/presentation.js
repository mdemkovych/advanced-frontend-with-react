/* PRESENTATION */
// Learning Note: Type conversions and array basic manipulation examples.

// Type conversions
let baseAge = 20;
baseAge = baseAge + "Maks";
console.log(baseAge);

let stringNumber = "10";
let parsedNumber = +stringNumber;
console.log(parsedNumber);

// parseInt ()
// parseFloat ()

// !! - True
let stringBoolean = "1";
let booleanValue = !stringBoolean;
console.log(booleanValue); // false
console.log(typeof booleanValue); // "boolean". typeOf - to check the type

//array
const arr = [];
const cities = ["London", "Paris", "Berlin"];
console.log(cities[0]); // London

// cities[5] = "Kyiv";
// console.log(cities);

// for of
for (let city of cities) {
    console.log(city);
}

//for
for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i] + "!";
}
console.log(cities);

// adding an element to the end
cities.push("Kyiv");
console.log(cities);

// deleting the first element
cities.shift()
console.log(cities);

// delete an element of the array by its index (position)
const deletedElem = cities.splice(0, 1);
console.log(deletedElem);
console.log(cities);

//filter() method creates a new array with all the elements tested
const filteredCities = cities.filter(city => city.length < 5);
console.log(filteredCities);

// map() method creates a new array by performing
const capitalizedCities = cities.map(city => city + "Capital");
console.log(capitalizedCities);

// reduce() method performs the reducer function
const data = [2, 4, 6, 8];
const reducer = (total, value) => total + value;
const sum = data.reduce(reducer);
console.log(sum);