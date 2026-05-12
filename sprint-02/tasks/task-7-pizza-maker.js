/* Implement the PizzaMaker class, which allows you to create pizza of different types, with different ingredients,
calculate the price and calorie content of pizza.

The pizza comes in 3 sizes: S, M and L.

There are 4 types of pizza available: meat, fish, cheese and vegetarian.

When creating a new pizza, be sure to specify the size and appearance.

Additional ingredients are available that can be added to the pizza at the customer's request:
 tomatoes, peppers, bacon and olives.

Each element that makes up pizza has its own name, price and calorie content.
All of this data is contained in the pizzaMenu object.

The PizzaMaker class has a number of methods for generating pizza:

- addIngredient(ingredient) method adds an additional ingredient to the pizza. A new ingredient is added
if it is not included in the pizza, and the message "ingredient_name has been added" is displayed in the console.
If such an ingredient has already been added, the message "Such an ingredient already exists!" Is generated.

- deleteIngredient(ingredient) method removes the specified ingredient from the list of existing ingredients,
 displays the message "ingredient_name has been deleted" to the console.

- getIngredients() method returns a list of the attached ingredients with their name, price, calorie content.

- getSize() method returns the size of the pizza.

- getKind() method returns the type of pizza.

- calculatePrice() method calculates and returns the total cost of a pizza, which consists of the sum of
the values of all its components.

- calculateCalories() method calculates and returns the total calorie content of a pizza, which consists of the sum
of the calories of all its components. */

const pizzaMenu = {
    SIZE_S: {param: 'SIZE_S', price: 60, calorie: 300},
    SIZE_M: {param: 'SIZE_M', price: 90, calorie: 450},
    SIZE_L: {param: 'SIZE_L', price: 110, calorie: 600},
    KIND_MEAT: {param: 'KIND_MEAT', price: 55, calorie: 230},
    KIND_FISH: {param: 'KIND_FISH', price: 70, calorie: 150},
    KIND_CHEESE: {param: 'KIND_CHEESE', price: 50, calorie: 200},
    KIND_VEGETARIAN: {param: 'KIND_VEGETARIAN', price: 35, calorie: 50},
    INGREDIENT_TOMATOES: {param: 'INGREDIENT_TOMATOES', price: 15, calorie: 5},
    INGREDIENT_PEPPER: {param: 'INGREDIENT_PEPPER', price: 18, calorie: 5},
    INGREDIENT_BACON: {param: 'INGREDIENT_BACON', price: 25, calorie: 40},
    INGREDIENT_OLIVES: {param: 'INGREDIENT_OLIVES', price: 20, calorie: 0},
};

const VALID_SIZES = new Set([pizzaMenu.SIZE_S, pizzaMenu.SIZE_M, pizzaMenu.SIZE_L]);
const VALID_KINDS = new Set([pizzaMenu.KIND_MEAT, pizzaMenu.KIND_FISH, pizzaMenu.KIND_CHEESE, pizzaMenu.KIND_VEGETARIAN]);
const VALID_INGREDIENTS = new Set([
    pizzaMenu.INGREDIENT_TOMATOES,
    pizzaMenu.INGREDIENT_PEPPER,
    pizzaMenu.INGREDIENT_BACON,
    pizzaMenu.INGREDIENT_OLIVES,
]);


class PizzaMaker {

    constructor(size, kind) {
        if (!VALID_SIZES.has(size)) throw new Error('Invalid size!');
        if (!VALID_KINDS.has(kind)) throw new Error('Invalid kind!');

        this.size = size;
        this.kind = kind;
        this.ingredients = [];
    }

    addIngredient(ingredient) {
        if (!VALID_INGREDIENTS.has(ingredient)) {
            console.log('Invalid ingredient!');
            return;
        }
        if (this.ingredients.includes(ingredient)) {
            console.log('Such an ingredient already exists!');
        } else {
            this.ingredients.push(ingredient);
            console.log(`${ingredient.param} has been added`);
        }
    }

    deleteIngredient(ingredient) {
        const index = this.ingredients.indexOf(ingredient);
        if (index !== -1) {
            this.ingredients.splice(index, 1);
            console.log(`${ingredient.param} has been deleted`);
        } else {
            console.log('Ingredient not found!');
        }
    }

    getIngredients() {
        return this.ingredients.map(ing => ({...ing}));
    }

    getSize() {
        return this.size.param;
    }

    getKind() {
        return this.kind.param;
    }

    #calculateTotal(property) {
        const base = this.size[property] + this.kind[property];
        return this.ingredients.reduce((total, ing) => total + ing[property], base);
    }

    calculatePrice() {
        return this.#calculateTotal('price');
    }

    calculateCalories() {
        return this.#calculateTotal('calorie');
    }
}

const pizza1 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("Size:", pizza1.getSize());

const pizza2 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("Kind:", pizza2.getKind());

const pizza3 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("calculatePrice:", pizza3.calculatePrice());

const pizza4 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("calculateCalories:", pizza4.calculateCalories());

const pizza5 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("getIngredients:", pizza5.getIngredients());

const pizza6 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza6.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);

const pizza7 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza7.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza7.addIngredient(pizzaMenu.INGREDIENT_BACON);

const pizza8 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza8.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
pizza8.addIngredient(pizzaMenu.INGREDIENT_BACON);

const pizza9 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza9.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
pizza9.addIngredient(pizzaMenu.INGREDIENT_BACON);
console.log("getIngredients:", pizza9.getIngredients());

const pizza10 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza10.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
pizza10.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza10.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);

const pizza11 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza11.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
pizza11.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza11.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);
console.log("getIngredients:", pizza11.getIngredients());

const pizza12 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
pizza12.addIngredient(pizzaMenu.INGREDIENT_PEPPER);
console.log("getIngredients:", pizza12.getIngredients());
pizza12.addIngredient(pizzaMenu.INGREDIENT_PEPPER);

const pizza13 = new PizzaMaker(pizzaMenu.SIZE_L, pizzaMenu.KIND_FISH);
console.log("Size:", pizza13.getSize());
console.log("Kind:", pizza13.getKind());

const pizza14 = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log("Size:", pizza14.getSize());
console.log("Kind:", pizza14.getKind());
console.log("calculatePrice:", pizza14.calculatePrice());
console.log("calculateCalories:", pizza14.calculateCalories());
pizza14.addIngredient(pizzaMenu.INGREDIENT_OLIVES);
pizza14.addIngredient(pizzaMenu.INGREDIENT_BACON);
console.log("calculatePrice:", pizza14.calculatePrice());
console.log("calculateCalories:", pizza14.calculateCalories());