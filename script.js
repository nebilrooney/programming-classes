// Part 1: Base Class
class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }


getTotalValue() {
    return this.price * this.quantity;
  }


toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
  }
}

const product1 = new ProductProperties("Notebook", 2.00, 40);
console.log(product1.toString());
console.log("Total Value:", product1.getTotalValue());

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }
  
    toString() {
      return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
  }
  
