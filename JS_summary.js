// JavaScript is one of the core technologies of the web, powering the dynamic behavior of websites and enabling interactive experiences for users. As a versatile, high-level programming language, it’s essential not only for building front-end elements but also increasingly on the back-end, thanks to environments like Node.js. JavaScript's adaptability has made it a vital tool in web development, allowing developers to create everything from small webpage features to large, complex web applications.

// In this Summary, I’ll recap some foundational concepts in JavaScript that I’ve been learning. We’ll explore variables, functions, objects, arrays, and classes—each a building block that brings structure and functionality to code. These topics form the basis of JavaScript programming, and understanding them is crucial for writing clean, efficient, and modular code.



Variables;

// Variables in JavaScript act like storage containers for data. They allow us to store and manipulate values, making it possible to create dynamic and interactive web experiences. Variables can be defined using keywords like `let`, `const`, and `var`, each serving a slightly different purpose and having its own rules about how the data can be accessed and changed.

// Types of Variable Declarations

// 1. `let`: The `let` keyword allows you to declare a variable with block-level scope. This means the variable is only accessible within the block or function in which it was declared. Unlike `const`, variables declared with `let` can be reassigned.

//    Example:
//    let age = 25;
//    age = 26; // Reassignment is allowed with let

// 2. `const`: `const` is used to declare variables with values that won’t change, meaning they are constant. Variables declared with `const` cannot be reassigned, and they are also block-scoped like `let`.

//    Example:
//    const birthYear = 1995;
//    // birthYear = 1996; // This would cause an error

// 3. `var`: Although still supported, `var` is the oldest way to declare variables in JavaScript. Unlike `let` and `const`, variables declared with `var` are function-scoped or global-scoped, which can sometimes lead to unexpected behavior. It’s generally recommended to use `let` and `const` for more predictable and controlled code.

//    *Example*:
//    var name = "John";
//    name = "Jane"; // Reassignment is allowed with var

// Examples and Usage

// Variables allow us to store data like numbers, strings, and objects. Here’s an example that shows variables in action:

// const firstName = "Alice";
// let age = 30;
// var isStudent = true;

// Each variable here represents a different data type:
// - `firstName` is a string.
// - `age` is a number.
// - `isStudent` is a boolean.

Functions;

// In JavaScript, functions are blocks of code designed to perform specific tasks. They allow us to organize code into reusable parts, which helps make code more readable, efficient, and easier to debug. When you create a function, you can call it whenever needed and pass in different values to get different outputs.

// Types of Functions

// 1. Function Declaration: This is the traditional way of defining a function using the `function` keyword. Function declarations are "hoisted," meaning they can be called before they appear in the code.

//    Example:
//    function greet(name) {
//        return "Hello, " + name;
//    }

// 2. Function Expression: This involves assigning a function to a variable. Function expressions are not hoisted, so they must be defined before they’re called.

//    Example:
//    const greet = function(name) {
//        return "Hello, " + name;
//    }

// 3. Arrow Functions: Arrow functions are a shorter syntax for function expressions introduced in ES6. They don’t have their own `this` context, which can be useful for certain tasks.

//    Example:
//    const greet = (name) => "Hello, " + name;


// Parameters and Arguments

// Functions can accept inputs called *parameters*. When we call a function, we pass in *arguments*, which are the actual values used within the function. This makes functions flexible, as they can perform operations based on the input provided.

// Example:
// function add(a, b) {
//     return a + b;
// }

// const result = add(5, 10); // Arguments 5 and 10 are passed in


// Return Values

// Functions can also *return* a result using the `return` keyword. Once `return` is executed, the function stops running and gives back the value specified.

// Example:
// function square(number) {
//     return number * number;
// }

// const result = square(4); // result is 16


// Example of Using Functions Together

// Functions can call each other and work together. Here’s an example of a function that calculates the area of a rectangle:

// function calculateArea(length, width) {
//     return length * width;
// }

// const area = calculateArea(5, 10); // area is 50




Objects;

// JavaScript objects are collections of related data and functionality. They allow us to store multiple properties (key-value pairs) and methods (functions associated with an object) in a single, organized structure. Objects are essential in JavaScript for representing real-world entities and organizing complex data.

// Creating an Object

// We can create an object using curly braces `{}`. Inside the braces, we define properties (key-value pairs) separated by commas.

// Example:
// const person = {
//     name: "Alice",
//     age: 30,
//     isStudent: true,
//     greet: function() {
//         return "Hello, my name is " + this.name;
//     }
// };


// In this example:
// - `name`, `age`, and `isStudent` are properties of the `person` object.
// - `greet` is a method, which is a function inside the object that can access the object’s properties using `this`.

// Accessing Object Properties

// You can access properties in two main ways:
// 1. Dot Notation:
//    console.log(person.name); // Output: "Alice"

// 2. Bracket Notation:
//    console.log(person["age"]); // Output: 30


// Adding and Modifying Properties

// You can add new properties or modify existing ones after the object has been created.

// Example:
// person.job = "Engineer"; // Adds a new property
// person.age = 31;         // Modifies the age property


// Methods in Objects

// Objects can contain functions as methods, which allow us to perform operations using the object’s data. Methods can access other properties in the object using the `this` keyword, which refers to the current object.

// *Example*:
// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     start: function() {
//         return "The " + this.brand + " " + this.model + " is starting.";
//     }
// };

// console.log(car.start()); // Output: "The Toyota Corolla is starting."


// Using Objects to Group Data

// Objects are perfect for grouping related data, making it easier to manage and understand complex information.

// Example:
// const book = {
//     title: "JavaScript Basics",
//     author: "Jane Doe",
//     pages: 200,
//     readStatus: false,
//     toggleReadStatus: function() {
//         this.readStatus = !this.readStatus;
//     }
// };

// book.toggleReadStatus(); // Changes readStatus to true




Arrays;

// In JavaScript, arrays are used to store collections of data in a single, ordered structure. Arrays are particularly useful for organizing lists of items, such as numbers, names, or even objects, and allow for powerful and flexible data manipulation.

// Creating an Array

// You can create an array by using square brackets `[]` and separating each element with a comma.

// Example:
// const fruits = ["apple", "banana", "cherry"];


// Here, `fruits` is an array containing three elements: "apple", "banana", and "cherry."

// Accessing Array Elements

// Each item in an array is assigned an index, starting from 0. You can access elements by referencing their index.

// Example:
// console.log(fruits[0]); // Output: "apple"

// Modifying Array Elements

// You can change elements in an array by assigning a new value to a specific index.

// Example:
// fruits[1] = "blueberry"; // Changes "banana" to "blueberry"
// console.log(fruits);     // Output: ["apple", "blueberry", "cherry"]


// Array Methods

// JavaScript arrays come with many built-in methods that allow us to manipulate data in various ways:

// 1. push() - Adds an element to the end of the array.
//    fruits.push("date");
//    console.log(fruits); // Output: ["apple", "blueberry", "cherry", "date"]


// 2. pop() - Removes the last element of the array.
//    fruits.pop();
//    console.log(fruits); // Output: ["apple", "blueberry", "cherry"]


// 3. shift() - Removes the first element of the array.
//    fruits.shift();
//    console.log(fruits); // Output: ["blueberry", "cherry"]

// 4. unshift() - Adds an element to the beginning of the array.
//    fruits.unshift("kiwi");
//    console.log(fruits); // Output: ["kiwi", "blueberry", "cherry"]


// 5. forEach() - Iterates over each element in the array and executes a function for each item.
//    fruits.forEach((fruit) => {
//        console.log(fruit);
//    });
//    // Output: kiwi, blueberry, cherry (each on a new line)

// Using Arrays to Store Objects

// You can store objects in an array, which is useful for keeping multiple items that share a similar structure, like a list of books, users, or products.

// Example:
// const books = [
//     { title: "Book 1", author: "Author 1" },
//     { title: "Book 2", author: "Author 2" },
//     { title: "Book 3", author: "Author 3" }
// ];

// books.forEach((book) => {
//     console.log(book.title);
// });
// // Output: Book 1, Book 2, Book 3



Classes;

// In JavaScript, classes provide a way to create objects with shared properties and methods. They are templates for creating objects and are part of JavaScript's Object-Oriented Programming (OOP) approach, allowing us to group data (properties) and behavior (methods) together.

// Creating a Class

// A class is defined using the `class` keyword, followed by a name (often capitalized by convention). Inside the class, we define a special method called a `constructor`, which is a function that initializes the properties of each new object created from the class.

// Example:
// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
// }


// Here, the `Animal` class has a `constructor` that accepts two parameters (`name` and `type`) and assigns them to properties of the object.

// Creating an Instance of a Class

// An instance is a specific object created from a class. To create an instance, we use the `new` keyword followed by the class name and pass any necessary arguments to the constructor.

// Example:
// const dog = new Animal("Buddy", "Dog");
// console.log(dog.name); // Output: "Buddy"
// console.log(dog.type); // Output: "Dog"

// Adding Methods to a Class

// We can add methods to a class to define behaviors for objects created from it. These methods can access the properties of the object using the `this` keyword.

// Example:
// class Animal {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }

//     makeSound() {
//         return `${this.name} makes a sound.`;
//     }
// }

// const cat = new Animal("Whiskers", "Cat");
// console.log(cat.makeSound()); // Output: "Whiskers makes a sound."


// Inheritance

// Classes can inherit properties and methods from other classes using the `extends` keyword. This allows us to create specialized classes based on a more general class.

// Example:
// class Dog extends Animal {
//     bark() {
//         return `${this.name} barks!`;
//     }
// }

// const myDog = new Dog("Rex", "Dog");
// console.log(myDog.makeSound()); // Output: "Rex makes a sound."
// console.log(myDog.bark());      // Output: "Rex barks!"

// Encapsulation

// Encapsulation in classes means keeping some properties or methods private, so they can't be accessed or modified directly from outside the class. In JavaScript, we use a convention with the `#` symbol (private fields) to make properties or methods private.

// Example:
// class BankAccount {
//     #balance;
    
//     constructor(initialBalance) {
//         this.#balance = initialBalance;
//     }

//     getBalance() {
//         return this.#balance;
//     }

//     deposit(amount) {
//         this.#balance += amount;
//     }
// }

// const account = new BankAccount(100);
// account.deposit(50);
// console.log(account.getBalance()); // Output: 150
// // console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class


// Polymorphism

// Polymorphism allows different classes to have methods with the same name but different implementations. This helps create more flexible code.

// Example:
// class Bird extends Animal {
//     makeSound() {
//         return `${this.name} chirps!`;
//     }
// }

// const myBird = new Bird("Tweety", "Bird");
// console.log(myBird.makeSound()); // Output: "Tweety chirps!"


