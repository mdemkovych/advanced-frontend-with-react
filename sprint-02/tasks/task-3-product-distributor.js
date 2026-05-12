/* Please, fill in missed lines of code.

Product constructor should provide a generation of unique product id within the application
no matter how many products are created.

Distributor can store information about products in its products property
and has an ability to add and remove a product.

addProduct adds a new property to products with name of product id and value - product name.

removeProduct removes a property with specified id from products

Please, use Symbol data type. */

class Distributor {
    constructor() {
        this.products = {};
    }

    addProduct(id, name) {
        this.products[id] = name;
    }

    removeProduct(id) {
        delete this.products[id];
    }
}

const localDistributor = new Distributor();

class MyProduct {
    constructor(name) {
        this.id = Symbol(name);
        this.name = name;
    }

    distribute(distributor) {
        distributor.addProduct(this.id, this.name);
    }
}

const product1 = new MyProduct('butter');
product1.distribute(localDistributor)
console.log(localDistributor.products);

new MyProduct('bread').distribute(localDistributor);
new MyProduct('bread').distribute(localDistributor);
console.log(localDistributor.products);

localDistributor.removeProduct(product1.id)
console.log(localDistributor.products);