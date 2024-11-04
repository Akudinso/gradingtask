// const Hello = (name, age) => {console.log(`Hello ${name}`)
//     console.log(`You are ${age} years old`)
// }

// Hello('james', 32);





// setTimeout(hey, 3000);

// function hey() {
//     console.log('Hello')
// }


// setTimeout(function hey() {
//     console.log('Hello')
// }, 3000);


// setTimeout(() => console.log('Hello World!'), 3000);


// const numbers = [1,2,3,4,5,6];

// const square = numbers.map((element) => Math.pow(element, 2));
// const cube = numbers.map((element) => Math.pow(element,3));
// const evenNumbers = numbers.filter((element) => element % 2 === 0);
// const oddNumber = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((value, element) => value + element);


// console.log(square);
// console.log(cube);
// console.log(oddNumber);
// console.log(evenNumbers);
// console.log(total);



// // Object is a collection of related properties, and/or method.. properties are things that an object has such as name and age {person}. method is a function that belongs to an object.


// const person1 = {
//     firstname : "SpongeBob",
//     Lastname : "SquarePants",
//     age : 30,
//     isEmployed : true,
//     sayHello: function () {console.log('Hi! I am SpongeBob.')},
//     eat: function () {console.log('I am eating a Crabby Patty!')},
// }

// console.log(person1.Lastname);
// person1.sayHello();
// person1.eat();




// const person2 = {
//     firstname : "Patrick",
//     Lastname : "Star",
//     age : 42,
//     isEmployed : false,
//     sayHello: () => {return 'Hey! I am Patrick.'},
//     eat2: () => {return 'I am going to eat Nothing'},
// }

// console.log(person2.firstname);
// console.log(person2.sayHello());

// console.log(person2.eat2())


// // the error from our last class was simply because we console logged a mthod/function that doesnt have a return statement



// const person3 = {
//     firstname : "Chioma",
//     favFood : 'pizza',
//     Lastname : "Star",
//     age : 42,
//     isEmployed : false,
//     sayHello: function () {return `${this.firstname} is eating ${this.favFood}`},
//     eat2: function () {return 'I am going to eat Nothing'},
// }

// console.log(person3.firstname);
// console.log(person3.sayHello());

// console.log(person3.eat2())

// function Car (make, model, year, color) {
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
//     this.drive = function () {console.log(`you drive a ${year} ${make} `)}
// }

// const car1 = new Car('Mercedes', 'GLE coupe', '2024', 'Cyan Blue')
// const car2 = new Car('Tesla', 'X', '2024', 'Red')
// const car3 = new Car('Dodge', 'Charge', '2025', 'Green')

// car3.drive();

// class Product {
//     constructor(name, price){
//         this.name = name,
//         this.price = price
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);

//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }


// const salesTax = 0.05;

// const product1 = new Product('Louis Vuiton', 19.99);
// const product2 = new Product('Chanel', 39.9);
// const product3 = new Product('Dior', 45);
// product1.displayProduct();
// product2.displayProduct();

// const Total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${Total.toFixed(2)}`);


// // Static keyword

// class User{

//     static userCount = 0;

//     constructor(username) {
//         this.username = username,
//         User.userCount++;
//     }

//     sayHello(){
//         console.log(`Hi, my name is ${this.username}`)
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online!`)
//     }

// };

// const user1 = new User ('SpongeBob')
// const user2 = new User ('Patrick')

// console.log(`This is ${user1.username}`)
// console.log(`This is ${User.userCount}`)
// user2.sayHello();
// User.getUserCount();


// class Animal {
//     isAlive = true;

//     eat(){
//         console.log(`The ${this.name} is eating `)
//     }

//     sleep(){
//         console.log(`The ${this.name} is sleeping `)
//     }
// }

// class Rabbit extends Animal{
//     name = 'Rabbit'

//     run() {
//         console.log(`This ${this.name} is running`)
//     }
// }

// class Fish extends Animal{
//     name = 'Fish'
// }

// class Hawk extends Animal{
//     name = 'Hawk'
// }

// const rabbit = new Rabbit()
// const fish = new Fish()
// const hawk = new Hawk()

// console.log(rabbit.isAlive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run()


// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age(x) {
//       return x - this.year;
//     }
//   }
  
//   const date = new Date();
//   let year = date.getFullYear();
  
//   const myCar = new Car("Ford", 2014);
//   document.getElementById("demo").innerHTML=
//   "My car is " + myCar.age(year) + " years old.";


//   getters and setters

class Car {
    constructor (power, gas) {
        this._gas = 25,
        this._power = power;
    }
    get gas (){
        return `Your gas is ${this._gas}L (${this._gas / 50 * 100}%)`
    }

    get power () {
        return `${this._power}hp`;
    }

    set power(power) {
        
    }
  
};

const car = new Car (400)

console.log(car.power);
console.log(car.gas);