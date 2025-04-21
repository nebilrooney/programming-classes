// Base class for all products
class ProductProperties {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Calculates the total value in stock
  getTotalValue() {
    return this.price * this.quantity;
  }

  // Returns product information as a string
  toString() {
    return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
  }

  // Static method to apply discount to multiple products
  static applyDiscount(products, discount) {
    products.forEach(product => {
      product.price -= product.price * discount;
    });
  }
}

// Subclass for products that can expire
class PerishableProductProperties extends ProductProperties {
  constructor(name, price, quantity, expirationDate) {
    super(name, price, quantity);
    this.expirationDate = expirationDate;
  }

  // Adds expiration date to string output
  toString() {
    return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
  }
}

// Class to manage the inventory of the store
class StoreProperties {
  constructor() {
    this.inventory = [];
  }

  // Adds a product to the store
  addProduct(product) {
    this.inventory.push(product);
  }

  // Calculates total value of all items in inventory
  getInventoryValue() {
    return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
  }

  // Finds a product by name
  findProductByName(name) {
    return this.inventory.find(product => product.name === name) || null;
  }
}

// Function to display all products in the inventory
function displayInventory(store) {
  console.log("Store Inventory:");
  store.inventory.forEach(product => {
    console.log(product.toString());
  });
}

// Function to apply discount and show before/after value
function applyDiscountToStore(store, discount) {
  const before = store.getInventoryValue();
  console.log(`\nInventory Value BEFORE ${discount * 100}% Discount: $${before.toFixed(2)}`);

  ProductProperties.applyDiscount(store.inventory, discount);

  const after = store.getInventoryValue();
  console.log(`Inventory Value AFTER Discount: $${after.toFixed(2)}\n`);
}

// ================== Testing the System ==================

// Create 6 products (including 2 perishable)
const product1 = new ProductProperties("Book", 2.00, 40);
const product2 = new ProductProperties("Egg", 1.60, 100);
const product3 = new ProductProperties("Apple", 4.00, 50);
const perishable1 = new PerishableProductProperties("Milk", 2.00, 10, "2026-11-01");
const perishable2 = new PerishableProductProperties("Juice", 0.99, 20, "2025-9-25");
const product4 = new ProductProperties("Meat", 0.50, 60);

// Create a store and add products
const store = new StoreProperties();
store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);
store.addProduct(perishable1);
store.addProduct(perishable2);
store.addProduct(product4);

// Show inventory before discount
displayInventory(store);

// Apply 15% discount to all products
applyDiscountToStore(store, 0.15);

// Search for a product that exists
const found = store.findProductByName("Milk");
if (found) {
  console.log("Found Product:", found.toString());
} else {
  console.log("Product not found.");
}

// Search for a product that does NOT exist
const notFound = store.findProductByName("Butter");
if (!notFound) {
  console.log("Product 'Butter' not found in inventory.");
}
