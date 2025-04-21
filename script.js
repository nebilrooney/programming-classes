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

const product  = new ProductProperties("Ruler", 2.00, 40);
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
  

  static applyDiscount(products, discount) {
    products.forEach(product => {
      product.price -= product.price * discount;
    });
  }
}
  class StoreProperties {
    constructor() {
      this.inventory = [];
    }
  
    addProduct(product) {
      this.inventory.push(product);
    }
  
    getInventoryValue() {
      return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
  
    findProductByName(name) {
      return this.inventory.find(product => product.name === name) || null;
    }
  }

  // Create 5 products (2 perishable)
const product1 = new ProductProperties("Ruler", 2.00, 40);
const product2 = new ProductProperties("Apple", 3.50, 100);
const product3 = new ProductProperties("Mango", 4.00, 10);
const perishable1 = new PerishableProductProperties("Egg", 1.50, 10, "2024-10-10");
const perishable2 = new PerishableProductProperties("Juice", 0.99, 20, "2024-19-05");

// Add to store
const store = new StoreProperties();
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(perishable1);
store.addProduct(perishable2); 
  
// Print inventory value before discount
console.log("Inventory Value BEFORE Discount: $" + store.getInventoryValue().toFixed(2));

// Apply 15% discount to all products
ProductProperties.applyDiscount(store.inventory, 0.15);

// Print inventory value after discount
console.log("Inventory Value AFTER 15% Discount: $" + store.getInventoryValue().toFixed(2));

// Find and print details of a specific product
const searchName = "Egg";
const foundProduct = store.findProductByName(searchName);
if (foundProduct) {
  console.log("Found Product:", foundProduct.toString());
} else {
  console.log(`Product '${searchName}' not found.`);
}
