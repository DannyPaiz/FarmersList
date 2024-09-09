const Product = require("./Product");

class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product) {
        // product instanceOf Product
        // Checks if 

        // if(!product) return;
        this.products.push(product);
        this.total += product.price;
    }

    // I
    removeProduct(i){
        if(i>this.products.length) return "Product does not exist in the cart!";
        this.total -= this.products[i].price;
        this.products.splice(i,1);
    }
}

module.exports = Cart;