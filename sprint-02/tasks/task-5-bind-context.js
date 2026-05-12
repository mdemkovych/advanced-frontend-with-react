/* We have the product() function, you can see it on the snapshot below. This product() function finds the product
of its arguments and also uses this object for the initial value of the product.

Please, create a new function getProduct()  that, no matter how it is called, will be always bound to a particular
this value. getProduct() should be created from the original product() function and work with the same logic, but
should pass two additional arguments – 2 and 3 – to the original function, every time getProduct() is called.

Object this for getProduct() function you should also define by yourself. */

const product = function () {
    console.log(arguments)
    // Learning Note: arguments is an array-like object; we use [].reduce.call to iterate over it.
    return [].reduce.call(arguments, function (res, elem) {
        return res * elem;
    }, this.product); // initial res
};

const contextObj = {product: 10}

const getProduct = product.bind(contextObj, 2, 3);

console.log(getProduct(4, 5));
console.log(getProduct(-5, 5));