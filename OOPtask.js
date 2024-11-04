// Base Book Class
class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.isAvailable = true; 
    }
  
    description() {
      return `${this.title} by ${this.author}`;
    }
  }
  
  
  class Novel extends Book {
    constructor(title, author, ISBN, genre) {
      super(title, author, ISBN);
      this.genre = genre;
    }
  
    description() {
      return `Novel: "${this.title}" by ${this.author} (Genre: ${this.genre})`;
    }
  }
  
  class Magazine extends Book {
    constructor(title, author, ISBN, issue) {
      super(title, author, ISBN);
      this.issue = issue;
    }
  
    description() {
      return `Magazine: "${this.title}" by ${this.author} (Issue: ${this.issue})`;
    }
  }
  
  class ResearchPaper extends Book {
    constructor(title, author, ISBN, field) {
      super(title, author, ISBN);
      this.field = field;
    }
  
    description() {
      return `Research Paper: "${this.title}" by ${this.author} (Field: ${this.field})`;
    }
  }
  

  class User {
    constructor(name, userID) {
      this.name = name;
      this.userID = userID;
      this.borrowedBooks = []; 
    }
  }
  

  class Library {
    constructor() {
      this.books = []; 
      this.users = []; 
    }
  

    addBook(book) {
      this.books.push(book);
      console.log(`Book added: ${book.description()}`);
    }
  

    registerUser(user) {
      this.users.push(user);
      console.log(`User registered: ${user.name}`);
    }

    borrowBook(user, book) {
      if (book.isAvailable) {
        book.isAvailable = false;
        user.borrowedBooks.push(book);
        console.log(`${user.name} borrowed "${book.title}".`);
      } else {
        console.log(`Sorry, "${book.title}" is currently unavailable.`);
      }
    }
  

    returnBook(user, book) {
      const bookIndex = user.borrowedBooks.indexOf(book);
      if (bookIndex !== -1) {
        book.isAvailable = true;
        user.borrowedBooks.splice(bookIndex, 1);
        console.log(`${user.name} returned "${book.title}".`);
      } else {
        console.log(`${user.name} does not have "${book.title}" borrowed.`);
      }
    }
  

    showInventory() {
      console.log("Library Inventory:");
      this.books.forEach(book => {
        const availability = book.isAvailable ? "Available" : "Borrowed";
        console.log(`${book.description()} - ${availability}`);
      });
    }
  }
  


  let novel = new Novel("The Great Gatsby", "F. Scott Fitzgerald", "12345", "Classic");
  let magazine = new Magazine("National Geographic", "John Doe", "67890", "October 2023");
  let researchPaper = new ResearchPaper("Quantum Mechanics", "Albert Einstein", "11223", "Physics");
  

  let library = new Library();
  library.addBook(novel);
  library.addBook(magazine);
  library.addBook(researchPaper);
  

  let user = new User("Alice", "U001");
  library.registerUser(user);
  

  library.borrowBook(user, novel);  
  library.borrowBook(user, magazine); 
  library.returnBook(user, novel);   
  

  library.showInventory();







  
// Ecommerce
class Product {
    constructor(name, price, category) {
      this.name = name;
      this.category = category;
      let _price = price;   // 
      let _stock = 0;       // 
      this.getPrice = () => _price;
      this.setPrice = (newPrice) => {
        if (newPrice > 0) _price = newPrice;
        else console.log("Price must be positive.");
      };
  

      this.getStock = () => _stock;
      this.setStock = (newStock) => {
        if (newStock >= 0) _stock = newStock;
        else console.log("Stock cannot be negative.");
      };
    }
  
    displayDetails() {
      return `Name: ${this.name}\nCategory: ${this.category}\nPrice: $${this.getPrice()}\nStock: ${this.getStock()}`;
    }
  }
  

  class Electronics extends Product {
    constructor(name, price, warrantyPeriod) {
      super(name, price, "Electronics");
      this.warrantyPeriod = warrantyPeriod;  
    }
  
    displayDetails() {
      return `${super.displayDetails()}\nWarranty Period: ${this.warrantyPeriod} years`;
    }
  }
  

  class Clothing extends Product {
    constructor(name, price, size) {
      super(name, price, "Clothing");
      this.size = size;  
    }
  
    displayDetails() {
      return `${super.displayDetails()}\nSize: ${this.size}`;
    }
  }
  

  class Furniture extends Product {
    constructor(name, price, dimensions) {
      super(name, price, "Furniture");
      this.dimensions = dimensions; 
    }
  
    displayDetails() {
      return `${super.displayDetails()}\nDimensions: ${this.dimensions}`;
    }
  }
  

  class ProductCatalog {
    constructor() {
      this.products = []; 
    }
  

    addProduct(product) {
      this.products.push(product);
      console.log(`Added: ${product.name}`);
    }
  

    removeProduct(name) {
      const index = this.products.findIndex(product => product.name === name);
      if (index !== -1) {
        console.log(`Removed: ${this.products[index].name}`);
        this.products.splice(index, 1);
      } else {
        console.log("Product not found.");
      }
    }
  

    searchProduct(name) {
      const product = this.products.find(product => product.name === name);
      if (product) {
        console.log(`Found product:\n${product.displayDetails()}`);
      } else {
        console.log("Product not found.");
      }
    }
  

    showCatalog() {
      console.log("Product Catalog:");
      this.products.forEach(product => console.log(product.displayDetails() + "\n"));
    }
  }
  

  let phone = new Electronics("Smartphone", 699, 2);
  let jeans = new Clothing("Jeans", 49, "M");
  let table = new Furniture("Dining Table", 299, "6x4 ft");
  

  phone.setStock(50);
  jeans.setStock(120);
  table.setStock(20);
  

  let catalog = new ProductCatalog();
  catalog.addProduct(phone);
  catalog.addProduct(jeans);
  catalog.addProduct(table);
  

  catalog.showCatalog();
  

  catalog.searchProduct("Smartphone");
  

  catalog.removeProduct("Dining Table");

  catalog.showCatalog();
  








// Banking system
class Account {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    let _balance = 0;  


    this.getBalance = () => _balance;


    this.deposit = (amount) => {
      if (amount > 0) {
        _balance += amount;
        console.log(`Deposit successful. New balance: $${_balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    };


    this.withdraw = (amount) => {
      if (amount > 0 && amount <= _balance) {
        _balance -= amount;
        console.log(`Withdrawal successful. New balance: $${_balance}`);
      } else {
        console.log("Insufficient balance or invalid amount.");
      }
    };


    this.checkBalance = () => {
      console.log(`Account Balance: $${_balance}`);
      return _balance;
    };
  }
}


class SavingsAccount extends Account {
  constructor(accountNumber, accountHolder, interestRate, minBalance = 100) {
    super(accountNumber, accountHolder);
    this.interestRate = interestRate;
    this.minBalance = minBalance;
  }


  withdraw(amount) {
    if (this.getBalance() - amount >= this.minBalance) {
      super.withdraw(amount);
    } else {
      console.log(`Withdrawal denied. Minimum balance of $${this.minBalance} required.`);
    }
  }


  calculateInterest() {
    const interest = this.getBalance() * (this.interestRate / 100);
    console.log(`Interest Earned: $${interest.toFixed(2)}`);
    return interest;
  }
}


class CheckingAccount extends Account {
  constructor(accountNumber, accountHolder, overdraftLimit = 0) {
    super(accountNumber, accountHolder);
    this.overdraftLimit = overdraftLimit;
  }


  withdraw(amount) {
    if (this.getBalance() - amount >= -this.overdraftLimit) {
      super.withdraw(amount);
    } else {
      console.log("Withdrawal denied. Overdraft limit exceeded.");
    }
  }
}


const savingsAcc = new SavingsAccount("12345", "Alice", 2.5, 100);
savingsAcc.deposit(500);
savingsAcc.withdraw(100);  
savingsAcc.calculateInterest();  


savingsAcc.withdraw(450); 


const checkingAcc = new CheckingAccount("54321", "Bob", 200);
checkingAcc.deposit(300);
checkingAcc.withdraw(450);  
checkingAcc.checkBalance(); 


checkingAcc.withdraw(100); 
