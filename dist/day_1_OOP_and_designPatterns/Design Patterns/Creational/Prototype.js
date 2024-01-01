"use strict";
class Product {
    constructor(name, price, warranty) {
        this.name = name;
        this.price = price;
        this.warranty = warranty;
    }
    // Assume we implement methods, getters and setters all here
    clone() {
        return new Product(this.name, this.price, this.warranty);
    }
}
const productOne = new Product("Laptop", 2500000, new Date(2050));
const productTwo = productOne.clone();
// productOne !== productTwo but their properties are the same
